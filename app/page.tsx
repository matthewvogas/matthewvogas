import Link from 'next/link';
import Image from 'next/image';

import { ExperienceCard } from './components/experience/ExperienceCard.tsx'
import { ProjectCard } from './components/projects/ProjectCard.tsx'
import { BlogCard } from './components/blogs/BlogCard.tsx'
import { World } from './components/world/World.tsx'

import './globals.css';

import { experience, projects, blogs, social } from './data/data.js';

export default function Home() {
  return (
    <main className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-[#fafafaf8] w-full'>
      <section className=' lg:pt-24 lg:w-3/4 lg:py-24 flex flex-col justify-between'>
        <div>
          <h1 className='opacity-90 text-[#fafafaf8] text-5xl font-semibold'>Matthew Guillén</h1>
          <h2 className='mt-3 mb-3 text-1xl font-medium tracking-tight text-slate-200 sm:text-xl'>Full-Stack Engineer</h2>
          <p className='scroll-mt-16 text-slate-400 lg:scroll-mt-24'>
            {`Software engineer specialized in front-end and full-stack development with over three years of experience in web applications. Passionate about intuitive interfaces and robust security practices. Before programming,  `}
            <Link className='font-medium text-slate-200 hover:text-[#7167ff] focus-visible:text-[#7167ff]' href='https://www.figma.com/@matthewvogas'>
            I used to design a lot in Figma,
            </Link>
            {` so I have the perfect pixel eye for the interface.`}
          </p>
          <World />
        </div>
        <div className='flex flex-row gap-4 mt-6 lg:mt-0 mb-12 lg:mb-0'>
          {social.map((social, index) => (
            <Link target='_blank' href={social.url} key={index}>
              <Image className='max-w-6' src={social.icon} alt={social.name} width={24} height={24} />
            </Link>
          ))}
        </div>
      </section>
      <section className=' lg:pt-24 lg:py-24 w-full h-screen lg:overflow-y-auto scroll-hidden'>
        <div className='relative z-0 hover-opacity-others'>
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

        <div className='relative z-0 hover-opacity-others'>
          {projects.map((project, index) => (
            <div className="child" key={index}>
              <ProjectCard name={project.name} description={project.description} image={project.image} items={project.items} />
            </div>
          ))}
        </div>
        <Link className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-24 custom-underline' href={'https://www.figma.com/@matthewvogas'}>Design Protypes</Link>


        <div className='relative z-0 hover-opacity-others'>
          {blogs.map((blog, index) => (
            <div className="child" key={index}>
              <BlogCard name={blog.name} time={blog.time} items={blog.items} />
            </div>
          ))}
        </div>

        <Link className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl mb-24 custom-underline' href={'https://medium.com/@matthewvogas'}>Blogs in Medium</Link>


      </section>
    </main>
  );
}
