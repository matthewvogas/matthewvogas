import React from "react";

import { ExternalLinks } from "../external-links/external-links";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icon/icon";

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
        <div className="overflow-clip group flex flex-col gap-4 rounded w-full mb-4 lg:px-4 lg:pt-4 border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-hover-light dark:lg:hover:bg-hover-light-dark transition-colors duration-200">
            <div>
                <Link className="flex" href={url}>
                    <h3 className="group-hover:text-text-secondary dark:group-hover:text-text-secondary-dark font-medium leading-snug text-gray-200 inline-block">{name}</h3>
                    <Icon 
                        name="ArrowUpRight" 
                        size={20} 
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 ml-2"
                    />
                </Link>
                <p className="mt-2 text-sm leading-normal text-white/55">{description}</p>
            </div>
            <div>
                <Image src={image} alt={""} className="-mb-2 h-full w-full object-cover transition-transform duration-500 group-hover:translate-y-[-5px]" />
            </div>
        </div>
    )
}

