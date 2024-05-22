"use client";
import React from "react";
import dynamic from 'next/dynamic';

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { ssr: false }
)
// import * as THREE from "three";
// import { Reflector } from "three/examples/jsm/objects/Reflector.js";

const AAnimation: React.FC = () => {
    return (
        <div className="items-end justify-center fixed bottom-0 xl:mt-96 lg:mt-25 xl:w-full hidden lg:block z-0" style={{ height: 'calc(100vh - 7rem)' }}>
            <Spline scene="https://prod.spline.design/g5seQ6LzE10XPVDn/scene.splinecode" className="mt-16 ml-96 scale-125"/>
        </div>
    );
};

export default AAnimation;