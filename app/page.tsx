import Link from "next/link";
import Image from "next/image";

import { ExperienceCard } from "./components/experience/ExperienceCard.tsx";
import { ProjectCard } from "./components/projects/ProjectCard.tsx";
import { BlogCard } from "./components/blogs/BlogCard.tsx";

import "./globals.css";

import { experience, projects, blogs, social } from "./data/data.js";

export default function Home() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-[#fafafaf8] w-full sticky">
      <section className=" lg:pt-24 lg:w-3/4 lg:py-24 flex flex-col top-0 lg:sticky lg:h-screen">
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="opacity-90 text-text-primary dark:text-text-primary-dark text-5xl font-semibold">
              Matthew Guillén
            </h1>
            <h2 className="text-1xl font-medium tracking-tight text-slate-200 sm:text-xl">
              Frontend Engineer & Product Developer
            </h2>
            <p className="scroll-mt-16 text-gray-400 lg:scroll-mt-24 text-">
              {`I build pixel-perfect digital experiences, startups apps for sick founders, and tools for leading companies. `}
              <Link
                className="transition-colors duration-200 ease-in-out font-medium text-slate-200 hover:text-text-secondary dark:hover:text-text-secondary-dark focus-visible:text-text-tertiary dark:focus-visible:text-text-tertiary-dark"
                href="mailto:mvttheo@outlook.com"
              >
                {`Let's chat.`}
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className=" lg:pt-24 lg:py-24 w-full ">
        <h1 className="opacity-90 text-text-primary dark:text-text-primary-dark text-2xl mb-4 font-semibold">
          Projects where I led{" "}
        </h1>
        <div className="relative z-0 hover-opacity-others">
          {projects.map((project, index) => (
            <div className="child" key={index}>
              <ProjectCard
                name={project.name}
                description={project.description}
                image={project.image}
                items={project.items}
                url={project.url}
              />
            </div>
          ))}
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
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-24 custom-underline"
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
          className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-2 custom-underline"
          href={"https://medium.com/@matthewvogas"}
        >
          Read All blogs in Medium
        </Link> */}
      </section>
    </main>
  );
}
