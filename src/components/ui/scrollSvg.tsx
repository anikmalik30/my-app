import React from 'react';
import { motion } from 'framer-motion';

const ScrollSvg = ({ width = 50, height = 50, color = "#ffffff" }) => {
  return (
    <motion.svg
      initial={{ opacity: 0.2, y: 0 }}
      animate={{ opacity: 1, y: "10px" }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
    >
      <path
        d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
        stroke={color}
        strokeWidth="1"
      ></path>
      <path d="M12 6V14" stroke={color} strokeWidth="1"></path>
      <path
        d="M15 11L12 14L9 11"
        stroke={color}
        strokeWidth="1"
      ></path>
    </motion.svg>
  );
};

export default ScrollSvg;