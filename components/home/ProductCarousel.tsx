"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Play, ArrowRight } from 'lucide-react';

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

const deployments = [
  {
    id: 1,
    name: "Aether Financial",
    description: "High-frequency trading interface & predictive analytics dashboard for institutional liquidity management.",
    image: "/assets/carousel/aether.png",
    nextImage: "/assets/carousel/nexus.png",
    bgClass: "bg-[#064e3b]", // Dark Emerald
    accentColor: "#1e3a8a", // Deep Blue
    stats: [
      { label: "Execution Latency", value: "0.2ms" },
      { label: "Daily Volume", value: "1.2B" },
      { label: "Prediction Accuracy", value: "99.9%" }
    ],
    bgText: "FINANCE"
  },
  {
    id: 2,
    name: "Nexus Logistics",
    description: "Global supply chain routing AI and real-time visualization for complex multi-modal transit networks.",
    image: "/assets/carousel/nexus.png",
    nextImage: "/assets/carousel/omnihealth.png",
    bgClass: "bg-[#312e81]", // Indigo
    accentColor: "#5b21b6", // Purple
    stats: [
      { label: "Global Hubs", value: "142" },
      { label: "Cost Savings", value: "12%" },
      { label: "Uptime", value: "24/7" }
    ],
    bgText: "LOGISTICS"
  },
  {
    id: 3,
    name: "OmniHealth Data",
    description: "Secure patient data ecosystem with diagnostic ML support and longitudinal health tracking.",
    image: "/assets/carousel/omnihealth.png",
    nextImage: "/assets/carousel/aether.png",
    bgClass: "bg-[#134e4a]", // Teal
    accentColor: "#0891b2", // Cyan
    stats: [
      { label: "Records Managed", value: "5M+" },
      { label: "Security Std.", value: "HIPAA" },
      { label: "Dx Speedup", value: "40%" }
    ],
    bgText: "HEALTHCARE"
  }
];

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const project = deployments[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % deployments.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      id="work"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative w-full py-24 bg-ink text-paper"
    >
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <p className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-4">Proof of Life</p>
        <h2 className="text-4xl md:text-5xl font-bold font-serif">Selected Deployments</h2>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="relative w-full h-[700px] overflow-hidden bg-white/5 backdrop-blur-sm shadow-2xl rounded-lg border border-white/10">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex"
          >
          {/* Background Split */}
          <div className={`absolute inset-0 ${project.bgClass} transition-colors duration-700 opacity-40`} />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: '45%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 80 }}
            className="absolute inset-0 z-0"
            style={{ 
              backgroundColor: project.accentColor,
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
              opacity: 0.3
            }}
          />

          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <h2 className="text-[12vw] font-black text-white/[0.03] tracking-tighter leading-none uppercase">
              {project.bgText}
            </h2>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex w-full h-full">
            {/* Project Visual Side */}
            <div className="w-1/2 relative flex items-center justify-center p-12">
              <motion.div
                key={`vis-${project.id}`}
                initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
                className="relative w-full max-w-[500px] aspect-square rounded-md overflow-hidden border border-white/10 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>

            {/* Project Info Side */}
            <div className="w-1/2 flex flex-col justify-center pl-16 pr-40 relative z-20">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-5xl font-bold mb-6 tracking-tight leading-tight font-serif text-white">{project.name}</h1>
                <p className="text-xl text-white/70 max-w-md mb-12 leading-relaxed font-light">
                  {project.description}
                </p>
                
                <motion.button 
                  whileHover={{ gap: '1.5rem' }}
                  className="flex items-center gap-4 bg-emerald-500 text-white px-8 py-4 rounded-sm font-bold group transition-all"
                >
                  View Case Study
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Bottom Bar (Stats) */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-black/60 backdrop-blur-xl border-t border-white/10 flex items-center z-30">
            <div className="flex w-3/4 px-12 divide-x divide-white/10">
              {project.stats.map((stat) => (
                <div key={stat.label} className="flex-1 px-8 first:pl-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-white tracking-tight font-serif">{stat.value}</span>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-500/80 mt-1 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Interaction Area */}
            <div className="flex-1 h-full flex divide-x divide-white/5">
              <div className="w-24 h-full flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors group">
                <Heart className="text-white/40 w-6 h-6 group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
              </div>

              <div className="relative flex-1 h-full overflow-hidden group cursor-pointer bg-white/5">
                <img src={project.image} alt="preview" className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                    <Play className="text-white w-4 h-4 fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls (Right Side) */}
          <div className="absolute top-[30%] right-0 w-32 h-[400px] flex flex-col z-40 border-l border-white/5">
            {/* Explore More Block */}
            <div className="h-1/2 bg-[#0a0a0a] p-6 flex flex-col justify-center items-start group cursor-pointer hover:bg-[#111] transition-colors border-b border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-4 leading-tight">Project<br/>Explorer</span>
              <ArrowRight className="text-[#10b981] w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </div>
            
            {/* Next Item Preview Block */}
            <div 
              onClick={nextSlide}
              className="h-1/2 p-4 flex flex-col items-center justify-center cursor-pointer hover:brightness-125 transition-all relative overflow-hidden group"
              style={{ backgroundColor: project.accentColor }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="relative w-full h-24 mb-4 z-10">
                <img src={project.nextImage} alt="next" className="w-full h-full object-cover rounded-sm shadow-xl" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 z-10">Next Case</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
    </section>
  );
}
