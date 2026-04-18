"use client";

import { useEffect, useRef, useState } from "react";
import { PageShell } from "@/components/SiteChrome";
import { ImageIcon, TypeIcon, CodeIcon } from "lucide-react";
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

// Register Chart.js components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const conceptsData = [
  {
      id: "VAR-01",
      title: "The Obsidian Gallery",
      vibe: "Mysterious, high-end, architectural.",
      imagery: "High-contrast B&W photography with heavy film grain.",
      typography: "Overlapping serif headers that bleed off the edges of the grid.",
      implementation: "Focus on 'Negative Space' and sharp, 1px borders.",
      previewClass: "bg-[#0A0A0A] border border-gray-800",
      previewContent: "<div class='w-full text-left'><div class='text-white font-serif text-3xl italic tracking-tighter ml-[-10px]'>Obsidian.</div><div class='text-[10px] text-gray-500 font-mono mt-4 border-t border-gray-800 pt-2'>1PX // NEGATIVE SPACE</div></div>",
      metrics: [95, 70, 30, 85, 20]
  },
  {
      id: "VAR-02",
      title: "The Kinetic Sidebar",
      vibe: "Fast, digital-first, fluid.",
      imagery: "Video loops or Lottie animations that play only when the specific experiment is in the center of the screen.",
      typography: "Vertical sidebars that act as navigation and progress indicators.",
      implementation: "Scroll-linked animations and viewport intersection observers.",
      previewClass: "bg-blue-50 flex items-center gap-4 border border-blue-100",
      previewContent: "<div class='w-8 h-full bg-blue-600 rounded-full animate-pulse'></div><div class='flex-1'><div class='h-4 bg-blue-200 rounded w-3/4 mb-2'></div><div class='h-2 bg-blue-100 rounded w-1/2'></div></div>",
      metrics: [40, 95, 80, 50, 70]
  },
  {
      id: "VAR-03",
      title: "The Blueprint Archive",
      vibe: "Scientific, precise, 'Work in Progress.'",
      imagery: "Cyanotype-style blue/white technical drawings or thermal heatmaps.",
      typography: "100% Monospace (Courier/IBM Plex Mono) with 'Version Numbers' and 'Timestamp' metadata visible everywhere.",
      implementation: "Grid layouts, dashed borders, and rigorous alignment.",
      previewClass: "bg-blue-900 border-2 border-dashed border-blue-400",
      previewContent: "<div class='w-full border border-blue-400 p-2'><div class='text-blue-300 font-mono text-xs mb-2'>TS: 19:04:22 // V1.0</div><div class='grid grid-cols-3 gap-1'><div class='h-8 border border-blue-500'></div><div class='h-8 border border-blue-500 bg-blue-800'></div><div class='h-8 border border-blue-500'></div></div></div>",
      metrics: [80, 60, 90, 40, 10]
  },
  {
      id: "VAR-04",
      title: "The Glass Prism",
      vibe: "Clean, airy, futuristic.",
      imagery: "Translucent 3D objects that distort the text behind them using backdrop-filter: blur().",
      typography: "Thin, spaced-out sans-serif (Inter/Geist) for a tech-startup feel.",
      implementation: "Heavy use of CSS backdrop-filter, gradients, and z-index layering.",
      previewClass: "bg-gradient-to-tr from-pink-100 to-cyan-100 relative overflow-hidden border border-white",
      previewContent: "<div class='absolute top-2 left-2 right-2 bottom-2 glass-bg rounded-lg flex items-center justify-center'><span class='text-gray-800 tracking-[0.3em] text-xs uppercase'>Translucent</span></div>",
      metrics: [20, 90, 60, 60, 95]
  },
  {
      id: "VAR-05",
      title: "The Brutalist Newspaper",
      vibe: "Raw, authentic, printed.",
      imagery: "Dithered, low-resolution 'stamped' images that look like they were printed on newspaper.",
      typography: "Variable fonts that change weight as you scroll, creating a sense of 'pressure' or 'urgency.'",
      implementation: "CSS dithering techniques, extreme typography scaling, minimal color.",
      previewClass: "bg-[#eee] border-4 border-black dither-bg",
      previewContent: "<div class='bg-white p-2 border-2 border-black w-3/4 transform -rotate-2'><h1 class='font-serif font-black text-2xl uppercase leading-none'>RAW<br>DATA</h1></div>",
      metrics: [90, 40, 20, 95, 30]
  }
];

export default function LabPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    Chart.defaults.font.family = "'IBM Plex Mono', monospace, ui-monospace";
    Chart.defaults.color = '#888';

    chartInstance.current = new Chart(chartRef.current, {
        type: 'radar',
        data: {
            labels: ['Contrast/Edge', 'Modernity', 'Technical Complexity', 'Editorial Feel', 'Fluidity'],
            datasets: [{
                label: 'Aesthetic Profile',
                data: conceptsData[0].metrics,
                backgroundColor: 'rgba(45, 45, 45, 0.2)',
                borderColor: 'rgba(45, 45, 45, 1)',
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(45, 45, 45, 1)',
                pointHoverBackgroundColor: 'rgba(45, 45, 45, 1)',
                pointHoverBorderColor: '#fff',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.05)' },
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    pointLabels: {
                        font: { size: 10, family: "'IBM Plex Mono', monospace, ui-monospace" }
                    },
                    ticks: { display: false, min: 0, max: 100 }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleFont: { family: "'IBM Plex Mono', monospace, ui-monospace" },
                    bodyFont: { family: "'Inter', sans-serif" },
                    padding: 10,
                    // @ts-ignore
                    cornerRadius: 4
                }
            }
        }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (chartInstance.current) {
        chartInstance.current.data.datasets[0].data = conceptsData[currentIndex].metrics;
        chartInstance.current.update();
    }
  }, [currentIndex]);

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
    
    // Initial update and on resize
    updateLaser();
    window.addEventListener('resize', updateLaser);
    return () => window.removeEventListener('resize', updateLaser);
  }, [currentIndex]);

  const activeData = conceptsData[currentIndex];

  return (
    <PageShell>
      <style dangerouslySetInnerHTML={{__html: `
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            height: 40vh;
            max-height: 350px;
        }
        
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }

        .mechanical-rail {
            position: relative;
            height: 600px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .rail-track {
            position: absolute;
            left: 20px;
            top: 0;
            bottom: 0;
            width: 1px;
            background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 10%, rgba(0,0,0,0.1) 90%, transparent);
        }

        .laser-pointer {
            position: absolute;
            left: 18px;
            width: 5px;
            height: 40px;
            background: #1A1A1A;
            transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            z-index: 20;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
        }

        .concept-node {
            position: relative;
            z-index: 10;
            padding-left: 50px;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            cursor: pointer;
            flex-grow: 1;
            display: flex;
            align-items: center;
        }

        .node-marker {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #D1D1D1;
            border: 2px solid #F9F8F4;
            transition: all 0.4s ease;
        }

        .concept-node.active .node-marker {
            background: #1A1A1A;
            transform: translateY(-50%) scale(1.5);
        }

        .node-content {
            transform: translateX(0);
            transition: all 0.5s ease;
            opacity: 0.4;
        }

        .concept-node:hover .node-content {
            opacity: 0.8;
            transform: translateX(10px);
        }

        .concept-node.active .node-content {
            opacity: 1;
            transform: translateX(20px);
        }

        .concept-node.active .node-title {
            font-size: 1.5rem;
            letter-spacing: -0.02em;
            color: #000;
        }

        .glitch-id {
            position: relative;
            display: inline-block;
        }

        .concept-node:hover .glitch-id::before {
            content: attr(data-id);
            position: absolute;
            left: 2px;
            text-shadow: -1px 0 #ff00c1;
            background: transparent;
            overflow: hidden;
            clip: rect(0, 900px, 0, 0);
            animation: noise-anim 2s infinite linear alternate-reverse;
        }

        @keyframes noise-anim {
            0% { clip: rect(12px, 9999px, 80px, 0); }
            20% { clip: rect(45px, 9999px, 2px, 0); }
            40% { clip: rect(67px, 9999px, 98px, 0); }
            60% { clip: rect(10px, 9999px, 45px, 0); }
            80% { clip: rect(32px, 9999px, 12px, 0); }
            100% { clip: rect(89px, 9999px, 67px, 0); }
        }

        .dither-bg {
            background-image: repeating-linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), repeating-linear-gradient(45deg, #ccc 25%, #fff 25%, #fff 75%, #ccc 75%, #ccc);
            background-position: 0 0, 2px 2px;
            background-size: 4px 4px;
        }

        .glass-bg {
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        }
      `}} />

      <div className="bg-[#F9F8F4] text-[#2D2D2D] min-h-screen flex flex-col font-sans mb-[-60px]">
        {/* Navigation Bar matching HTML request */}
        <nav className="border-b border-gray-300 bg-[#F9F8F4] sticky top-0 z-40 px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-serif font-bold tracking-tight">The Lab <span className="text-gray-400 font-mono text-sm ml-2">v2.0</span></div>
            {/* <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Design Concepts Overview</div> */}
        </nav>

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
            
            {/* RADICAL NEW SIDEBAR UI */}
            <aside className="w-full lg:w-1/3 flex flex-col gap-6">
                <div className="relative py-12 px-4 border border-transparent">
                    <div className="mb-12">
                        <h1 className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-black/30 mb-4">Architectural Index</h1>
                        <div className="h-px w-full bg-black/5"></div>
                    </div>

                    <div className="mechanical-rail" ref={railRef}>
                        <div className="rail-track"></div>
                        <div className="laser-pointer" ref={laserRef}></div>
                        {conceptsData.map((concept, index) => (
                           <div 
                              key={concept.id}
                              className={`concept-node ${index === currentIndex ? 'active' : ''}`}
                              onClick={() => setCurrentIndex(index)}
                           >
                              <div className="node-marker"></div>
                              <div className="node-content">
                                  <div className="glitch-id text-[9px] font-mono text-gray-400 mb-1" data-id={concept.id}>{concept.id}</div>
                                  <div className="node-title font-serif text-lg font-medium text-gray-600 transition-all duration-500">{concept.title}</div>
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

            <section className="w-full lg:w-2/3 flex flex-col gap-6 relative z-10">
                <div className="bg-white p-8 rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-200 min-h-[400px] flex flex-col">
                    <div className="mb-6">
                        <p className="text-sm text-gray-600 leading-relaxed mb-4">
                            The detailed view below synthesizes the qualitative descriptions of the selected UI concept into actionable design directives. It includes a simulated visual texture representing the core aesthetic and a radar chart mapping the concept across five distinct design dimensions to aid in comparative analysis.
                        </p>
                    </div>

                    <div className="flex justify-between items-start mb-6 border-b border-gray-100 pb-6">
                        <div>
                            <div className="text-xs font-mono text-gray-400 mb-1">{activeData.id}</div>
                            <h2 className="text-4xl font-serif font-bold text-gray-900 transition-all duration-500">{activeData.title}</h2>
                            <p className="text-lg text-gray-500 italic mt-2">{activeData.vibe}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                        
                        <div className="flex flex-col gap-6">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center">
                                  <ImageIcon className="mr-2 h-3.5 w-3.5" /> Imagery
                                </h3>
                                <p className="text-sm text-gray-800 leading-relaxed font-sans">{activeData.imagery}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center">
                                  <TypeIcon className="mr-2 h-3.5 w-3.5" /> Typography
                                </h3>
                                <p className="text-sm text-gray-800 leading-relaxed font-sans">{activeData.typography}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 flex items-center">
                                  <CodeIcon className="mr-2 h-3.5 w-3.5" /> Implementation
                                </h3>
                                <p className="text-sm text-gray-800 leading-relaxed font-sans">{activeData.implementation}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div 
                               className={`h-48 w-full rounded-lg overflow-hidden relative flex items-center justify-center p-6 transition-all duration-500 shadow-inner ${activeData.previewClass}`}
                               dangerouslySetInnerHTML={{__html: activeData.previewContent}}
                            />
                            
                            <div className="chart-container mt-4">
                                <canvas ref={chartRef}></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer className="border-t border-gray-300 py-6 text-center text-xs font-mono text-gray-400 pb-16">
            DATA EXTRACTED FROM: design_concepts_v2.md &bull; NO EXTERNAL ASSETS LOADED
        </footer>
      </div>
    </PageShell>
  );
}
