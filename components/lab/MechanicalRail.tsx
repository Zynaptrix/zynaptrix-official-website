"use client";

import { useEffect, useRef } from "react";
import { conceptsData } from "@/app/lab/data";

interface MechanicalRailProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export function MechanicalRail({ currentIndex, setCurrentIndex }: MechanicalRailProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLaser = () => {
      if (railRef.current && laserRef.current) {
        const nodes = railRef.current.querySelectorAll('.concept-node');
        if (nodes[currentIndex]) {
          const element = nodes[currentIndex] as HTMLElement;
          const parentRect = railRef.current.getBoundingClientRect();
          const rect = element.getBoundingClientRect();
          const top = rect.top - parentRect.top + (rect.height / 2) - 20;
          laserRef.current.style.transform = `translateY(${top}px)`;
        }
      }
    };
    
    updateLaser();
    window.addEventListener('resize', updateLaser);
    return () => window.removeEventListener('resize', updateLaser);
  }, [currentIndex]);

  return (
    <aside className="w-full lg:w-1/3 flex flex-col gap-6">
      <div className="relative py-12 px-4 border border-transparent">
        <div className="mb-12">
          <h1 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-black/30 mb-4">Architectural Index</h1>
          <div className="h-px w-full bg-black/5"></div>
        </div>

        <div className="mechanical-rail relative h-[600px] flex flex-col justify-between" ref={railRef}>
          <div className="rail-track absolute left-[20px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>
          <div className="laser-pointer absolute left-[18px] w-[5px] height-[40px] bg-[#1A1A1A] transition-all duration-600 cubic-bezier(0.16, 1, 0.3, 1) z-20 shadow-[0_0_10px_rgba(0,0,0,0.2)]" ref={laserRef} style={{ height: '40px' }}></div>
          
          {conceptsData.map((concept, index) => (
            <div 
              key={concept.id}
              className={`concept-node relative z-10 pl-[50px] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) cursor-pointer flex-grow flex items-center ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className={`node-marker absolute left-[16px] top-1/2 -translate-y-1/2 w-[9px] h-[9px] rounded-full border-2 border-[#F9F8F4] transition-all duration-400 ${index === currentIndex ? 'bg-[#1A1A1A] scale-[1.5]' : 'bg-[#D1D1D1]'}`}></div>
              <div className={`node-content transition-all duration-500 transform ${index === currentIndex ? 'opacity-100 translate-x-[20px]' : 'opacity-40 hover:opacity-80 hover:translate-x-[10px]'}`}>
                <div className="glitch-id text-[9px] font-mono text-gray-400 mb-1" data-id={concept.id}>{concept.id}</div>
                <div className={`node-title font-serif font-medium transition-all duration-500 ${index === currentIndex ? 'text-2xl -tracking-[0.02em] text-[#000]' : 'text-lg text-gray-600'}`}>
                  {concept.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-black/5"></div>
          <div className="text-[9px] font-mono text-black/20 uppercase tracking-widest">End_of_Registry</div>
          <div className="flex-1 h-[1px] bg-black/5"></div>
        </div>
      </div>
    </aside>
  );
}
