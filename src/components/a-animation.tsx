"use client";
import Spline from "@splinetool/react-spline";
import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { Reflector } from "three/examples/jsm/objects/Reflector.js";

const AAnimation: React.FC = () => {
    return (
        <div className="items-end justify-center fixed bottom-0 top-0 xl:w-full xl:h-screen hidden lg:block">
            <Spline scene="https://prod.spline.design/g5seQ6LzE10XPVDn/scene.splinecode" className="mt-16 ml-96 scale-125"/>
        </div>
    );
};

export default AAnimation;