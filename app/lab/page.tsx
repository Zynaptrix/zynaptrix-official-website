"use client";

import { useState } from "react";
import { PageShell } from "@/components/SiteChrome";
import { MechanicalRail } from "@/components/lab/MechanicalRail";
import { ConceptDetail } from "@/components/lab/ConceptDetail";

export default function LabPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <PageShell>
      <style dangerouslySetInnerHTML={{__html: `
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
        </nav>

        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
            <MechanicalRail 
                currentIndex={currentIndex} 
                setCurrentIndex={setCurrentIndex} 
            />
            <ConceptDetail 
                currentIndex={currentIndex} 
            />
        </main>

        <footer className="border-t border-gray-300 py-6 text-center text-xs font-mono text-gray-400 pb-16">
            DATA EXTRACTED FROM: design_concepts_v2.md &bull; NO EXTERNAL ASSETS LOADED
        </footer>
      </div>
    </PageShell>
  );
}
