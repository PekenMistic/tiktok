"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beams = beamsRef.current;
    if (!beams) return;

    const createBeam = () => {
      const beam = document.createElement("div");
      beam.className = "absolute h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent";
      beam.style.width = Math.random() * 200 + 100 + "px";
      beam.style.left = Math.random() * 100 + "%";
      beam.style.top = Math.random() * 100 + "%";
      beam.style.opacity = "0";
      beam.style.animation = `beam-animation ${Math.random() * 3 + 2}s linear infinite`;

      beams.appendChild(beam);

      setTimeout(() => {
        if (beams.contains(beam)) {
          beams.removeChild(beam);
        }
      }, 5000);
    };

    const interval = setInterval(createBeam, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden pointer-events-none",
        className
      )}
    >
      <style jsx>{`
        @keyframes beam-animation {
          0% {
            opacity: 0;
            transform: translateX(-100px) rotate(-45deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100px) rotate(-45deg);
          }
        }
      `}</style>
    </div>
  );
};
