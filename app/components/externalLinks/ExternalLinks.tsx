import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Item {
    url: string;
    icon: string;
    description: string;
}

interface Props {
    items: Item[]
}

export const ExternalLinks = ({ items }: Props) => {
    return (
        <div className="mt-3 flex gap-4">
            {items && (
                items.map((item, index) => {
                    return (
                        <Link className="cursor-pointer opacity-40 hover:opacity-100 hover:transition-opacity flex mt-2" key={index} href={item.url}>
                            <Image className="max-w-[14px] mr-[2px]" src={item.icon} alt={item.description} />
                            <label className="text-sm">{item.description}</label>
                        </Link>
                    )
                })
            )}
        </div>
    )
}