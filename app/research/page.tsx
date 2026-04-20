"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/SiteChrome";

const papers = [
  { title: "Compositional reasoning in foundation models", year: "2024" },
  { title: "Predictive coherence under distribution shift", year: "2024" },
  { title: "Latent memory and the structure of recall", year: "2023" },
  { title: "Multi-agent emergence in continuous environments", year: "2023" },
  { title: "On the geometry of internal representations", year: "2022" },
  { title: "Efficient inference at the edge of capability", year: "2022" },
];

const team = [
  { name: "Dr. A. Halberg", role: "Chief Scientist" },
  { name: "M. Okafor", role: "Research Lead" },
  { name: "S. Whittaker", role: "Engineering" },
  { name: "K. Reyes", role: "Systems" },
  { name: "J. Lindqvist", role: "Theory" },
];

const press = ["The Atlantic", "Wired", "The Times", "Bloomberg", "Le Monde"];

export default function Home() {
  return (
    <PageShell>


      {/* Hero */}
      <section className="mx-auto max-w-6xl px-8 pt-24 pb-16 text-center relative">
        <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.04em]">
          A new kind of
          <br />
          intelligence.
        </h1>

        <div className="relative mt-10 flex items-center justify-center">
          <button
            aria-label="Previous"
            className="absolute left-0 md:left-8 text-ink/40 hover:text-ink transition z-10"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <Image
            src="/neural-sculpture.png"
            alt="Abstract neural network sculpture representing Zynaptrix research"
            width={680}
            height={680}
            priority
            className="w-[min(680px,90%)] h-auto rounded-lg"
          />
          <button
            aria-label="Next"
            className="absolute right-0 md:right-8 text-ink/40 hover:text-ink transition z-10"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Manifesto + Papers list */}
      <section
        id="papers"
        className="mx-auto max-w-6xl px-8 py-20 grid md:grid-cols-2 gap-16"
      >
        <div>
          <p className="text-xs tracking-[0.2em] text-subtle uppercase mb-6">
            Manifesto
          </p>
          <p className="font-serif text-xl leading-relaxed text-ink/85">
            Zynaptrix is a research company building the foundations of
            general-purpose intelligence. We work at the intersection of theory
            and practice — publishing openly, reasoning carefully, and shipping
            models that earn trust through demonstrated capability rather than
            spectacle.
          </p>
          <p className="mt-6 text-ink/70 leading-relaxed">
            We believe progress in AI demands the same patience and rigor as any
            other scientific discipline. Our work spans architecture, alignment,
            evaluation, and the systems that make all three reproducible.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-subtle uppercase mb-6">
            Recent Papers
          </p>
          <ul className="divide-y divide-rule border-t border-rule">
            {papers.map((p) => (
              <li key={p.title}>
                <button
                  type="button"
                  className="flex items-center justify-between gap-6 py-4 group"
                >
                  <span className="text-ink group-hover:underline underline-offset-4 decoration-1">
                    {p.title}
                  </span>
                  <span className="text-subtle text-sm tabular-nums">
                    {p.year}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="mx-auto max-w-6xl px-8 py-16">
        <h2 className="font-serif text-4xl text-center mb-12">Research team</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-rule border border-rule">
          {team.map((m) => (
            <div key={m.name} className="bg-paper aspect-4/5 flex flex-col">
              <div className="flex-1 bg-linear-to-b from-[hsl(var(--ink)/0.1)] to-[hsl(var(--ink)/0.3)]" />
              <div className="p-4">
                <p className="font-serif text-lg leading-tight">{m.name}</p>
                <p className="text-xs text-subtle mt-1">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Press */}
      <section id="press" className="mx-auto max-w-6xl px-8 py-20 text-center">
        <h2 className="font-serif text-4xl mb-12">Press</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {press.map((p) => (
            <span key={p} className="font-serif text-xl text-ink/60">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-8 pt-8 pb-24 flex justify-center"
      >
        <a
          href="mailto:hello@zynaptrix.ai"
          className="inline-flex items-center gap-3 rounded-full bg-ink text-paper px-8 py-4 text-base font-medium hover:bg-ink/90 transition"
        >
          Contact
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </section>

    </PageShell>
  );
}
