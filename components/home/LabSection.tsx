"use client";

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function LabSection() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;
      
      const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
      gradientFill.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      gradientFill.addColorStop(1, 'rgba(16, 185, 129, 0.0)');

      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Epoch 0', 'Epoch 2K', 'Epoch 4K', 'Epoch 6K', 'Epoch 8K', 'Epoch 10K'],
          datasets: [{
            label: 'System Latency (ms)',
            data: [120, 95, 82, 75, 68, 65],
            borderColor: '#10b981',
            backgroundColor: gradientFill,
            borderWidth: 2,
            pointBackgroundColor: '#111827',
            pointBorderColor: '#10b981',
            pointBorderWidth: 2,
            pointRadius: 4,
            fill: true,
            tension: 0.4
          },
          {
            label: 'Baseline Industry Avg',
            data: [110, 110, 110, 110, 110, 110],
            borderColor: '#9ca3af',
            borderWidth: 1,
            borderDash: [5, 5],
            pointRadius: 0,
            fill: false,
            tension: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: { 
                font: { 
                  family: 'inherit' 
                }, 
                color: '#4b5563' 
              }
            },
            tooltip: {
              backgroundColor: '#111827',
              titleFont: { family: 'inherit' },
              bodyFont: { family: 'inherit' }
            }
          },
          scales: {
            y: { ticks: { font: { family: 'inherit' }, color: '#9ca3af' } },
            x: { ticks: { font: { family: 'inherit' }, color: '#9ca3af' } }
          }
        }
      });
    }
    return () => {
      if (chartInstance.current) chartInstance.current.destroy();
    };
  }, []);

  return (
    <section id="lab" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-emerald-500 mb-4">Lab Insights</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink">Latest from Research</h2>
          <p className="mt-4 text-gray-600 max-w-2xl">Visualizing our internal benchmarks. The chart below represents optimization gains achieved in our latest routing algorithm iteration.</p>
        </div>

        <div className="bg-white p-6 md:p-10 border border-gray-200 rounded-lg shadow-sm">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h4 className="font-bold text-xl text-ink">Algorithm Efficiency Matrix</h4>
              <p className="text-sm text-gray-500 font-mono mt-1">Latency reduction over 10,000 epochs</p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-bold text-emerald-500">-42%</span>
              <p className="text-xs uppercase tracking-widest text-gray-400">Avg. Latency</p>
            </div>
          </div>
          
          <div className="relative w-full h-[40vh] max-h-[400px]">
            <canvas ref={chartRef}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
