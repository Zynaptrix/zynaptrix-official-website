"use client";

import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { Marquee } from "@/components/Marquee";
import { StudioSection } from "@/components/StudioSection";
import { 
  WorkSection, 
  ProcessSection, 
  LabSection, 
  TestimonialsSection, 
  CTASection 
} from "@/components/home";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper text-ink">
      <SiteHeader />

      {/* Hero composition */}
      <section className="relative z-20 mx-auto flex min-h-[80vh] w-full max-w-[1500px] items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="relative flex w-full items-center justify-center">
          <h1
            aria-label="ZYNAPTRIX"
            className="font-brush pointer-events-none flex w-full select-none items-center justify-center text-ink"
            style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)", lineHeight: 0.9 }}
          >
            <span className="animate-drip-in relative z-10 -mr-[2vw] inline-block drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
              ZYNA
            </span>

            <span className="relative z-20 inline-block animate-helmet-enter">
              <img
                src="/helmet.png"
                alt="Astronaut helmet visor split between green matrix code and golden cracked neural pattern"
                width={1024}
                height={1024}
                className="animate-helmet-float h-auto w-[24vw] max-w-[380px] min-w-[180px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
              />
            </span>

            <span className="animate-drip-in-delay relative z-10 -ml-[2vw] inline-block drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
              TRIX
            </span>
          </h1>
        </div>
      </section>

      <Marquee />
      <StudioSection />
      
      <WorkSection />
      <ProcessSection />
      <LabSection />
      <TestimonialsSection />
      <CTASection />

      <SiteFooter />
    </main>
  );
}
