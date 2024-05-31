'use client'
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const World: React.FC = () => {

    useEffect(() => {
        const container = document.getElementById('three-container') as HTMLElement;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(1, 4, 4);
        const material = new THREE.MeshBasicMaterial({ color: 0x97C7FF, wireframe: true });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 3;

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const targetRotation = { x: 0, y: 0 };

        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.y += 0.006;
            sphere.rotation.x += (targetRotation.x - sphere.rotation.x) * 0.05;
            sphere.rotation.y += (targetRotation.y - sphere.rotation.y) * 0.05;
            renderer.render(scene, camera);
        };

        animate();

        const onMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            targetRotation.x = mouse.y * Math.PI;
            targetRotation.y = mouse.x * Math.PI;

            raycaster.setFromCamera(mouse, camera);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', handleResize);

        function handleResize() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            container.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            id="three-container"
            className='opacity-40 mx-auto  relative hidden md:block'
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '500px',
                maxHeight: '500px'
            }}
        >
        </div>
    );
};
