"use client";
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false, // Disable server-side rendering for this component
  loading: () => <p>Loading...</p>, // Optional loading placeholder
});

const RotatingCube: React.FC = () => {
return (
  // <div style={{scale:"0.5"}}>
  <div style={{ transform: "scale(0.5)" }}>
    <Spline scene="https://prod.spline.design/8s57-Maaz4u-3lJe/scene.splinecode" />
  </div>
);
};

export default RotatingCube;
