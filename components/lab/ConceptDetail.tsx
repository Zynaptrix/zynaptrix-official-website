"use client";

import { useEffect, useRef } from "react";
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { ImageIcon, TypeIcon, CodeIcon } from "lucide-react";
import { conceptsData } from "@/app/lab/data";

// Register Chart.js components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface ConceptDetailProps {
  currentIndex: number;
}

export function ConceptDetail({ currentIndex }: ConceptDetailProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

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
          data: conceptsData[currentIndex].metrics,
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
            ticks: { display: false },
            min: 0,
            max: 100
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

  const activeData = conceptsData[currentIndex];

  return (
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
            
            <div className="chart-container mt-4 relative w-full h-[40vh] max-h-[350px] md:h-[350px]">
              <canvas ref={chartRef}></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
