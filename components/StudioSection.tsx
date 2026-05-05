"use client";

import { StudioGridCard } from "./studio/StudioGridCard";
import { FadeInSection } from "./FadeInSection";

import studioItems from "@/data/studio-items.json";
import Link from "next/link";

const services = studioItems.slice(0, 4);

export function StudioSection() {
  return (
    <section id="studio" className="py-24 md:py-32 px-8 md:px-16 lg:px-24 max-w-[1500px] mx-auto">
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
          <Link key={idx} href="/studio" className={service.colSpan}>
            <StudioGridCard
              {...service}
              colSpan="w-full"
              delay={idx * 100}
              href="/studio"
            />
          </Link>
        ))}
      </div>

    </section>
  );
}


