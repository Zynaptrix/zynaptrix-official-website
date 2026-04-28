"use client";

import React from 'react';

const deployments = [
  { 
    title: "Aether Financial", 
    desc: "High-frequency trading interface & predictive analytics dashboard.", 
    icon: "□",
    image: "/work/aether.png"
  },
  { 
    title: "Nexus Logistics", 
    desc: "Global supply chain routing AI and real-time visualization.", 
    icon: "○",
    image: "/work/nexus.png"
  },
  { 
    title: "OmniHealth Data", 
    desc: "Secure patient data ecosystem with diagnostic ML support.", 
    icon: "∆",
    image: "/work/omnihealth.png"
  }
];

export function WorkSection() {
  return (
    <section id="work" className="py-24 bg-ink text-paper">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#10b981] mb-4">Proof of Life</p>
          <h2 className="text-4xl md:text-5xl font-bold">Selected Deployments</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 overflow-x-auto pb-12 pt-4 no-scrollbar snap-x snap-mandatory">
          {deployments.map((work, i) => (
            <div key={i} className="min-w-[85vw] sm:min-w-[400px] shrink-0 snap-center group relative flex flex-col rounded-3xl bg-white/[0.03] border border-white/10 p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-transparent to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500 z-0"></div>
              
              <div className="w-full h-56 sm:h-64 bg-black/50 rounded-2xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden relative z-10">
                {work.image ? (
                  <>
                    <img src={work.image} alt={work.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </>
                ) : (
                  <span className="text-4xl text-white/20 group-hover:text-emerald-400 transition-colors">{work.icon}</span>
                )}
              </div>
              
              <div className="px-2 pb-2 relative z-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 font-serif tracking-wide">{work.title}</h4>
                    <span className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-emerald-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed font-light">{work.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
