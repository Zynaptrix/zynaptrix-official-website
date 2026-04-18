import { PageShell } from "@/components/SiteChrome";
import { ArrowRight } from "lucide-react";

export default function JournalPage() {
  const posts = [
    { title: "Reflections on continuous spatial computing", date: "April 18, 2024", category: "Thoughts" },
    { title: "The illusion of continuous memory in transformer contexts", date: "March 02, 2024", category: "Research Notes" },
    { title: "Architectural constraints of our physical simulation engine", date: "January 14, 2024", category: "Engineering" },
    { title: "On scaling laws and diminishing returns", date: "December 08, 2023", category: "Theory" },
  ];

  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 md:px-12 pt-24 md:pt-32 pb-20 relative animate-soft-fade-up">
        <div className="border-b border-rule pb-12 mb-20 md:mb-32">
          <h1 className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[1] tracking-[-0.03em]">
            Journal
          </h1>
        </div>

        <div className="max-w-4xl space-y-20 md:space-y-32">
           {posts.map((post, i) => (
             <article key={i} className="group cursor-pointer">
                <div className="flex items-center gap-4 text-xs font-bold text-subtle tracking-[0.15em] mb-6 md:mb-8 uppercase font-sans">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-rule" />
                  <span>{post.category}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] mb-8 group-hover:text-ink/60 transition-colors">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 text-sm font-bold tracking-[0.1em] text-ink/80">
                  READ ARTICLE <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
             </article>
           ))}
        </div>
        
        <div className="mt-32 md:mt-48 pt-12 border-t border-rule text-center">
           <button className="text-[13px] font-bold tracking-[0.15em] text-subtle hover:text-ink transition-colors">
             LOAD OLDER ENTRIES
           </button>
        </div>
      </section>
    </PageShell>
  );
}
