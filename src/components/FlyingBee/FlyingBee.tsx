import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "./FlyingBee.css";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function FlyingBee() {
  const beeRef = useRef<HTMLImageElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const bee = beeRef.current;

    if (!path || !bee) return;

    const buildPath = () => {
      const pageHeight = document.body.scrollHeight;

      const curves = `
        M 0 0
        C ${window.innerWidth * 0.4} ${pageHeight * 0.15},
          ${-window.innerWidth * 0.3} ${pageHeight * 0.35},
          ${window.innerWidth * 0.5} ${pageHeight * 0.55}
        S ${window.innerWidth * 0.8} ${pageHeight * 0.85},
          0 ${pageHeight}
      `;

      path.setAttribute("d", curves);
    };

    const ctx = gsap.context(() => {
      buildPath();

      gsap.to(bee, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 10,
        },
        motionPath: {
          path: path,
          align: path,
          autoRotate: 90,
          alignOrigin: [0.5, 0.5],
        },
      });
    });

    window.addEventListener("resize", buildPath);

    return () => {
      window.removeEventListener("resize", buildPath);
      ctx.revert();
    };
  }, []);

  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <path ref={pathRef} fill="none" stroke="none" />
      </svg>

      <img ref={beeRef} src="/Bee.png" className="bee" />
    </>
  );
}
