// components/ScrollSection.jsx

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    const box = boxRef.current;

    gsap.fromTo(
      box,
      { y: 100, opacity: 0, rotation: 0 }, // শুরুতে rotate 0
      {
        y: 0,
        opacity: 1,
        rotation: 360, // শেষ অবস্থায় rotate 360
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "restart none none none", // বারবার চালানোর জন্য
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        height: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
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
        }}
      >
        🔄 Rotating Card
      </div>
    </section>
  );
};

export default ScrollSection;
