"use client";
import Spline from "@splinetool/react-spline";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { Reflector } from "three/examples/jsm/objects/Reflector.js";

const RotatingCube: React.FC = () => {
return (
  <div style={{scale:"0.5"}}>

    <Spline scene="https://prod.spline.design/7a2ZWwrf3jXU5WMw/scene.splinecode"/>
  </div>
);
};

export default RotatingCube;
