"use client";

import { StudioGridCard } from "./studio/StudioGridCard";
import { FadeInSection } from "./FadeInSection";

const services = [
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
];

export function StudioSection() {
  return (
    <section id="studio" className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <FadeInSection>
        <div className="mb-20 md:w-2/3">
          <h2 className="text-xs tracking-[0.2em] font-bold text-gray-400 mb-6 uppercase">The Studio</h2>
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-ink">
            We engineer digital ecosystems. From elegant interfaces to robust backend infrastructures, we build software that drives real-world impact.
          </p>
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <StudioGridCard
            key={idx}
            {...service}
            delay={idx * 100}
          />
        ))}
      </div>
    </section>
  );
}
