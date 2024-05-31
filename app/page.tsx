


import Link from 'next/link';

import { ExperienceCard } from './components/experience/ExperienceCard.tsx'
import { ProjectCard } from './components/projects/ProjectCard.tsx'
import { BlogCard } from './components/blogs/BlogCard.tsx'
import './globals.css';

import { experience, projects, blogs, social } from './data/data.js';

export default function Home() {
  return (
    <main className='grid grid-cols-2 gap-4  text-[#fafafaf8] w-full'>
      <section className='pt-24 lg:w-3/4 lg:py-24 flex flex-col justify-between'>
        <div>
          <h1 className='text-[#fafafaf8] text-4xl font-bold'>Matthew Guillén</h1>
          <h2 className='mt-3  mb-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>Full-Stack Engineer</h2>
          <p className='scroll-mt-16 text-slate-400 lg:scroll-mt-24'>Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an</p>
        </div>
        <div className='flex flex-row gap-4'>
          {
            social.map((social) => {
              return <Link target='_blank' href={social.url}><img src={social.icon} alt={social.name} /></Link>
            })
          }
        </div>
      </section>
      <section className=' pt-24 lg:py-24 w-full  h-screen overflow-y-auto scroll-hidden'>
        <div className='relative z-0 hover-opacity-others'>
          {experience.map((experience, index) => {
            return (
              <div className="child" key={index}>
                <ExperienceCard
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                  name={experience.name}
                  description={experience.description}
                  stack={experience.stack}
                  items={experience.items}
                />
              </div>
            );
          })}
        </div>
        <div>
          {projects.map((project, index) => {
            return <ProjectCard key={index} name={project.name} description={project.description} image={project.image} items={project.items} />
          })}
        </div>
        <div>
          {blogs.map((blog, index) => {
            return <BlogCard key={index} name={blog.name} date={blog.date} image={blog.image} items={blog.items} />
          })}
        </div>
      </section>
    </main>
  );
}
