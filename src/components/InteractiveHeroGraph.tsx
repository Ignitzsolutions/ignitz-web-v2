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
  const centerId = centerNode?.id ?? "";
  const [activeId, setActiveId] = useState(centerId);

  const nodeMap = useMemo(
    () => new Map(nodes.map((node) => [node.id, node])),
    [nodes],
  );

  const activeNode = nodeMap.get(activeId) ?? centerNode;

  function isActiveEdge(edge: KnowledgeGraphEdge) {
    return edge.from === activeId || edge.to === activeId;
  }

  function activateNode(nodeId: string) {
    setActiveId((currentId) => (currentId === nodeId ? currentId : nodeId));
  }

  function resetActiveNode() {
    activateNode(centerId);
  }

  function getDetailLabel(node: KnowledgeGraphNode) {
    if (node.group === "core") {
      return "Operating center";
    }

    if (node.group === "labs") {
      return "Product lab";
    }

    if (node.group === "business") {
      return "Enterprise system";
    }

    if (node.group === "health") {
      return "Healthcare system";
    }

    if (node.group === "learning") {
      return "Capability transfer";
    }

    return "Embedded talent";
  }

  return (
    <div
      aria-label="Ignitz intelligence map"
      className="hero-graph"
    >
      <p className="graph-instruction" id="hero-graph-instruction">
        Hover or focus a node to inspect the Ignitz system.
      </p>
      <div className="hero-graph-canvas" onMouseLeave={resetActiveNode}>
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
                aria-describedby="hero-graph-instruction"
                className={className}
                href={node.href}
                key={node.id}
                onBlur={resetActiveNode}
                onFocus={() => activateNode(node.id)}
                onMouseEnter={() => activateNode(node.id)}
                onPointerEnter={() => activateNode(node.id)}
                style={style}
              >
                {content}
              </Link>
            );
          }

          return (
            <button
              aria-label={`${node.label}: ${node.summary}`}
              aria-describedby="hero-graph-instruction"
              className={className}
              key={node.id}
              onBlur={resetActiveNode}
              onFocus={() => activateNode(node.id)}
              onMouseEnter={() => activateNode(node.id)}
              onPointerEnter={() => activateNode(node.id)}
              style={style}
              type="button"
            >
              {content}
            </button>
          );
        })}
        <div className="graph-orbit-label graph-orbit-label-top">Intelligence map</div>
        <div className="graph-orbit-label graph-orbit-label-bottom">Ignitz operating center</div>
      </div>
      {activeNode ? (
        <aside className={`graph-detail graph-detail-${activeNode.group}`} aria-live="polite">
          <span>{getDetailLabel(activeNode)}</span>
          <strong>{activeNode.label}</strong>
          <p>{activeNode.summary}</p>
        </aside>
      ) : null}
      <div className="hero-graph-list" aria-label="Ignitz graph nodes" onMouseLeave={resetActiveNode}>
        {nodes
          .filter((node) => node.group !== "core")
          .map((node) => (
            <Link
              className={`graph-list-row graph-list-${node.group}${activeNode?.id === node.id ? " is-active" : ""}`}
              href={node.href ?? "/"}
              key={node.id}
              onBlur={resetActiveNode}
              onFocus={() => activateNode(node.id)}
              onMouseEnter={() => activateNode(node.id)}
              onPointerEnter={() => activateNode(node.id)}
            >
              <span>{node.label}</span>
              <p>{node.summary}</p>
            </Link>
          ))}
      </div>
    </div>
  );
}
