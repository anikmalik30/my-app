"use client";
import dynamic from "next/dynamic";
import React, { memo } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const RotatingCube: React.FC = memo(() => {
  return (
    <div style={{ transform: "scale(0.5)" }}>
      <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
    </div>
  );
});

RotatingCube.displayName = "RotatingCube";

export default RotatingCube;
