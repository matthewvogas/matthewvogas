import React from "react";

import { ExternalLinks } from "../externalLinks/ExternalLinks";
import Image from "next/image";
import Link from "next/link";
interface Item {
    url?: string;
    icon?: string;
    description?: string;
}

type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
};

interface Props {
    name: string,
    description: string,
    image: StaticImageData,
    items?: Item[],
    url: string
}

export const ProjectCard = ({ name, description, image, items, url }: Props) => {
    return (
        <div className="overflow-clip group flex flex-col gap-4 rounded w-full mb-4 lg:px-4 lg:pt-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-[#928ec40a] transition-colors duration-200">
            <div>
                <Link className="flex" href={url}>
                    <h3 className="group-hover:text-[#7167ff] font-medium leading-snug text-slate-200 inline-block">{name}</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-2 max-h-5 max-w-5 h-5 w-5" aria-hidden="true"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                </Link>
                <p className="mt-2 text-sm leading-normal text-slate-400">{description}</p>
            </div>
            <div>
                <Image src={image} alt={""} className="-mb-2 h-full w-full object-cover transition-transform duration-500 group-hover:translate-y-[-5px]" />
            </div>
        </div>
    )
}

