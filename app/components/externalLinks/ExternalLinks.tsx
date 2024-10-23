import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Item {
    url?: string;
    icon?: string;
    description?: string;
}

interface Props {
    items?: Item[]
}

export const ExternalLinks = ({ items }: Props) => {
    return (
        <div className="mt-2 flex gap-4 cursor-pointer">
            {items != null && (
                items.map((item, index) => {
                    return item.url ? (
                        <Link target="_blank" className="text-slate-400   opacity-60 hover:opacity-100 hover:transition-opacity flex mt-2" key={index} href={item.url}>
                            {item.icon && (
                                <Image className="opacity-70 transition-colors duration-200 ease-in-out max-w-[14px] mr-[2px]" src={item.icon} alt={item.description || ''} />
                            )}
                            <label className="text-slate-400 text-sm  cursor-pointer">{item.description}</label>
                        </Link>
                    ) : null;
                })
            )}
        </div>
    )
}
