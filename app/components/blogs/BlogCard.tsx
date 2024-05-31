import Link from "next/link";
import React from "react";
import Image from "next/image";

import { ExternalLinks } from "../externalLinks/ExternalLinks";

interface Item {
    url: string;
    icon: string;
    description: string;
}

interface Props {
    date: string,
    name: string,
    image: string,
    items: Item[]
}

export const BlogCard = ({ date, name, image, items }: Props) => {
    return (
        <div className="cursor-pointer flex gap-4 rounded w-full mb-4 p-4 border border-transparent custom-border-gradient hover:shadow-xl hover:bg-[#928ec40a] transition-colors duration-200">
            <div className="min-w-24 z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-slate-500 sm:col-span-2">
                <label>{image}</label>
            </div>
            <div>
                <div className="flex flex-col">
                    <h3 className="font-medium leading-snug text-slate-200">{date}</h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{name}</p>
                </div>
                <ExternalLinks items={items}/>
            </div>
        </div>
    )
}
