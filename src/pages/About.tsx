import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Reveal, Note, Hand, Polaroid, PixelHeading, Tape } from "@/components/ui";

export function About() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <PixelHeading note="the long version">About</PixelHeading>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_1.6fr_1fr]">
        {/* left: colour tabs */}
        <Reveal delay={0.1} className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {site.role.split(" · ").map((r, i) => (
              <Note key={r} color={i ? "pink" : "peach"} rotate={i ? 1.5 : -1.5}>{r}</Note>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {site.skills.map((s) => (
              <motion.span key={s.label} whileHover={{ x: 6, rotate: -1 }} className={`chip w-fit ${s.color} text-sm`}>
                {s.label}
              </motion.span>
            ))}
          </div>
          <div className="pt-6">
            {site.stats.map((s) => (
              <div key={s.label} className="mb-3">
                <div className="pixel text-3xl">{s.value}</div>
                <div className="mono-label text-ink/60">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* middle: story */}
        <Reveal delay={0.2}>
          <Hand className="text-lg">bio</Hand>
          <div className="mt-3 space-y-5 text-[15px] leading-relaxed text-ink/85">
            {site.about.map((p, i) => (
              <p key={i} className={i === 0 ? "hand text-2xl leading-snug text-ink" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="relative mt-10 frame bg-white p-5">
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-3deg]" />
            <p className="mono-label text-ink/60">How I work</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>→ One codebase for web and Android wherever it makes sense.</li>
              <li>→ Security and edge cases first, then polish — not the other way round.</li>
              <li>→ Small, frequent deploys. Everything on Vercel, everything in Git.</li>
              <li>→ I talk to the people who'll actually use the thing.</li>
            </ul>
          </div>
        </Reveal>

        {/* right: polaroids */}
        <Reveal delay={0.3} className="flex flex-col items-center gap-10 md:items-end">
          <Polaroid src="/shots/tida.jpg" alt="Tida" caption="tida, live in 2 cities" rotate={4} width="w-52" />
          <Polaroid src="/shots/todo.jpg" alt="ToDo" caption="todo, it talks back" rotate={-4} width="w-52" />
        </Reveal>
      </div>
    </section>
  );
}
