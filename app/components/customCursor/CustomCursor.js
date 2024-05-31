'use client'
import React from 'react';
import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        
        const onMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const onMouseEnter = () => {
            cursor.classList.add('custom-cursor--hover');
        };

        const onMouseLeave = () => {
            cursor.classList.remove('custom-cursor--hover');
        };

        document.addEventListener('mousemove', onMouseMove);
        document.querySelectorAll('a, button').forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnter);
            el.addEventListener('mouseleave', onMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.querySelectorAll('a, button').forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnter);
                el.removeEventListener('mouseleave', onMouseLeave);
            });
        };
    }, []);

    return <div className="custom-cursor" />;
};

export default CustomCursor;