"use client";

import { projects } from "../../data/data.js";
import Link from "next/link";
import { useFontStore } from "../../store/font-store";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Image from "next/image";

const fontFamilies = [
  "Redaction-Regular",
  "Redaction-Bold",
  "Redaction-Italic",
  "Redaction_100-Regular",
  "Redaction_70-Bold",
];

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

// Shuffle array utility
function shuffleArray(array: string[]) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  const { fontIndex, nextFont } = useFontStore();

  if (!project) {
    return <div className="p-8 text-2xl">Project not found.</div>;
  }

  return (
    <main className="relative flex flex-col items-center px-4 text-white pt-12 justify-between">
      <div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500
        "
      />
      <AnimatePresence mode="wait">
        <motion.h1
          key={fontIndex}
          className="opacity-90 text-text-primary dark:text-white/85 text-3xl lg:text-5xl font-semibold cursor-pointer mb-4 text-center"
          style={{ fontFamily: fontFamilies[fontIndex] }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
          {project.name}
        </motion.h1>
      </AnimatePresence>
      <p className="text-lg text-white/65 text-center max-w-2xl mt-4">
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

      {project.video && (
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex gap-6 w-full max-w-6xl">
            {project.video
              .filter((url) => url)
              .map((url, idx) => (
                <motion.div
                  key={idx}
                  className="aspect-[4/2.5] w-full rounded-lg overflow-hidden  flex items-center justify-center"
                >
                  <ProjectVideo
                    url={url}
                    title={`${project.name} Video ${idx + 1}`}
                  />
                </motion.div>
              ))}
          </div>
        </div>
      )}

      <div className="group flex flex-col gap-4 rounded w-full max-w-6xl mb-4  pt-3 lg:px-4 lg:pt-4 overflow-clip border border-transparent custom-border-gradient bg-white/5 dark:bg-hover-light-dark relative z-30 mt-12">
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
    </main>
  );
}
