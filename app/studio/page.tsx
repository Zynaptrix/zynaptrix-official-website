"use client";

import { PageShell } from "@/components/SiteChrome";
import { StudioGridCard } from "@/components/studio/StudioGridCard";
import { FadeInSection } from "@/components/FadeInSection";

const studioItems = [
  {
    num: "01",
    title: "Digital Architecture",
    desc: "We design and build scalable digital ecosystems that form the backbone of modern business operations.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-2",
  },
  {
    num: "02",
    title: "Intelligence Systems",
    desc: "Integrating advanced AI and machine learning models to automate complex workflows.",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-1",
  },
  {
    num: "03",
    title: "Interface Design",
    desc: "High-fidelity, interactive user experiences that bridge the gap between human and machine.",
    img: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-1",
  },
  {
    num: "04",
    title: "Research & Development",
    desc: "Pushing the boundaries of what's possible with emerging technologies and experimental code.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-2",
  },
  {
    num: "05",
    title: "The Environment",
    desc: "A sanctuary for deep work. No open floor plans, no distractions. Just quiet spaces designed for concentration and the pursuit of general-purpose intelligence.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-2",
  },
  {
    num: "06",
    title: "Culture & Thinking",
    desc: "We value rigorous methodology over quick hacks. True breakthroughs require patience, multidisciplinary thinking, and a willingness to question assumptions.",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    colSpan: "lg:col-span-1",
  },
];

export default function StudioPage() {
  return (
    <PageShell>
      <div className="bg-[#F9F8F4] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-[#F9F8F4] min-h-screen">
        
        {/* Hero Section */}
        <header className="px-8 md:px-24 pt-32 pb-24 max-w-7xl mx-auto w-full">
          <FadeInSection>
            <h2 className="text-xs tracking-[0.2em] font-bold text-gray-400 mb-8 uppercase">The Studio</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-serif tracking-tight text-[#111] mb-12">
              Where logic<br/>
              meets intuition.
            </h1>
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-600 max-w-3xl">
              We engineer digital ecosystems. From elegant interfaces to robust backend infrastructures, we build software that drives real-world impact.
            </p>
          </FadeInSection>
        </header>

        {/* Studio Grid */}
        <main className="px-8 md:px-24 pb-32 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioItems.map((item, idx) => (
              <StudioGridCard
                key={idx}
                num={item.num}
                title={item.title}
                desc={item.desc}
                img={item.img}
                colSpan={item.colSpan}
                delay={idx * 100}
              />
            ))}
          </div>
        </main>

        {/* Call to Action */}
        <section className="px-8 md:px-24 pb-48 max-w-7xl mx-auto w-full text-center">
          <FadeInSection delay={400}>
            <div className="w-full h-px bg-black/10 mb-24"></div>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Join the collective</h2>
            <a 
              href="#" 
              className="inline-block text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-black hover:text-black/50 transition-colors pb-1 border-b border-black/20 hover:border-black/50"
            >
              View Open Roles
            </a>
          </FadeInSection>
        </section>

      </div>
    </PageShell>
  );
}
