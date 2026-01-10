"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { ExperienceCard } from "./components/experience/experience-card.tsx";
import { ProjectCard } from "./components/projects/project-card.tsx";
import { BlogCard } from "./components/blogs/blog-card.tsx";
import { DragDropToggleWrapper } from "./components/toggle/drag-drop-toggle-wrapper.tsx";
import { useDragDropStore } from "./store/drag-drop-store";

import "./globals.css";

import { experience, projects, blogs, social } from "./data/data.js";
import { FontCycleToggle } from "./components/toggle/font-cycle-toggle.tsx";
import { useFontStore } from "./store/font-store";
import { Icon } from "@/components/icon/icon.tsx";

interface Project {
  id: string;
  name: string;
  description: string;
  image: any;
  items?: any[];
  url: string;
}

const fontFamilies = [
  "Redaction-Regular",
  "Redaction-Bold",
  "Redaction-Italic",
  "Redaction_100-Regular",
  "Redaction_70-Bold",
];

export default function Home() {
  const [items, setItems] = useState<Project[]>(() => {
    if (typeof window !== 'undefined') {
      const storedOrder = localStorage.getItem('projectOrder');
      if (storedOrder) {
        const order = JSON.parse(storedOrder);
        const orderedProjects = order.map((id: string) => {
          const project = projects.find(p => p.id === id);
          return project ? { ...project } : null;
        }).filter(Boolean) as Project[];
        
        const missingProjects = projects.filter(p => !orderedProjects.find((op: Project) => op.id === p.id));
        return [...orderedProjects, ...missingProjects];
      }
    }
    return [...projects];
  });
  const { isEnabled } = useDragDropStore();
  const [activeId, setActiveId] = useState<string | null>(null);
  const { fontIndex } = useFontStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (active.id !== over?.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over?.id);
        const newItems = arrayMove(items, oldIndex, newIndex);
        localStorage.setItem('projectOrder', JSON.stringify(newItems.map(item => item.id)));
        return newItems;
      });
    }
  };

  const handleDragCancel = () => {
    setActiveId(null);
  };

  const activeProject = items.find((item) => item.id === activeId);

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[#fafafaf8] w-full sticky">
      <section className=" lg:pt-24 lg:w-3/4 lg:py-24 flex flex-col top-0 lg:sticky lg:h-screen">
        <div>
          <div className="flex flex-col gap-4 mt-6 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.h1
                key={fontIndex}
                className="opacity-90 text-text-primary dark:text-white/85 text-3xl lg:text-5xl font-semibold cursor-pointer"
                style={{ fontFamily: fontFamilies[fontIndex] }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
              >
                Matthew Vogas
              </motion.h1>
            </AnimatePresence>
            <h2 className="text-1xl font-medium tracking-tight text-white/75 sm:text-xl">
              Frontend Engineer & Product Designer
            </h2>
            <p className="scroll-mt-16 text-white/55 lg:scroll-mt-24 text-">
              {`Like developer that also designs, I build pixel-perfect digital experiences, startups apps for sick founders, and tools for leading companies. `}
            </p>
            <div className="flex flex-col">
            <FontCycleToggle fontFamilies={fontFamilies} />
            <Link
              href="/resume.pdf"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
              aria-label="Resume"
            >
              <Icon name="Dock" size={18} className="mr-2" />
              Resume
            </Link>
            <Link
              href="https://www.figma.com/@matthewvogas"
              className="flex items-center gap-2 mt-4 px-4 py-2 rounded bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-semibold text-gray-200 focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-background-dark"
              aria-label="Resume"
            >
              <Icon name="PenTool" size={18} className="mr-2" />
              30k downloads in Figma Open Source
            </Link>
            </div>
          </div>
        </div>
      </section>
      <section className=" lg:pt-24 lg:py-24 w-full ">
        <h1 className="opacity-90 text-text-primary dark:text-text-primary-dark text-2xl mb-4 font-semibold">
          Featured projects
        </h1>
        <div
          className={`relative z-0 ${
            !isEnabled ? " hover-opacity-others" : ""
          }`}
        >
          {isEnabled ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
            >
              <SortableContext
                items={items.map((item) => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {items.map((project) => (
                  <div className="child" key={project.id}>
                    <ProjectCard
                      id={project.id}
                      name={project.name}
                      description={project.description}
                      image={project.image}
                      items={project.items}
                      url={project.url}
                      isDragging={activeId === project.id}
                    />
                  </div>
                ))}
              </SortableContext>
              <DragOverlay>
                {activeProject ? (
                  <div style={{ width: "100%" }}>
                    <ProjectCard
                      id={activeProject.id}
                      name={activeProject.name}
                      description={activeProject.description}
                      image={activeProject.image}
                      items={activeProject.items}
                      url={activeProject.url}
                    />
                  </div>
                ) : null}
              </DragOverlay>
            </DndContext>
          ) : (
            items.map((project) => (
              <div className="child" key={project.id}>
                <ProjectCard
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  items={project.items}
                  url={project.url}
                />
              </div>
            ))
          )}
        </div>
        <div className="relative z-0 hover-opacity-others">
          <h1 className="mt-24 opacity-90 text-text-primary dark:text-text-primary-dark text-2xl mb-4 font-semibold">
            My experience since I was 16 years old
          </h1>
          {experience.map((experience, index) => (
            <div className="child" key={index}>
              <ExperienceCard
                startDate={experience.startDate}
                endDate={experience.endDate}
                name={experience.name}
                description={experience.description}
                stack={experience.stack}
                items={experience.items}
                url={experience.url}
              />
            </div>
          ))}
        </div>
        <Link
          className="mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl mb-24 custom-underline"
          href={"/resume.pdf"}
        >
          View Full Resume
        </Link>
        <div className="relative z-0 hover-opacity-others">
          {blogs.map((blog, index) => (
            <div className="child" key={index}>
              <BlogCard name={blog.name} time={blog.time} items={blog.items} />
            </div>
          ))}
        </div>
        <div className="flex  gap-4 items-center mt-12">
          <Image
            src="/gifs/coin.gif"
            className=""
            alt="Coin"
            width={30}
            height={30}
          />
          <AnimatePresence mode="wait">
            <motion.h1
              key={fontIndex}
              className="opacity-90 text-text-primary dark:text-white/85 text-1xl lg:text-2xl font-semibold cursor-pointer"
              style={{ fontFamily: fontFamilies[fontIndex] }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              Thanks for visiting!
            </motion.h1>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
