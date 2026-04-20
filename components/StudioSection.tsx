"use client";

import { ArrowRight } from "lucide-react";
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
          <div key={idx} className={`${service.colSpan}`}>
            <FadeInSection delay={idx * 100}>
              <div className="group relative w-full h-[400px] md:h-[450px] overflow-hidden bg-[#0a0b10] cursor-pointer rounded-sm">
                {/* Image Background */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 group-hover:grayscale-0 group-hover:mix-blend-normal"
                />

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-70"></div>

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-[#fcfcfc]">
                  <div className="transform transition-all duration-500 translate-y-12 group-hover:translate-y-0">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs tracking-[0.2em] text-gray-400 font-mono transition-colors duration-500 group-hover:text-[#4ade80]">
                        {service.num} //
                      </span>
                      <ArrowRight
                        size={20}
                        className="opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0"
                      />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight">{service.title}</h3>

                    <div className="overflow-hidden">
                      <p className="text-gray-300 font-light leading-relaxed text-sm opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        ))}
      </div>
    </section>
  );
}
