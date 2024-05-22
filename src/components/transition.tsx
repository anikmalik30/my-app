import { motion } from "framer-motion";
const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
  },
};

export default function Transition() {
  return (
    <>

      <motion.div
        className="fixed right-full  h-screen w-screen z-30 
      bg-[#292524]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed right-full w-screen h-screen z-20 
      bg-[#1c1917]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed right-full w-screen h-screen z-10 
      bg-[#0c0a09]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      >
      </motion.div>
    </>
  );
}
