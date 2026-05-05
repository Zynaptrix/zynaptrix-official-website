"use client";

import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="cta" className="py-32 bg-ink text-paper text-center px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-12 h-full w-full">
          {[...Array(12)].map((_, i) => <div key={i} className="border-r border-emerald-500 h-full" />)}
        </div>
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Ready to engineer your next ecosystem?</h2>
        <p className="text-xl text-gray-400 mb-12 font-light">We are currently accepting select partnerships for Q3 2026.</p>
        <button className="bg-emerald-500 text-white px-10 py-5 text-sm font-bold tracking-widest uppercase rounded hover:bg-white hover:text-black transition-all transform hover:scale-105 active:scale-95 flex items-center mx-auto gap-2 group cursor-pointer">
          Initiate Project
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
