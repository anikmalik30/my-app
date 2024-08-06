// "use client";
import dynamic from "next/dynamic";
import React, { memo } from "react";

// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
import Spline from "@splinetool/react-spline";

const RotatingCube: React.FC = memo(() => {
  return (
    <div
      className="relative animate-webgl-scale-in-fade mr-40"
      style={{ transform: "scale(0.8)" }}
    >
      <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
      {/* <Spline scene="/rubiks_cube_animation.splinecode" /> */}
    </div>
  );
});

RotatingCube.displayName = "RotatingCube";

export default RotatingCube;

// "use client";
// import Spline from "@splinetool/react-spline";

// export default function RotatingCube() {
// return (
// <Spline scene="/rubiks_cube_animation.splinecode" />
// <div style={{ width: "100%", height: "100vh" }}>
// </div>
// <main>
// <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
// </main>
// <div className="spline-container">

// </div>
// );
// }
