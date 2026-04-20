"use client";

import { useEffect, useRef } from "react";

const ITEMS = [
  "Custom Web Design",
  "Mobile App Development",
  "E-Commerce Solutions",
  "UI / UX Design",
  "Custom Software",
  "SEO & Marketing",
  "AI & Automation",
  "Startup MVPs",
  "SaaS Platforms",
];

export function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let offset = 0;
    const speed = 1.0; // pixels per frame for smooth scroll

    const animate = () => {
      if (!container.firstElementChild) return;

      offset += speed;
      container.style.transform = `translateX(-${offset}px)`;

      const firstChild = container.firstElementChild as HTMLElement;
      
      // When the offset exceeds the width of the first DOM element
      if (offset >= firstChild.offsetWidth) {
        offset -= firstChild.offsetWidth;
        container.style.transform = `translateX(-${offset}px)`;
        // Double-ended queue operation: dequeue front, enqueue back
        container.appendChild(firstChild);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // Repeat enough times to guarantee it covers ultrawide monitors before looping
  const initialItems = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-gray-200 py-4 bg-white overflow-hidden flex whitespace-nowrap select-none">
      <div 
        ref={containerRef} 
        className="flex items-center text-sm tracking-widest font-medium uppercase text-gray-400"
      >
        {initialItems.map((item, index) => (
          <div key={index} className="flex items-center flex-shrink-0">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-gray-300 mx-8"></span>
          </div>
        ))}
      </div>
    </div>
  );
}
