"use client";

import { PageShell } from "@/components/SiteChrome";
import { NeuralCanvas } from "@/components/studio/NeuralCanvas";
import { SphereCanvas } from "@/components/studio/SphereCanvas";

export default function StudioPage() {
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
                <div className="order-1 md:order-2">
                    <NeuralCanvas />
                </div>
            </section>

            {/* Culture & Thinking Section */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-8 md:px-24 py-24 items-center fade-up delay-200">
                <div className="order-1 md:order-2">
                    <SphereCanvas />
                </div>
                <div className="max-w-md order-2 md:order-1">
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
