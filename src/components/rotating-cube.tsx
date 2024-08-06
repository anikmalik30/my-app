"use client";
import dynamic from "next/dynamic";
import React, { memo } from "react";

// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
import Spline from "@splinetool/react-spline";

const RotatingCube: React.FC = memo(() => {
  return (
    <div className="relative order-1 transform-gpu grayscale md:order-2 md:w-[700px] hidden items-center justify-center lg:flex lg:animate-[open-scale-up-fade_1.5s_ease-in-out] before:from-green-5/5 before:to-yellow-6/25 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:blur-[100px] before:content-['']">
      <div
        className="relative animate-webgl-scale-in-fade"
        // style={{ transform: "scale(0.5)" }}
      >
        <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
        {/* <Spline scene="/rubiks_cube_animation.splinecode" />  */}
      </div>
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
