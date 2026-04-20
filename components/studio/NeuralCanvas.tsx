"use client";

import { useEffect, useRef } from "react";

export function NeuralCanvas() {
  const neuralCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    function setupCanvas(canvas: HTMLCanvasElement) {
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return null;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      return { ctx, width: rect.width, height: rect.height };
    }

    let neuralReqId: number;
    let neuralCtx: CanvasRenderingContext2D | null = null;
    let nWidth = 0;
    let nHeight = 0;
    let time = 0;

    function initNeural() {
      if (!neuralCanvasRef.current) return;
      const setup = setupCanvas(neuralCanvasRef.current);
      if (setup) {
        neuralCtx = setup.ctx;
        nWidth = setup.width;
        nHeight = setup.height;
      }
    }

    function drawBranch(x: number, y: number, radius: number, angle: number, depth: number) {
      if (depth === 0 || !neuralCtx) return;

      const length = depth * 15 + Math.sin(time + depth) * 5;
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      neuralCtx.beginPath();
      neuralCtx.moveTo(x, y);
      neuralCtx.lineTo(endX, endY);
      
      neuralCtx.strokeStyle = `rgba(30, 40, 80, ${depth * 0.15})`;
      neuralCtx.lineWidth = depth * 0.8;
      neuralCtx.stroke();

      const numBranches = 2 + Math.floor(Math.sin(time * 0.5 + depth) * 1);
      for (let i = 0; i < numBranches; i++) {
        const angleOffset = (Math.PI / 4) * (i === 0 ? 1 : -1) + Math.sin(time + i) * 0.2;
        drawBranch(endX, endY, radius * 0.7, angle + angleOffset, depth - 1);
      }
    }

    function animateNeural() {
      if (!neuralCtx) return;
      neuralCtx.clearRect(0, 0, nWidth, nHeight);
      
      const centerX = nWidth / 2;
      const centerY = nHeight / 2;

      const gradient = neuralCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      gradient.addColorStop(0, 'rgba(40, 60, 150, 0.4)');
      gradient.addColorStop(1, 'rgba(40, 60, 150, 0)');
      neuralCtx.fillStyle = gradient;
      neuralCtx.beginPath();
      neuralCtx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      neuralCtx.fill();

      const numRootBranches = 8;
      for (let i = 0; i < numRootBranches; i++) {
        const angle = (Math.PI * 2 / numRootBranches) * i + time * 0.1;
        drawBranch(centerX, centerY, 20, angle, 5);
      }

      time += 0.02;
      neuralReqId = requestAnimationFrame(animateNeural);
    }

    initNeural();
    if (neuralCtx) animateNeural();

    const handleResize = () => {
      initNeural();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(neuralReqId);
    };
  }, []);

  return (
    <div className="canvas-container relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <canvas 
        ref={neuralCanvasRef} 
        id="neuralCanvas"
        className="block w-full h-full mix-blend-multiply"
      />
    </div>
  );
}
