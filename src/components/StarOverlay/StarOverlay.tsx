"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const StarOverlay = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  return (
    <motion.div
      className="stars-background w-screen h-full absolute pointer-events-none justify-center"
      style={{ y }}
    ></motion.div>
  );
};

export default StarOverlay;
