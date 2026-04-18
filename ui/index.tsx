import { createFileRoute } from "@tanstack/react-router";
import helmet from "@/assets/helmet.png";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZYNAPTRIX — Studio / Lab" },
      {
        name: "description",
        content:
          "ZYNAPTRIX — experimental studio and lab. Established 2024 — Cambridge / NY.",
      },
      { property: "og:title", content: "ZYNAPTRIX — Studio / Lab" },
      {
        property: "og:description",
        content: "Experimental studio and lab. Established 2024 — Cambridge / NY.",
      },
    ],
  }),
  component: Hero,
});

function Hero() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-hero-radial grain smoke">
      <SiteHeader />

      {/* Hero composition */}
      <section className="relative z-20 mx-auto flex flex-1 w-full max-w-[1500px] items-center justify-center px-6">
        <div className="relative flex w-full items-center justify-center">
          <h1
            aria-label="ZYNAPTRIX"
            className="font-brush pointer-events-none flex w-full select-none items-center justify-center text-foreground"
            style={{ fontSize: "clamp(2.5rem, 10vw, 10rem)", lineHeight: 0.9 }}
          >
            <span className="animate-drip-in relative z-10 -mr-[2vw] inline-block drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              ZYNA
            </span>

            <span className="relative z-20 inline-block animate-helmet-enter">
              <img
                src={helmet}
                alt="Astronaut helmet visor split between green matrix code and golden cracked neural pattern"
                width={1024}
                height={1024}
                className="animate-helmet-float h-auto w-[24vw] max-w-[380px] min-w-[180px] drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
            </span>

            <span className="animate-drip-in-delay relative z-10 -ml-[2vw] inline-block drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]">
              TRIX
            </span>
          </h1>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
