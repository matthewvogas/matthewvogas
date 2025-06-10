'use client'
import React from 'react';
import { useEffect } from 'react';

const CustomCursor = () => {
    useEffect(() => {
        // Check if we're on a mobile device
        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

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

    // Don't render the cursor SVG on mobile
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return null;
    }

    return (
        <svg
            className="custom-cursor"
            width="28" height="28" viewBox="0 0 34 34"
            style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 9999, transform: 'translate(-15%, -7%)' }}
        >
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="4" dy="6" stdDeviation="3" floodColor="#000" floodOpacity="0.18" />
            </filter>
            <polygon
                points="5,2 31,17 19,20 14,32"
                fill="#333"
                stroke="#fff"
                strokeWidth="2"
                filter="url(#shadow)"
            />
        </svg>
    );
};

export default CustomCursor;