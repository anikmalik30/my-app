import React from "react";
import Spline from "@splinetool/react-spline/next";

export default function RotatingCube() {
  return (
    <main
      className="relative animate-webgl-scale-in-fade mr-40"
      style={{
        transform: "scale(0.8)",
        top: "-10px",
        right: "-10px",
        position: "relative",
      }}
    >
      <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
    </main>
  );
}
