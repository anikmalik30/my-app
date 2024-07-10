"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const RotatingCube: React.FC = () => {
return (
  <div style={{scale:"0.5"}}>
    <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
  </div>
);
};

export default RotatingCube;
