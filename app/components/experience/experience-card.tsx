import React from "react";
import Link from "next/link";

import { ExternalLinks } from "../external-links/external-links";
import { Icon } from "../../../components/icon/icon";

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
            <div className=" min-w-24 z-10 mb-2 mt-1 text-xs font-bold uppercase tracking-wide text-white/65 sm:col-span-2">
                <label>{startDate} - {endDate}</label>
            </div>
            <div>
                <Link href={url} className="flex">
                    <h3 className="group-hover:text-text-secondary dark:group-hover:text-text-secondary-dark font-medium leading-snug text-gray-200 inline-block">{name}</h3>
                    <Icon 
                        name="ArrowUpRight" 
                        size={20} 
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-2"
                    />
                </Link>
                <p className="mt-2 text-sm leading-normal text-white/55">{description}</p>
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
