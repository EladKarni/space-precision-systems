"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={ref}
      className="hero w-full max-h-[60vh] max-w-[40vh] -z-10"
      style={{
        scale,
        y: scrollY,
        opacity: scale,
      }}
    >
      <video
        loop
        autoPlay
        muted
        className="max-h-[60vh] max-w-[40vh] rounded-full"
      >
        <source src="bg-rotating-earth.webm" type="video/webm" />
      </video>
      <div className="hero-content text-center text-neutral-content mt-16">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-7xl font-bold text-secondary">
            Space Precision Systems
          </h1>
          <p className="mb-5 mx-5 text-gray-300">Liftoff Coming Soon</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
