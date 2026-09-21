import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, Github } from "lucide-react";
import { projects, bySlug } from "@/data/projects";
import { Reveal, Note, Hand, PixelHeading, Tape } from "@/components/ui";

/* ================= LIST ================= */
export function Work() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <PixelHeading note="explore my work">Featured works</PixelHeading>
      </Reveal>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.1} className="group">
            <Link to={`/work/${p.slug}`} className="block">
              <div className="relative">
                <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-3deg] z-10" />
                <div className="frame overflow-hidden bg-white shadow-[5px_5px_0_rgba(0,0,0,0.2)] transition group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
                  <img src={p.image} alt={`${p.title} screenshot`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mono-label text-ink/50">● {p.date}</p>
                  <h3 className="mt-1 text-2xl font-extrabold tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{p.tagline}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/40 transition group-hover:text-blue" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <Note key={t} color={j % 2 ? "mint" : "yellow"}>
                    {t}
                  </Note>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ================= CASE STUDY ================= */
export function CaseStudy() {
  const { slug = "" } = useParams();
  const p = bySlug(slug);

  if (!p) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="pixel text-4xl">Not found</h1>
        <Link to="/work" className="btn-ink mt-8">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to work
        </Link>
      </section>
    );
  }

  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Link to="/work" className="mono-label inline-flex items-center gap-1 text-ink/60 hover:text-blue">
        <ArrowLeft className="h-3 w-3" /> All projects
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <p className="mono-label text-ink/50">● {p.date}</p>
          <h1 className="pixel mt-4 text-5xl md:text-7xl">{p.title}</h1>
          <p className="mt-5 max-w-lg text-lg text-ink/80">{p.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {p.tags.map((t, j) => (
              <Note key={t} color={j % 2 ? "mint" : "yellow"}>
                {t}
              </Note>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="btn-ink">
                Live site <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <a href={p.repo} target="_blank" rel="noreferrer" className="tab frame bg-white">
              <Github className="h-3.5 w-3.5" /> Source
            </a>
          </div>
        </Reveal>

        {/* meta sticky notes */}
        <Reveal delay={0.15} className="grid grid-cols-2 content-start gap-3">
          <Meta label="Role" value={p.role} color="bg-note-pink" rotate={-1.5} />
          <Meta label="Timeline" value={p.timeline} color="bg-note-yellow" rotate={1.5} />
          <Meta label="Stack" value={p.stack.join(" · ")} color="bg-note-blue" rotate={1} className="col-span-2" />
        </Reveal>
      </div>

      <Reveal className="relative mt-14">
        <Tape className="-top-3 left-8 rotate-[-5deg] z-10" />
        <Tape className="-top-3 right-8 rotate-[4deg] z-10" />
        <div className="frame overflow-hidden bg-white shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
          <img src={p.image} alt={`${p.title} screenshot`} className="w-full object-cover" />
        </div>
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-[1fr_1fr]">
        <Reveal>
          <Hand className="text-lg">the brief</Hand>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/85">{p.description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <Hand className="text-lg">what I did</Hand>
          <ul className="mt-3 space-y-3">
            {p.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/85">
                <span className="mt-1.5 h-2 w-2 shrink-0 bg-blue" />
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      {p.outcomes && (
        <Reveal className="mt-16">
          <Hand className="text-lg">the results</Hand>
          <div className="mt-4 flex flex-wrap gap-4">
            {p.outcomes.map((o, i) => (
              <div key={o.label} className={`${i % 2 ? "bg-note-mint" : "bg-note-blue"} px-6 py-4 shadow-[2px_3px_0_rgba(0,0,0,0.12)]`} style={{ transform: `rotate(${i % 2 ? 1 : -1}deg)` }}>
                <div className="pixel text-3xl">{o.value}</div>
                <div className="mono-label mt-1 text-ink/60">{o.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      <div className="mt-20 border-t-2 border-ink pt-8">
        <Link to={`/work/${next.slug}`} className="group flex items-center justify-between">
          <span className="mono-label text-ink/50">Next project</span>
          <span className="flex items-center gap-2 text-2xl font-extrabold tracking-tight">
            {next.title} <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </span>
        </Link>
      </div>
    </article>
  );
}

function Meta({ label, value, color, rotate, className = "" }: { label: string; value: string; color: string; rotate: number; className?: string }) {
  return (
    <div className={`${color} px-4 py-3 shadow-[2px_3px_0_rgba(0,0,0,0.12)] ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className="mono-label text-ink/60">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
