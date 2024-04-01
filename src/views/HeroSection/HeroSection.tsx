"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  return (
    <motion.div
      ref={ref}
      className="hero w-full h-screen max-h-[80vh] max-w-[80vh] md:max-w-[80vw]"
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
        className="max-h-[80vh] max-w-[80vw] md:max-w-[80vw] rounded-full -z-10"
      >
        <source
          src="bg-rotating-earth.webm"
          type="video/webm"
          className=" rotate-12"
        />
      </video>
      <div className="hero-content text-center text-neutral-content mt-16">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl md:text-4xl font-bold text-gray-100">
            Space Precision Systems
          </h1>
          <a
            className="mb-5 mx-5 text-gray-200 btn btn-primary"
            href="#approach"
          >
            Liftoff 🚀
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
