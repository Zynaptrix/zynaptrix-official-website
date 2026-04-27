import { Metadata } from "next";
import { notFound } from "next/navigation";
import studioItems from "@/data/studio-items.json";
import { PageShell } from "@/components/SiteChrome";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeInSection } from "@/components/FadeInSection";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = studioItems.find((item) => item.slug === slug);
  
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} | Studio`,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = studioItems.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <div className="bg-paper text-ink min-h-screen font-sans selection:bg-ink selection:text-paper">
        {/* Navigation Header */}
        <header className="max-w-7xl mx-auto px-8 pt-32 pb-16 flex justify-between items-center">
          <Link
            href="/studio"
            className="group flex items-center gap-4 text-ink/60 hover:text-ink transition-all"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform duration-500" />
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase">Back to Studio</span>
          </Link>
          <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-ink/20">
            Project // {project.num}
          </div>
        </header>

        <article className="max-w-7xl mx-auto px-8 pb-64">
          {/* Title Section */}
          <div className="mb-48 max-w-5xl">
            <FadeInSection>
              <h1 className="text-7xl md:text-8xl lg:text-[11rem] font-serif tracking-tighter leading-[0.8] text-ink mb-16">
                {project.title}
              </h1>
              <p className="text-3xl md:text-5xl font-serif italic text-ink/40 leading-tight">
                {project.subtitle}
              </p>
            </FadeInSection>
          </div>

          {/* Featured Image Artifact */}
          <FadeInSection delay={200}>
            <div className="relative mb-64 group">
              <div className="aspect-[16/9] overflow-hidden bg-ink/5 rounded-sm relative shadow-2xl">
                <img
                  src={project.img}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                  alt={project.title}
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-ink/[0.03] -z-10 rounded-full blur-3xl group-hover:bg-ink/[0.08] transition-all duration-1000"></div>
            </div>
          </FadeInSection>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4 sticky top-48">
              <FadeInSection delay={300}>
                <h3 className="text-[10px] font-mono tracking-[0.5em] uppercase text-ink/20 mb-12">The Stack</h3>
                <ul className="space-y-6">
                  {project.tags?.map((tag) => (
                    <li key={tag} className="text-xl font-serif text-ink/60 hover:text-ink transition-colors cursor-default">
                      {tag}
                    </li>
                  ))}
                </ul>
              </FadeInSection>
            </div>

            <div className="lg:col-span-8">
               <FadeInSection delay={400}>
                 <div className="text-3xl md:text-4xl font-serif text-ink leading-relaxed space-y-12">
                   {project.content.split('. ').map((sentence, i) => (
                     <p key={i} className="mb-8">
                       {sentence}{sentence.endsWith('.') ? '' : '.'}
                     </p>
                   ))}
                 </div>
               </FadeInSection>
            </div>
          </div>

          {/* Next Project Link */}
          <div className="mt-80 pt-32 border-t border-ink/10 flex flex-col items-center text-center">
            <FadeInSection>
              <h4 className="text-[10px] font-mono tracking-[0.4em] uppercase text-ink/30 mb-12">Next Project</h4>
              <Link 
                href="/studio" 
                className="group text-5xl md:text-8xl font-serif text-ink hover:italic transition-all decoration-ink/10 underline underline-offset-[24px] hover:decoration-ink/40"
              >
                Explore More
                <ArrowRight size={64} className="inline ml-8 transform group-hover:translate-x-6 transition-transform duration-500" />
              </Link>
            </FadeInSection>
          </div>
        </article>

        {/* Modern Background Texture */}
        <div className="fixed inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/felt.png')] opacity-[0.03] -z-10"></div>
      </div>
    </PageShell>
  );
}

export async function generateStaticParams() {
  return studioItems.map((item) => ({
    slug: item.slug,
  }));
}
