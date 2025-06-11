"use client";

import { projects } from "../../data/data.js";
import Link from "next/link";
import { useFontStore } from "../../store/font-store";
import { useFlowCanvasStore } from "../../store/flow-canvas-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import { FlowCanvasToggle } from "../../components/toggle/flow-canvas-toggle";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  NodeProps,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

const fontFamilies = [
  "Redaction-Regular",
  "Redaction-Bold",
  "Redaction-Italic",
  "Redaction_100-Regular",
  "Redaction_70-Bold",
];

const TitleNode = ({ data }: NodeProps) => (
  <div className="px-6 py-4 shadow-lg rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-sm">
    <Handle type="target" position={Position.Top} className="w-2 h-2" />
    <div className="text-2xl font-bold text-white">{data.label}</div>
    <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
  </div>
);

const DescriptionNode = ({ data }: NodeProps) => (
  <div className="px-6 py-4 shadow-lg rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/10 backdrop-blur-sm max-w-md">
    <Handle type="target" position={Position.Top} className="w-2 h-2" />
    <div className="text-sm text-white/90">{data.label}</div>
    <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
  </div>
);

const VideoNode = ({ data }: NodeProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="px-4 py-4 shadow-lg rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-white/10 backdrop-blur-sm">
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <div className="relative aspect-video w-[400px] rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          src={data.url}
          className="w-full h-full object-cover cursor-pointer"
          onClick={handleVideoClick}
        />
        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-200" />
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
};

const ImageNode = ({ data }: NodeProps) => (
  <div className="px-4 py-4 shadow-lg rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-white/10 backdrop-blur-sm">
    <Handle type="target" position={Position.Top} className="w-2 h-2" />
    <div className="relative w-[500px] rounded-lg overflow-hidden">
      <Image
        src={data.url}
        alt={data.label}
        width={500}
        height={300}
        className="w-full h-auto object-cover"
      />
    </div>
    <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
  </div>
);

const nodeTypes = {
  title: TitleNode,
  description: DescriptionNode,
  video: VideoNode,
  image: ImageNode,
};

function ProjectVideo({ url, title }: { url: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      src={url}
      className="w-full h-full object-cover rounded-lg cursor-pointer"
      style={{ aspectRatio: "4 / 3" }}
      title={title}
      onClick={handleVideoClick}
    />
  );
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  const { fontIndex, nextFont } = useFontStore();
  const { isEnabled: isFlowCanvasEnabled } = useFlowCanvasStore();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const projectNodes = useMemo(
    () =>
      project
        ? [
            {
              id: "title",
              type: "title",
              position: { x: 250, y: 0 },
              data: { label: project.name },
            },
            {
              id: "description",
              type: "description",
              position: { x: 250, y: 100 },
              data: { label: project.description },
            },
            ...(project.video
              ? project.video
                  .filter((url) => url)
                  .map((url, idx) => ({
                    id: `video-${idx}`,
                    type: "video",
                    position: { x: 250, y: 250 + idx * 300 },
                    data: { url, label: `${project.name} Video ${idx + 1}` },
                  }))
              : []),
            {
              id: "image",
              type: "image",
              position: {
                x: 250,
                y: project.video ? 250 + project.video.length * 300 : 250,
              },
              data: { url: project.image, label: "Project Image" },
            },
          ]
        : [],
    [project]
  );

  const projectEdges = useMemo(
    () =>
      project
        ? [
            {
              id: "title-desc",
              source: "title",
              target: "description",
              style: { stroke: "rgba(255, 255, 255, 0.2)" },
              animated: true,
            },
            ...(project.video
              ? project.video
                  .filter((url) => url)
                  .map((_, idx) => ({
                    id: `desc-video-${idx}`,
                    source: "description",
                    target: `video-${idx}`,
                    style: { stroke: "rgba(255, 255, 255, 0.2)" },
                    animated: true,
                  }))
              : []),
            {
              id: "video-image",
              source: project.video
                ? `video-${project.video.length - 1}`
                : "description",
              target: "image",
              style: { stroke: "rgba(255, 255, 255, 0.2)" },
              animated: true,
            },
          ]
        : [],
    [project]
  );

  const storageKey = project ? `flow-canvas-layout-${project.id}` : "";
  const orderKey = project ? `flow-canvas-order-${project.id}` : "";
  const [orderedNodeIds, setOrderedNodeIds] = useState<string[]>([]);

  useEffect(() => {
    if (orderKey) {
      const savedOrder = localStorage.getItem(orderKey);
      if (savedOrder) {
        try {
          const parsed = JSON.parse(savedOrder);
          if (Array.isArray(parsed)) {
            setOrderedNodeIds(parsed);
          }
        } catch {}
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderKey]);

  useEffect(() => {
    if (!isFlowCanvasEnabled && nodes.length > 0) {
      const sorted = [...nodes].sort(
        (a, b) => (a.position.y ?? 0) - (b.position.y ?? 0)
      );
      const ids = sorted.map((n) => n.id);
      setOrderedNodeIds(ids);
      if (orderKey) {
        localStorage.setItem(orderKey, JSON.stringify(ids));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlowCanvasEnabled]);

  const firstCanvasMount = useRef(true);
  useEffect(() => {
    if (isFlowCanvasEnabled && project) {
      if (firstCanvasMount.current) {
        setNodes(projectNodes);
        setEdges(projectEdges);
        firstCanvasMount.current = false;
      } else {
        const saved = localStorage.getItem(storageKey);
        if (saved) {
          try {
            const { nodes: savedNodes, edges: savedEdges } = JSON.parse(saved);
            if (Array.isArray(savedNodes) && Array.isArray(savedEdges)) {
              setNodes(savedNodes);
              setEdges(savedEdges);
              return;
            }
          } catch {}
        }
        setNodes(projectNodes);
        setEdges(projectEdges);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlowCanvasEnabled, project, storageKey]);

  useEffect(() => {
    if (isFlowCanvasEnabled && project && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify({ nodes, edges }));
    }
  }, [nodes, edges, isFlowCanvasEnabled, project, storageKey]);

  if (!project) {
    return <div className="p-8 text-2xl">Project not found.</div>;
  }

  // Helper to render content by node id
  const renderContentByNodeId = (id: string) => {
    if (id === "title") {
      return (
        <motion.h1
          key={fontIndex}
          className="opacity-90 text-text-primary dark:text-white/85 text-3xl lg:text-5xl font-semibold cursor-pointer mb-4 text-center mt-8 md:mt-0"
          style={{ fontFamily: fontFamilies[fontIndex] }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {project.name}
        </motion.h1>
      );
    }
    if (id === "description") {
      return (
        <>
          <p
            className="text-lg text-white/65 text-center max-w-2xl mt-4"
            key="desc"
          >
            {project.description}
          </p>
          <div className="flex gap-4 mt-4 mb-1">
            <Link
              href="/"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
            >
              Go Back
            </Link>
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
            >
              Visit Project
            </Link>
          </div>
        </>
      );
    }
    if (id.startsWith("video-")) {
      const idx = parseInt(id.replace("video-", ""));
      const url = project.video?.[idx];
      if (!url) return null;
      return (
        <motion.div
          key={id}
          className="aspect-[4/2.5] w-full rounded-lg overflow-hidden flex items-center justify-center mt-4"
        >
          <ProjectVideo url={url} title={`${project.name} Video ${idx + 1}`} />
        </motion.div>
      );
    }
    if (id === "image") {
      return (
        <div
          className="group flex flex-col gap-4 rounded w-full max-w-6xl mb-4 pt-3 lg:px-4 lg:pt-4 overflow-clip border border-transparent custom-border-gradient bg-white/5 dark:bg-hover-light-dark relative z-30 mt-12"
          key="img"
        >
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-32 w-4/5 h-32 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-full blur-2xl z-[-1] bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600" />
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-2 w-4/5 h-24 opacity-0 group-hover:opacity-80 transition-opacity duration-500 rounded-full blur-2xl z-[-1] bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600" />
          <Image
            src={project.image}
            alt={project.name}
            className="w-full object-cover transition-transform duration-500 px-12 translate-y-[10%] pt-6 group-hover:translate-y-[1px] hover:shadow-lg"
            width={1920}
            height={600}
          />
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    return (
      <>
        <div className="fixed md:left-4 left-1/2 -translate-x-1/2 md:translate-x-0 top-4 z-50">
          <FlowCanvasToggle />
        </div>
        {isFlowCanvasEnabled ? (
          <div style={{ height: "100vh" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onEdgesDelete={setEdges}
              onEdgeClick={(_, edge) => setEdges((eds) => eds.filter((e) => e.id !== edge.id))}
              nodeTypes={nodeTypes}
              fitView
              className="bg-transparent"
            >
              <Background
                color="#ffffff"
                gap={16}
                size={1}
                style={{ opacity: 0.1 }}
              />
            </ReactFlow>
          </div>
        ) : (
          <main className="relative flex flex-col items-center px-4 text-white pt-12 justify-between">
            <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
            <AnimatePresence mode="wait">
              {/* Render content in the order of last node positions, fallback to default order if none */}
              {(orderedNodeIds.length > 0
                ? orderedNodeIds
                : projectNodes.map((n) => n.id)
              ).map(renderContentByNodeId)}
            </AnimatePresence>
          </main>
        )}
      </>
    );
  };

  return renderContent();
}
