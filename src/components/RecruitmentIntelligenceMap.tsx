"use client";

import { useMemo, useRef, useState } from "react";

const recruitmentNodes = [
  {
    id: "intake",
    label: "01",
    title: "Role intake",
    summary: "Client requirements, scorecards, location, salary, and must-have skills become structured context.",
    status: "Synced",
    x: 14,
    y: 52,
  },
  {
    id: "pool",
    label: "02",
    title: "Candidate pool",
    summary: "Profiles, resumes, source channels, and recruiter notes are normalized into one hiring workspace.",
    status: "Mapped",
    x: 34,
    y: 28,
  },
  {
    id: "screen",
    label: "03",
    title: "AI screening",
    summary: "The agent ranks evidence, flags gaps, and prepares shortlist reasoning for recruiter review.",
    status: "Running",
    x: 55,
    y: 52,
  },
  {
    id: "review",
    label: "04",
    title: "Recruiter review",
    summary: "Human approval stays in the loop before any candidate is submitted to the client.",
    status: "Queued",
    x: 75,
    y: 30,
  },
  {
    id: "memory",
    label: "05",
    title: "Hiring memory",
    summary: "Feedback, rejected reasons, interview signals, and placement outcomes improve the next search.",
    status: "Learning",
    x: 88,
    y: 64,
  },
];

export function RecruitmentIntelligenceMap() {
  const [activeId, setActiveId] = useState(recruitmentNodes[2].id);
  const mapRef = useRef<HTMLDivElement>(null);
  const activeNode = useMemo(
    () => recruitmentNodes.find((node) => node.id === activeId) ?? recruitmentNodes[0],
    [activeId],
  );

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = mapRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    const x = ((event.clientX - bounds.left) / bounds.width) * 100;
    const y = ((event.clientY - bounds.top) / bounds.height) * 100;

    mapRef.current?.style.setProperty("--map-cursor-x", `${x}%`);
    mapRef.current?.style.setProperty("--map-cursor-y", `${y}%`);
  }

  return (
    <div
      className="stack-core-visual recruitment-intelligence-map"
      onPointerMove={handlePointerMove}
      ref={mapRef}
    >
      <div className="recruitment-map-heading">
        <span>Recruitment intelligence map</span>
        <strong>From role intake to hiring memory.</strong>
      </div>
      <div className="recruitment-map-canvas" aria-label="Interactive recruitment operations workflow">
        <svg aria-hidden="true" className="recruitment-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path className="map-line map-line-base" d="M14 52 C24 18 42 18 55 52 S73 79 88 64" />
          <path className="map-line map-line-active" d="M14 52 C24 18 42 18 55 52 S73 79 88 64" />
        </svg>
        <div className="recruitment-map-orbit orbit-one" aria-hidden="true" />
        <div className="recruitment-map-orbit orbit-two" aria-hidden="true" />
        <div className="recruitment-map-center">
          <span>{activeNode.status}</span>
          <strong>{activeNode.title}</strong>
          <p>{activeNode.summary}</p>
        </div>
        {recruitmentNodes.map((node) => (
          <button
            className={`recruitment-map-node ${node.id === activeId ? "is-active" : ""}`}
            key={node.id}
            onBlur={() => setActiveId("screen")}
            onFocus={() => setActiveId(node.id)}
            onMouseEnter={() => setActiveId(node.id)}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            type="button"
          >
            <span>{node.label}</span>
            <strong>{node.title}</strong>
          </button>
        ))}
      </div>
      <div className="recruitment-map-status" aria-label="Recruitment system status">
        <span>Live workflow</span>
        <strong>{activeNode.status}</strong>
      </div>
    </div>
  );
}
