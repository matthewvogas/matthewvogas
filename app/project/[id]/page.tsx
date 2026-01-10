"use client";

import { projects } from "../../data/data.js";
import Link from "next/link";
import { useFontStore } from "../../store/font-store";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { FlowCanvasToggle } from "../../components/toggle/flow-canvas-toggle";

const fontFamilies = [
  "Redaction-Regular",
  "Redaction-Bold",
  "Redaction-Italic",
  "Redaction_100-Regular",
  "Redaction_70-Bold",
];

type GalleryItem = {
  src: any;
  title?: string;
  description?: string;
};

function GalleryRow({
  item,
  index,
  projectName,
  fontIndex,
}: {
  item: GalleryItem;
  index: number;
  projectName: string;
  fontIndex: number;
}) {
  return (
    <section className="w-full max-w-6xl mt-10">
      <div className="flex flex-col gap-3">
        <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <Image
            src={item.src}
            alt={`${projectName} gallery image ${index + 1}`}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <AnimatePresence mode="wait">
              <motion.h3
                key={fontIndex}
                className="text-sm font-semibold text-white/85"
                style={{ fontFamily: fontFamilies[fontIndex] }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                {item.title ?? `Gallery ${index + 1}`} {`  `} 
              </motion.h3>
            </AnimatePresence>
            {item.description ? (
              <span className="text-xs text-white/45"> * {item.description}</span>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function getYouTubeId(rawUrl: string): string | null {
  try {
    const url = new URL(rawUrl);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname === "/watch") return url.searchParams.get("v");
      if (url.pathname.startsWith("/embed/")) return url.pathname.split("/")[2] || null;
      if (url.pathname.startsWith("/shorts/")) return url.pathname.split("/")[2] || null;
    }

    return null;
  } catch {
    return null;
  }
}

function getYouTubeEmbedUrl(videoId: string) {
  const params = new URLSearchParams({
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "1",
    modestbranding: "1",
    rel: "0",
  });
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

function ProjectVideo({ url, title }: { url: string; title: string }) {
  const youtubeId = getYouTubeId(url);
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
  if (youtubeId) {
    return (
      <iframe
        src={getYouTubeEmbedUrl(youtubeId)}
        title={title}
        className="w-full h-full rounded-lg"
        style={{ aspectRatio: "4 / 3" }}
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }
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
  const { fontIndex } = useFontStore();

  if (!project) {
    return <div className="p-8 text-2xl">Project not found.</div>;
  }

  const videoUrls = (project.video ?? []).filter(Boolean) as string[];
  const galleryItems = Array.isArray((project as any).gallery)
    ? ((project as any).gallery as GalleryItem[]).filter(
        (item) => item && (item as any).src
      )
    : [];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="flex h-14 items-center justify-between px-6">
          <Link
            href="/"
            className="hover:underline w-full text-sm font-semibold text-gray-200 hover:text-white/90 transition-colors duration-200"
            aria-label="Go back to home"
          >
            ← <label htmlFor="" className="cursor-pointer ml-2">Back</label>
          </Link>
          <div className="w-full flex items-center justify-end leading-tight">
            {project.name.toLowerCase() !== params.id.toLowerCase() ? (
              <span className="text-sm text-white/45">{project.name}</span>
            ) : null}
          </div>
        </div>
      </header>

      <div className="pt-14">
        <main className="relative flex flex-col px-4 text-white pt-12 justify-between mb-10">
          <div className="pointer-events-none absolute inset-0 z-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

          <motion.h1
            key={fontIndex}
            className="opacity-90 text-text-primary dark:text-white/85 text-3xl lg:text-5xl font-semibold cursor-pointer mt-8 md:mt-0"
            style={{ fontFamily: fontFamilies[fontIndex] }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            {project.name}
          </motion.h1>

          <p className="text-md text-white/65 max-w-2xl mt-4">
            {project.longDescription}
          </p>

          <div className="flex gap-4 mt-4 mb-1">
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
            >
              Visit Project
            </Link>
          </div>

          {videoUrls.map((url, idx) => (
            <motion.div
              key={`video-${idx}`}
              className="aspect-[4/2.5] w-full rounded-lg overflow-hidden flex items-center justify-center mt-4"
            >
              <ProjectVideo
                url={url}
                title={`${project.name} Video ${idx + 1}`}
              />
            </motion.div>
          ))}

          <div className="group flex flex-col gap-4 rounded w-full max-w-6xl mb-4 pt-3 lg:px-4 lg:pt-4 overflow-clip border border-transparent custom-border-gradient bg-white/5 dark:bg-hover-light-dark relative z-30 mt-12">
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

          {((project as any).role ||
            (project as any).team ||
            (project as any).timeline ||
            (project as any).objective) && (
            <section className="w-full max-w-6xl mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-8 md:order-1">
                  {(project as any).role && (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85">
                        ROLE
                      </h4>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {(project as any).role}
                      </p>
                    </div>
                  )}
                  {(project as any).team && (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85">
                        TEAM
                      </h4>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {(project as any).team}
                      </p>
                    </div>
                  )}
                  {(project as any).timeline && (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85">
                        TIMELINE
                      </h4>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {(project as any).timeline}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-8 md:order-2">
                  {(project as any).objective && (
                    <div className="flex flex-col gap-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-white/85">
                        OBJECTIVE
                      </h4>
                      <p className="text-sm text-white/65 leading-relaxed">
                        {(project as any).objective}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          )}

          {galleryItems.length > 0 ? (
            <section className="w-full max-w-6xl mt-12">
              {galleryItems.map((item, idx) => (
                <GalleryRow
                  key={idx}
                  item={item}
                  index={idx}
                  projectName={project.name}
                  fontIndex={fontIndex}
                />
              ))}
            </section>
          ) : null}
        </main>
      </div>
    </>
  );
}
