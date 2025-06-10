"use client";

import Link from "next/link";
import Image from "next/image";
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent, DragOverlay } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useState } from 'react';

import { ExperienceCard } from "./components/experience/experience-card.tsx";
import { ProjectCard } from "./components/projects/project-card.tsx";
import { BlogCard } from "./components/blogs/blog-card.tsx";
import { DragDropToggleWrapper } from "./components/toggle/drag-drop-toggle-wrapper.tsx";
import { useDragDropStore } from "./store/drag-drop-store";

import "./globals.css";

import { experience, projects, blogs, social } from "./data/data.js";

interface Project {
  id: string;
  name: string;
  description: string;
  image: any;
  items?: any[];
  url: string;
}

export default function Home() {
  const [items, setItems] = useState<Project[]>(projects.map((project, index) => ({
    ...project,
    id: `project-${index}`
  })));
  const { isEnabled } = useDragDropStore();
  const [activeId, setActiveId] = useState<string | null>(null);

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
        return arrayMove(items, oldIndex, newIndex);
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
          <div className="flex flex-col gap-4">
            <h1 className="opacity-90 text-text-primary dark:text-white/85 text-5xl font-semibold">
              Matthew Guillén
            </h1>
            <h2 className="text-1xl font-medium tracking-tight text-white/75 sm:text-xl">
              Frontend Engineer & Product Developer
            </h2>
            <p className="scroll-mt-16 text-white/55 lg:scroll-mt-24 text-">
              {`I build pixel-perfect digital experiences, startups apps for sick founders, and tools for leading companies. `}
            </p>
            <DragDropToggleWrapper />
          </div>
        </div>
      </section>
      <section className=" lg:pt-24 lg:py-24 w-full ">
        <h1 className="opacity-90 text-text-primary dark:text-text-primary-dark text-2xl mb-4 font-semibold">
          Projects where I led{" "}
        </h1>
        <div className={`relative z-0 ${!isEnabled ? ' hover-opacity-others' : ''}`}>
          {isEnabled ? (
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              onDragCancel={handleDragCancel}
            >
              <SortableContext
                items={items.map(item => item.id)}
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
                  <div style={{ width: '100%' }}>
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
            projects.map((project, index) => (
              <div className="child" key={index}>
                <ProjectCard
                  id={`project-${index}`}
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
        {/* <Link
          className="mt-3 text-lg font-medium tracking-tight text-gray-200 sm:text-xl mb-2 custom-underline"
          href={"https://medium.com/@matthewvogas"}
        >
          Read All blogs in Medium
        </Link> */}
      </section>
    </main>
  );
}
