'use client';
import React, { useEffect } from 'react';
import * as THREE from 'three';

export const Donut: React.FC = () => {
    useEffect(() => {
        const container = document.getElementById('three-container') as HTMLElement;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.TorusGeometry(1.6, 0.5, 6, 14);
        const material = new THREE.MeshBasicMaterial({ color: 0x97C7FF, wireframe: true });
        const torus = new THREE.Mesh(geometry, material);
        scene.add(torus);

        camera.position.z = 6;

        torus.rotation.y = Math.PI / 4;
        torus.rotation.x = Math.PI / -6;

        const targetRotation = { x: torus.rotation.x, y: torus.rotation.y };
        const rotationSpeed = 0.005;


        const animate = () => {
            requestAnimationFrame(animate);

            torus.rotation.x += (targetRotation.x - torus.rotation.x) * 0.1;
            torus.rotation.y += (targetRotation.y - torus.rotation.y) * 0.1;

            torus.rotation.z += rotationSpeed;

            renderer.render(scene, camera);
        };

        animate();


        const onMouseMove = (event: MouseEvent) => {
            const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

            targetRotation.x = mouseY * Math.PI * 0.5;
            targetRotation.y = mouseX * Math.PI * 0.5;
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
            className='opacity-40 mx-auto relative block overflow-clip'
            style={{
                width: '100%',
                height: '100%',
                maxWidth: '500px',
                maxHeight: '282px'
            }}
        ></div>
    );
};
