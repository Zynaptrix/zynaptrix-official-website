"use client";

import React from 'react';

const deployments = [
  { 
    title: "Aether Financial", 
    desc: "High-frequency trading interface & predictive analytics dashboard.", 
    icon: "□" 
  },
  { 
    title: "Nexus Logistics", 
    desc: "Global supply chain routing AI and real-time visualization.", 
    icon: "○" 
  },
  { 
    title: "OmniHealth Data", 
    desc: "Secure patient data ecosystem with diagnostic ML support.", 
    icon: "∆" 
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
        
        <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 no-scrollbar">
          {deployments.map((work, i) => (
            <div key={i} className="min-w-[300px] md:min-w-[400px] flex-1 bg-gray-800 p-8 rounded-lg border border-gray-700 hover:border-emerald-500 transition-all group">
              <div className="w-full h-48 bg-gray-900 rounded mb-6 flex items-center justify-center border border-gray-700 group-hover:bg-black transition-colors">
                <span className="text-4xl text-gray-600 group-hover:text-emerald-500">{work.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-2">{work.title}</h4>
              <p className="text-sm text-gray-400">{work.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
