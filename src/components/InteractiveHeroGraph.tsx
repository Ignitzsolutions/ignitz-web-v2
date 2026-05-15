"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import type { KnowledgeGraphEdge, KnowledgeGraphNode } from "@/content/types";

type GraphProps = {
  nodes: KnowledgeGraphNode[];
  edges: KnowledgeGraphEdge[];
};

export function InteractiveHeroGraph({ nodes, edges }: GraphProps) {
  const centerNode = nodes.find((node) => node.id === "ignitz") ?? nodes[0];
  const [activeId, setActiveId] = useState(centerNode?.id ?? "");

  const nodeMap = useMemo(
    () => new Map(nodes.map((node) => [node.id, node])),
    [nodes],
  );

  const activeNode = nodeMap.get(activeId) ?? centerNode;

  function isActiveEdge(edge: KnowledgeGraphEdge) {
    return edge.from === activeId || edge.to === activeId;
  }

  return (
    <div className="hero-graph" aria-label="Ignitz knowledge graph">
      <div className="hero-graph-canvas" onMouseLeave={() => setActiveId(centerNode.id)}>
        <svg className="graph-lines" viewBox="0 0 100 100" aria-hidden="true">
          {edges.map((edge) => {
            const from = nodeMap.get(edge.from);
            const to = nodeMap.get(edge.to);

            if (!from || !to) {
              return null;
            }

            return (
              <line
                className={isActiveEdge(edge) ? "graph-edge is-active" : "graph-edge"}
                data-from={edge.from}
                data-to={edge.to}
                key={`${edge.from}-${edge.to}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </svg>
        {nodes.map((node) => {
          const isActive = activeNode?.id === node.id;
          const className = `graph-node graph-node-${node.group}${isActive ? " is-active" : ""}`;
          const style = {
            "--graph-x": `${node.x}%`,
            "--graph-y": `${node.y}%`,
          } as CSSProperties;
          const content = (
            <>
              <span className="graph-node-dot" aria-hidden="true" />
              <span>{node.label}</span>
            </>
          );

          if (node.href) {
            return (
              <Link
                aria-label={`${node.label}: ${node.summary}`}
                className={className}
                href={node.href}
                key={node.id}
                onBlur={() => setActiveId(centerNode.id)}
                onFocus={() => setActiveId(node.id)}
                onMouseEnter={() => setActiveId(node.id)}
                onMouseMove={() => setActiveId(node.id)}
                onPointerEnter={() => setActiveId(node.id)}
                style={style}
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              aria-label={`${node.label}: ${node.summary}`}
              className={className}
              key={node.id}
              onBlur={() => setActiveId(centerNode.id)}
              onFocus={() => setActiveId(node.id)}
              onMouseEnter={() => setActiveId(node.id)}
              onMouseMove={() => setActiveId(node.id)}
              onPointerEnter={() => setActiveId(node.id)}
              style={style}
              type="button"
            >
              {content}
            </button>
          );
        })}
        <div className="graph-orbit-label graph-orbit-label-top">Capability graph</div>
        <div className="graph-orbit-label graph-orbit-label-bottom">Ignitz as centroid</div>
      </div>
      {activeNode ? (
        <aside className={`graph-detail graph-detail-${activeNode.group}`} aria-live="polite">
          <span>{activeNode.group === "core" ? "Centroid" : activeNode.group}</span>
          <strong>{activeNode.label}</strong>
          <p>{activeNode.summary}</p>
        </aside>
      ) : null}
      <div className="hero-graph-list" aria-label="Ignitz graph nodes">
        {nodes
          .filter((node) => node.id !== "ignitz")
          .map((node) => (
            <Link
              className={`graph-list-row graph-list-${node.group}`}
              href={node.href ?? "/"}
              key={node.id}
            >
              <span>{node.label}</span>
              <p>{node.summary}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
