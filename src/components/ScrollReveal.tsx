"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const [isRevealed, setIsRevealed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Check if element is already in viewport on initial render
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight + 150) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsRevealed(true);
            }, delay);
          } else {
            setIsRevealed(true);
          }
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 200px 0px", // Trigger 200px BEFORE entering viewport
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isRevealed ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
