"use client";
import Spline from "@splinetool/react-spline";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

const RotatingCube: React.FC = () => {
  //   const canvasRef = useRef<HTMLCanvasElement>(null);

  //   useEffect(() => {
  //     const canvas = canvasRef.current;
  //     if (!canvas) return;
  //     const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  //     renderer.setSize(window.innerWidth, window.innerHeight);

  //     const fov = 75;
  //     const aspect = window.innerWidth / window.innerHeight;
  //     const near = 0.1;
  //     const far = 1000;
  //     const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  //     camera.position.z = 10;

  //     const scene = new THREE.Scene();

  //     const boxSize = 3;
  //     const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
  //     const material = new THREE.MeshStandardMaterial({
  //       color: 0xc0c0c0,
  //       metalness: 0.8,
  //       roughness: 0.2,
  //     });
  //     const cube = new THREE.Mesh(geometry, material);
  //     scene.add(cube);

  //     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  //     scene.add(ambientLight);

  //     const light = new THREE.PointLight(0xffffff, 1, 0);
  //     light.position.set(0, 0, 50);
  //     scene.add(light);

  //     const mirrorSize = 10;
  //     const mirrorGeo = new THREE.PlaneGeometry(mirrorSize, mirrorSize);
  //   const mirrorMat = new THREE.MeshStandardMaterial({
  //   color: 0x000000,
  //   metalness: 1,
  //   roughness: 0,
  //   transparent: true,
  //   opacity: 0.5,
  //   envMapIntensity: 0.5,
  // });

  // const mirror = new Reflector(mirrorGeo, {
  //   clipBias: 0.003,
  //   textureWidth: window.innerWidth * window.devicePixelRatio,
  //   textureHeight: window.innerHeight * window.devicePixelRatio,
  //   color: 0x000000,
  // });
  // mirror.rotation.x = - Math.PI / 2;
  // mirror.position.y = - boxSize / 2 - 0.01;
  // scene.add(mirror);

  //     const clock = new THREE.Clock();

  //     const animate = () => {
  //       requestAnimationFrame(animate);

  //       const elapsedTime = clock.getElapsedTime();

  //       // Rotate the cube
  //       cube.rotation.x = elapsedTime * 0.1;
  //       cube.rotation.y = elapsedTime * 0.1;

  //       // Animate the light
  //       light.position.x = Math.sin(elapsedTime) * 50;
  //       light.position.z = Math.cos(elapsedTime) * 50;

  //       (mirror.material as THREE.Material).needsUpdate = true;

  //       renderer.render(scene, camera);
  //     };

  //     animate();
  //   }, []);

  //   return <canvas ref={canvasRef} />;
return (
  <div style={{scale:"0.5"}}>

    <Spline scene="https://prod.spline.design/7a2ZWwrf3jXU5WMw/scene.splinecode"/>
  </div>
);
};

export default RotatingCube;
