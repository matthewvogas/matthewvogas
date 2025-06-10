import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Image from "next/image";
import Link from "next/link";
import { Icon } from "../../../components/icon/icon";
import { useDragDropStore } from "../../store/drag-drop-store";

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
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
    items?: Item[];
    url: string;
    isDragging?: boolean;
}

export const ProjectCard = ({ id, name, description, image, items, url, isDragging = false }: Props) => {
    const { isEnabled } = useDragDropStore();
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const cardContent = (
        <>
            <div>
                <div className={`flex items-center ${isEnabled ? '' : ' group'}`}>
                    {isEnabled && (
                        <div 
                            {...listeners} 
                            {...attributes} 
                            className="cursor-move mr-2 touch-none hover:bg-white/5 rounded-md transition-colors duration-200 p-1"
                            style={{ touchAction: 'none' }}
                        >
                            <Icon 
                                name="GripVertical" 
                                size={20} 
                                className="text-white/40 " 
                            />
                        </div>
                    )}
                    <h3 className={`font-medium leading-snug text-gray-200 inline-block ${isEnabled ? '' : 'group-hover:text-text-secondary dark:group-hover:text-text-secondary-dark'}`}>{name}</h3>
                    <Icon 
                        name="ArrowUpRight" 
                        size={20} 
                        className={`transition-transform duration-200 ml-2 ${isEnabled ? '' : ' group-hover:translate-x-1 group-hover:-translate-y-1'}`}
                    />
                </div>
                <p className="mt-2 text-sm leading-normal text-white/55">{description}</p>
            </div>
            <div>
                <Image src={image} alt={""} className={`-mb-2 h-full w-full object-cover transition-transform duration-500 ${isEnabled ? '' : ' group-hover:translate-y-[-5px]'}`} />
            </div>
        </>
    );

    return (
        <div 
            ref={setNodeRef}
            style={style}
            className={`
                overflow-clip group flex flex-col gap-4 rounded w-full mb-4 px-3 pt-3 lg:px-4 lg:pt-4 
                ${isDragging ? '' : 'transition-colors duration-200'}
                ${isEnabled 
                    ? 'border-2 border-dotted border-white/20 bg-white/5'
                    : 'cursor-pointer border border-transparent custom-border-gradient lg:hover:shadow-sm lg:hover:bg-hover-light dark:lg:hover:bg-hover-light-dark'
                }
                ${isDragging ? 'opacity-[0.05]' : ''}
            `}
        >
            {isEnabled ? (
                cardContent
            ) : (
                <Link href={url} className="flex flex-col gap-4">
                    {cardContent}
                </Link>
            )}
        </div>
    )
}

