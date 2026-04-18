import { PageShell } from "@/components/SiteChrome";
import Image from "next/image";

export default function StudioPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 md:px-12 pt-24 md:pt-32 pb-20 relative animate-soft-fade-up">
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[1] tracking-[-0.03em] mb-12">
          The Studio.<br />
          Where logic<br />
          <span className="text-ink/40">meets intuition.</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 mt-24 md:mt-32">
          <div>
            <p className="text-xs tracking-[0.2em] font-bold text-subtle uppercase mb-8">Environment</p>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink/90">
              We've created a sanctuary for deep work. No open floor plans, no ping-pong tables. Just quiet spaces designed for concentration, collaboration, and the pursuit of general-purpose intelligence.
            </p>
          </div>
          <div className="relative aspect-square bg-ink/5 rounded-2xl overflow-hidden flex items-center justify-center p-12 mix-blend-multiply">
             <Image
                src="/neural-sculpture.png"
                alt="Studio Environment Structure"
                width={800}
                height={800}
                className="object-contain w-full h-full opacity-80 filter drop-shadow-xl transition-transform duration-700 hover:scale-105"
              />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-32 mt-24 md:mt-40">
          <div className="order-2 md:order-1 relative aspect-[4/3] bg-linear-to-br from-ink/5 to-transparent rounded-2xl flex items-center justify-center p-8 overflow-hidden group">
             <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
             <Image
                src="/helmet.png"
                alt="Way of Thinking"
                width={500}
                height={500}
                className="w-2/3 h-auto object-contain opacity-40 mix-blend-multiply transition-all duration-1000 group-hover:scale-110 group-hover:rotate-[-2deg]"
              />
          </div>
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] font-bold text-subtle uppercase mb-8">Culture & Thinking</p>
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-ink/90 mb-8">
              We value rigorous methodology over quick hacks. True breakthroughs require patience, multidisciplinary thinking, and a willingness to question fundamental assumptions.
            </p>
            <p className="font-sans text-ink/60 leading-relaxed text-[15px] font-medium">
                Our culture is rooted in intense curiosity. We hire researchers who are as comfortable discussing philosophy as they are writing CUDA kernels. The best ideas often emerge at the intersection of entirely different computational disciplines.
            </p>
          </div>
        </div>

        <div className="mt-32 md:mt-48 pt-20 border-t border-rule text-center">
           <h2 className="font-serif text-3xl md:text-5xl text-ink/80 mb-8">Join the collective</h2>
           <a
             href="mailto:careers@zynaptrix.ai"
             className="inline-flex items-center justify-center rounded-full bg-ink text-paper px-8 py-3.5 text-[13px] font-bold tracking-[0.15em] hover:bg-ink/80 transition-colors"
           >
             VIEW OPEN ROLES
           </a>
        </div>
      </section>
    </PageShell>
  );
}
