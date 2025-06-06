import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScroll, useTransform, motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  // GSAP scroll animation
  useEffect(() => {
    const el = sectionRef.current;
    const box = boxRef.current;

    gsap.fromTo(
      box,
      { y: 100, opacity: 0 },
      {
        y: 0,
        x: 100,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 10%",
          toggleActions: "play none none none",
          scrub: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "120vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        ref={boxRef}
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "#4ade80",
          borderRadius: "20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "24px",
          color: "#fff",
          fontWeight: "bold",
          scale: scale,
          rotate: rotate,
        }}
      >
        Scroll Me In
      </motion.div>
    </section>
  );
};

export default ScrollSection;
