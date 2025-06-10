import React from "react";
import Link from "next/link";
import Image from "next/image";

import { ExternalLinks } from "../externalLinks/ExternalLinks";

interface Item {
    url?: string;
    icon?: any;
    description?: string;
}

interface Props {
    startDate: string,
    endDate: string,
    name: string,
    description: string,
    stack: string[],
    items?: Item[],
    url: string
}

export const ExperienceCard = ({ startDate, endDate, name, description, stack, items, url }: Props) => {
    return (
        <div className="group flex flex-col lg:flex-row gap-4 rounded w-full mb-4 lg:p-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-hover-light dark:lg:hover:bg-hover-light-dark transition-colors duration-200">
            <div className=" min-w-24 z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-gray-500 sm:col-span-2">
                <label>{startDate} - {endDate}</label>
            </div>
            <div>
                <Link href={url} className="flex">
                    <h3 className="group-hover:text-text-secondary dark:group-hover:text-text-secondary-dark font-medium leading-snug text-slate-200 inline-block">{name}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-2 max-h-5 max-w-5 h-5 w-5" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </Link>
                <p className="mt-2 text-sm leading-normal text-gray-400">{description}</p>
                <ExternalLinks items={items} />
                <div className="flex gap-2 flex-wrap mt-3">
                    {
                        stack.map((item, index) => {
                            return <span className="flex min-w-20 justify-center items-center rounded-full bg-hover-secondary dark:bg-hover-secondary-dark px-3 py-1 text-xs font-medium leading-5 text-text-secondary dark:text-text-secondary-dark" key={index}>{item}</span>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
