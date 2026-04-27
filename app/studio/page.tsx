"use client";

import { PageShell } from "@/components/SiteChrome";
import { StudioGridCard } from "@/components/studio/StudioGridCard";
import { FadeInSection } from "@/components/FadeInSection";

import studioItems from "@/data/studio-items.json";
import Link from "next/link";

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

        {/* Studio Grid - Core Services Only */}
        <main className="px-8 md:px-24 pb-32 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studioItems.slice(0, 4).map((item, idx) => (
              <Link key={idx} href={`/studio/${item.slug}`} className={item.colSpan}>
                <StudioGridCard
                  num={item.num}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                  colSpan="w-full"
                  delay={idx * 100}
                />
              </Link>
            ))}
          </div>
        </main>

        {/* Philosophy & Environment Section */}
        <section className="px-8 md:px-24 py-32 bg-ink text-paper w-full">
          <div className="max-w-7xl mx-auto">
            <FadeInSection>
              <h2 className="text-xs tracking-[0.2em] font-bold text-paper/40 mb-20 uppercase">Philosophy & Space</h2>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              {studioItems.slice(4, 6).map((item, idx) => (
                <div key={idx} className="group">
                  <FadeInSection delay={idx * 200}>
                    <div className="aspect-[16/10] overflow-hidden mb-12 rounded-sm bg-paper/5">
                      <img 
                        src={item.img} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                        alt={item.title}
                      />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-paper/40 mb-6 block">{item.num} //</span>
                    <h3 className="text-4xl md:text-5xl font-serif mb-8 tracking-tight">{item.title}</h3>
                    <p className="text-xl font-serif leading-relaxed text-paper/60 max-w-lg">
                      {item.content}
                    </p>
                  </FadeInSection>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Call to Action */}
        <section className="px-8 md:px-24 py-48 max-w-7xl mx-auto w-full text-center">

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

