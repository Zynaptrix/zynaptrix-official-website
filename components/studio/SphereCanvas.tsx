"use client";

import { useEffect, useRef } from "react";

export function SphereCanvas() {
  const sphereCanvasRef = useRef<HTMLCanvasElement>(null);

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

    let sphereReqId: number;
    let sphereCtx: CanvasRenderingContext2D | null = null;
    let sWidth = 0;
    let sHeight = 0;
    let sTime = 0;
    const nodes: { x: number; y: number; z: number }[] = [];
    const numNodes = 100;
    const sphereRadius = 120;

    // Generate points on a sphere
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
      
      const rotX = sTime * 0.3;
      const rotY = sTime * 0.5;

      const projectedNodes = nodes.map(node => {
        let y1 = node.y * Math.cos(rotX) - node.z * Math.sin(rotX);
        let z1 = node.y * Math.sin(rotX) + node.z * Math.cos(rotX);
        
        let x2 = node.x * Math.cos(rotY) + z1 * Math.sin(rotY);
        let z2 = -node.x * Math.sin(rotY) + z1 * Math.cos(rotY);
        
        const distance = 300;
        const scale = distance / (distance - z2);
        
        return {
          x: centerX + x2 * scale,
          y: centerY + y1 * scale,
          z: z2,
          scale: scale
        };
      });

      sphereCtx.lineWidth = 0.5;
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const dx = projectedNodes[i].x - projectedNodes[j].x;
          const dy = projectedNodes[i].y - projectedNodes[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          
          if (dist < 45) {
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

      projectedNodes.forEach(node => {
        const opacity = Math.max(0.1, Math.min(0.8, (node.z + sphereRadius) / (sphereRadius * 2)));
        if(sphereCtx) {
            sphereCtx.fillStyle = `rgba(40, 50, 40, ${opacity})`;
            sphereCtx.beginPath();
            sphereCtx.arc(node.x, node.y, 2 * node.scale, 0, Math.PI * 2);
            sphereCtx.fill();
        }
      });

      sTime += 0.01;
      sphereReqId = requestAnimationFrame(animateSphere);
    }

    initSphere();
    if (sphereCtx) animateSphere();

    const handleResize = () => {
      initSphere();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(sphereReqId);
    };
  }, []);

  return (
    <div className="canvas-container relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <canvas 
        ref={sphereCanvasRef} 
        id="sphereCanvas"
        className="block w-full h-full mix-blend-multiply"
      />
    </div>
  );
}
