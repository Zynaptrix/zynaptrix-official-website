import { PageShell } from "@/components/SiteChrome";
import { ArrowUpRight } from "lucide-react";

export default function WorkPage() {
  const projects = [
    { name: "Project Genesis", desc: "A novel architecture capable of zero-shot physical reasoning in unstructured environments.", year: "2024" },
    { name: "Nexus Engine", desc: "Distributed simulation framework for large-scale multi-agent behavioral emergence.", year: "2023" },
    { name: "Cognitive Synthesizer", desc: "Translating latent spatial representations into verifiable, human-interpretable logic.", year: "2023" },
    { name: "Substrate V1", desc: "Fundamental compute primitives tailored specifically for compositional inference paths.", year: "2022" }
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 md:px-12 pt-24 md:pt-32 pb-20 relative animate-soft-fade-up">
        <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[1] tracking-[-0.03em] mb-24 md:mb-32">
          Our Work
        </h1>
        
        <div className="border-t border-rule font-sans">
           {projects.map((project) => (
             <div key={project.name} className="py-12 md:py-16 border-b border-rule grid lg:grid-cols-[1fr_2fr_auto] gap-6 md:gap-12 group cursor-pointer hover:bg-ink/[0.02] transition-colors -mx-6 px-6 md:-mx-12 md:px-12">
                <p className="font-serif text-3xl md:text-4xl text-ink/90 group-hover:text-ink transition-colors">{project.name}</p>
                <div className="flex flex-col justify-center">
                   <p className="text-ink/60 font-medium text-[15px] max-w-lg leading-relaxed">{project.desc}</p>
                </div>
                <div className="flex items-center gap-6 text-subtle lg:justify-end">
                  <span className="font-mono text-xs tracking-[0.1em]">{project.year}</span>
                  <div className="w-10 h-10 rounded-full border border-rule flex items-center justify-center bg-paper group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-all">
                      <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
             </div>
           ))}
        </div>
      </section>
    </PageShell>
  );
}
