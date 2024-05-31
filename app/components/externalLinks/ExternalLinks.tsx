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
                        <Link target="_blank" className="opacity-40 hover:opacity-100 hover:transition-opacity flex mt-2" key={index} href={item.url}>
                            {item.icon && (
                                <Image className="max-w-[14px] mr-[2px]" src={item.icon} alt={item.description || ''} />
                            )}
                            <label className="text-sm cursor-pointer">{item.description}</label>
                        </Link>
                    ) : null;
                })
            )}
        </div>
    )
}
