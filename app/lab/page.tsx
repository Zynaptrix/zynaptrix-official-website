import { PageShell } from "@/components/SiteChrome";
import Image from "next/image";

export default function LabPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 md:px-12 pt-24 md:pt-32 pb-20 relative animate-soft-fade-up">
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[1] tracking-[-0.03em] mb-12">
          The Lab
        </h1>
        <p className="max-w-2xl text-xl md:text-2xl font-serif text-ink/70 leading-relaxed mb-24">
          Unpolished experiments, early prototypes, and visual explorations from our research team. Things that might become something, or might remain nothing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
           {Array.from({ length: 6 }).map((_, i) => (
             <div key={i} className="bg-paper aspect-square p-8 flex flex-col justify-between group cursor-crosshair relative overflow-hidden transition-colors hover:bg-ink/[0.02]">
                <div className="flex items-center justify-between z-10">
                   <p className="text-xs text-subtle font-bold tracking-[0.2em] font-mono">EXP—{(i + 1).toString().padStart(3, '0')}</p>
                   <span className="w-2 h-2 rounded-full bg-ink/20 group-hover:bg-ink/60 transition-colors" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none">
                  {i % 2 === 0 ? (
                    <Image 
                      src="/helmet.png" 
                      width={240} 
                      height={240} 
                      alt="Experiment Visualization" 
                      className="w-full h-auto opacity-[0.15] mix-blend-multiply group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" 
                    />
                  ) : i === 1 ? (
                    <div className="w-2/3 h-2/3 border border-ink/20 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
                  ) : i === 3 ? (
                    <div className="grid grid-cols-3 gap-2 w-1/2 h-1/2">
                       {Array.from({ length: 9 }).map((_, j) => (
                         <div key={j} className="bg-ink/10 rounded-sm" style={{ opacity: Math.random() * 0.5 + 0.1 }} />
                       ))}
                    </div>
                  ) : (
                    <div className="w-1/2 h-1/2 bg-linear-to-tr from-ink/10 to-transparent rounded-full opacity-50 blur-xl group-hover:blur-2xl group-hover:scale-110 transition-all duration-1000" />
                  )}
                </div>

                <p className="font-serif text-lg z-10 text-ink/80 group-hover:text-ink transition-colors">
                   {i === 0 ? "Manifold rendering" : 
                    i === 1 ? "Attention mapping" : 
                    i === 2 ? "Latent space diffusion" : 
                    i === 3 ? "Grid structure collapse" : 
                    i === 4 ? "Neural pathway visualization" : 
                    "Vector space embeddings"}
                </p>
             </div>
           ))}
        </div>
      </section>
    </PageShell>
  );
}
