"use client";

import { useEffect, useRef } from "react";
import { PageShell } from "@/components/SiteChrome";

export default function StudioPage() {
  const neuralCanvasRef = useRef<HTMLCanvasElement>(null);
  const sphereCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Shared Setup utility for high DPI canvas
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
    let sphereReqId: number;

    // --- ANIMATION 1: Neural Dendrite (Environment) ---
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
      
      // Stylize the lines to look organic and slightly blurry
      neuralCtx.strokeStyle = `rgba(30, 40, 80, ${depth * 0.15})`;
      neuralCtx.lineWidth = depth * 0.8;
      neuralCtx.stroke();

      // Recursively draw next branches
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

      // Draw glowing core
      const gradient = neuralCtx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 40);
      gradient.addColorStop(0, 'rgba(40, 60, 150, 0.4)');
      gradient.addColorStop(1, 'rgba(40, 60, 150, 0)');
      neuralCtx.fillStyle = gradient;
      neuralCtx.beginPath();
      neuralCtx.arc(centerX, centerY, 40, 0, Math.PI * 2);
      neuralCtx.fill();

      // Draw radiating neural branches
      const numRootBranches = 8;
      for (let i = 0; i < numRootBranches; i++) {
        const angle = (Math.PI * 2 / numRootBranches) * i + time * 0.1;
        drawBranch(centerX, centerY, 20, angle, 5);
      }

      time += 0.02;
      neuralReqId = requestAnimationFrame(animateNeural);
    }

    // --- ANIMATION 2: Wireframe Data Sphere (Culture) ---
    let sphereCtx: CanvasRenderingContext2D | null = null;
    let sWidth = 0;
    let sHeight = 0;
    let sTime = 0;
    const nodes: {x: number, y: number, z: number}[] = [];
    const numNodes = 100;
    const sphereRadius = 120;

    // Generate points on a sphere (Fibonacci lattice for even distribution)
    for (let i = 0; i < numNodes; i++) {
        const phi = Math.acos(1 - 2 * (i + 0.5) / numNodes);
        const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);
        
        nodes.push({
            x: sphereRadius * Math.sin(phi) * Math.cos(theta),
            y: sphereRadius * Math.sin(phi) * Math.sin(theta),
            z: sphereRadius * Math.cos(phi)
        });
    }

    function initSphere() {
      if (!sphereCanvasRef.current) return;
      const setup = setupCanvas(sphereCanvasRef.current);
      if (setup) {
        sphereCtx = setup.ctx;
        sWidth = setup.width;
        sHeight = setup.height;
      }
    }

    function animateSphere() {
      if (!sphereCtx) return;
      sphereCtx.clearRect(0, 0, sWidth, sHeight);
      
      const centerX = sWidth / 2;
      const centerY = sHeight / 2;
      
      // Rotation matrices
      const rotX = sTime * 0.3;
      const rotY = sTime * 0.5;

      const projectedNodes = nodes.map(node => {
          // Rotate X
          let y1 = node.y * Math.cos(rotX) - node.z * Math.sin(rotX);
          let z1 = node.y * Math.sin(rotX) + node.z * Math.cos(rotX);
          
          // Rotate Y
          let x2 = node.x * Math.cos(rotY) + z1 * Math.sin(rotY);
          let z2 = -node.x * Math.sin(rotY) + z1 * Math.cos(rotY);
          
          // Simple perspective projection
          const distance = 300;
          const scale = distance / (distance - z2);
          
          return {
              x: centerX + x2 * scale,
              y: centerY + y1 * scale,
              z: z2,
              scale: scale
          };
      });

      // Draw connections
      sphereCtx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
          for (let j = i + 1; j < projectedNodes.length; j++) {
              const dx = projectedNodes[i].x - projectedNodes[j].x;
              const dy = projectedNodes[i].y - projectedNodes[j].y;
              const dist = Math.sqrt(dx*dx + dy*dy);
              
              if (dist < 45) { // Only connect close nodes
                  // Opacity based on Z-depth to simulate 3D fade
                  const avgZ = (projectedNodes[i].z + projectedNodes[j].z) / 2;
                  const opacity = Math.max(0.05, Math.min(0.3, (avgZ + sphereRadius) / (sphereRadius * 2)));
                  
                  sphereCtx.strokeStyle = `rgba(100, 110, 100, ${opacity})`;
                  sphereCtx.beginPath();
                  sphereCtx.moveTo(projectedNodes[i].x, projectedNodes[i].y);
                  sphereCtx.lineTo(projectedNodes[j].x, projectedNodes[j].y);
                  sphereCtx.stroke();
              }
          }
      }

      // Draw nodes
      projectedNodes.forEach(node => {
          const opacity = Math.max(0.1, Math.min(0.8, (node.z + sphereRadius) / (sphereRadius * 2)));
          // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
          sphereCtx!.fillStyle = `rgba(40, 50, 40, ${opacity})`;
          sphereCtx!.beginPath();
          sphereCtx!.arc(node.x, node.y, 2 * node.scale, 0, Math.PI * 2);
          sphereCtx!.fill();
      });

      sTime += 0.01;
      sphereReqId = requestAnimationFrame(animateSphere);
    }

    // Initialize and handle resizing
    initNeural();
    if (neuralCtx) animateNeural();
    
    initSphere();
    if (sphereCtx) animateSphere();

    const handleResize = () => {
        initNeural();
        initSphere();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(neuralReqId);
      cancelAnimationFrame(sphereReqId);
    };
  }, []);

  return (
    <PageShell>
      <style dangerouslySetInnerHTML={{ __html: `
        /* Entrance Animations */
        .fade-up {
            opacity: 0;
            transform: translateY(30px);
            animation: fadeUpAnim 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeUpAnim {
            to { opacity: 1; transform: translateY(0); }
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }

        /* Canvas Containers */
        .canvas-container {
            position: relative;
            width: 100%;
            aspect-ratio: 1 / 1;
            max-width: 500px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .canvas-container canvas {
            display: block;
            width: 100%;
            height: 100%;
            mix-blend-mode: multiply;
        }
      ` }} />
      <div className="bg-[#F9F8F4] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-[#F9F8F4]">

        {/* Hero Section */}
        <header className="px-8 md:px-24 pt-24 pb-32 max-w-7xl mx-auto w-full">
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] leading-[1.05] font-serif tracking-tight text-[#111] fade-up">
                The Studio.<br/>
                Where logic<br/>
                meets intuition.
            </h1>
        </header>

        {/* Content Sections */}
        <main className="flex-grow w-full max-w-7xl mx-auto pb-16">
            
            {/* Environment Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-8 md:px-24 py-24 items-center fade-up delay-100">
                <div className="order-2 md:order-1 max-w-md">
                    <h2 className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-black/40 mb-8">Environment</h2>
                    <p className="text-2xl md:text-[1.75rem] leading-[1.5] font-serif text-[#222]">
                        We've created a sanctuary for deep work. No open floor plans, no ping-pong tables. Just quiet spaces designed for concentration, collaboration, and the pursuit of general-purpose intelligence.
                    </p>
                </div>
                <div className="order-1 md:order-2 canvas-container">
                    <canvas ref={neuralCanvasRef} id="neuralCanvas"></canvas>
                </div>
            </section>

            {/* Culture & Thinking Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-8 md:px-24 py-24 items-center fade-up delay-200">
                <div className="canvas-container">
                    <canvas ref={sphereCanvasRef} id="sphereCanvas"></canvas>
                </div>
                <div className="max-w-md">
                    <h2 className="text-[9px] font-mono font-bold uppercase tracking-[0.25em] text-black/40 mb-8">Culture & Thinking</h2>
                    <p className="text-2xl md:text-[1.75rem] leading-[1.5] font-serif text-[#222] mb-8">
                        We value rigorous methodology over quick hacks. True breakthroughs require patience, multidisciplinary thinking, and a willingness to question fundamental assumptions.
                    </p>
                    <p className="text-sm font-sans text-[#555] leading-relaxed">
                        Our culture is rooted in intense curiosity. We hire researchers who are as comfortable discussing philosophy as they are writing CUDA kernels. The best ideas often emerge at the intersection of entirely different computational disciplines.
                    </p>
                </div>
            </section>

        </main>

        {/* Call to Action */}
        <section className="mt-24 mb-32 px-8 md:px-24 max-w-4xl mx-auto w-full text-center fade-up delay-300 pb-24">
            <div className="w-full h-px bg-black/10 mb-24"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Join the collective</h2>
            <a href="#" className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-black hover:text-black/50 transition-colors pb-1 border-b border-transparent hover:border-black/50">
                View Open Roles
            </a>
        </section>

      </div>
    </PageShell>
  );
}
