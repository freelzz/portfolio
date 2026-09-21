import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { featured, projects } from "@/data/projects";
import { Reveal, Note, Hand, Polaroid, PixelHeading, Sticker } from "@/components/ui";
import { ProjectPanel } from "@/components/ProjectPanel";

export function Home() {
  return (
    <>
      <Hero />
      <WhatsUp />
      <Featured />
      <Tools />
      <LetsTalk />
    </>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 text-center md:px-6 md:pt-24">
      {/* floating stickers */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-4 top-40 hidden md:block lg:left-16"
      >
        <Sticker emoji="🧑‍💻" color="bg-white ring-2 ring-orange" className="h-12 w-12 text-2xl" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute right-4 top-48 hidden md:block lg:right-16"
      >
        <Sticker emoji="📱" color="bg-white ring-2 ring-orange" className="h-12 w-12 text-2xl" />
      </motion.div>

      <div className="relative mx-auto inline-block">
        <Hand className="block text-lg">my name is</Hand>
        <div className="mx-auto mt-1 h-px w-10 bg-ink/40" />

        <div className="relative mt-3 inline-block">
          <Note color="mint" rotate={-4} className="absolute -left-28 top-2 hidden md:inline-flex">
            Made things
          </Note>
          <Note color="yellow" rotate={3} className="absolute -right-32 top-2 hidden md:inline-flex">
            Sweat the details
          </Note>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pixel relative border-2 border-orange px-6 py-3 text-6xl md:text-8xl"
          >
            {site.name}
            <span className="absolute -bottom-1.5 -left-1.5 h-2.5 w-2.5 bg-orange" />
            <span className="absolute -right-1.5 -top-1.5 h-2.5 w-2.5 bg-orange" />
          </motion.h1>

          <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
            {site.role.split(" · ").map((r, i) => (
              <Note key={r} color={i ? "pink" : "peach"} rotate={i ? 2 : -2}>{r}</Note>
            ))}
            <span className="mono-label hidden items-center gap-1.5 text-ink/70 sm:inline-flex">
              <span className="h-1.5 w-1.5 rounded-full bg-blue" /> {site.availability}
            </span>
            <Note color="mint" rotate={2}>{site.location}</Note>
          </div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-auto mt-10 max-w-xl text-3xl font-bold leading-tight tracking-tight md:text-4xl"
      >
        {site.tagline.replace(/\.$/, "")} <span className="inline-block align-middle">🟢</span>
        <span className="ml-1">🌸</span>
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
        <Link to="/contact" className="btn-ink">
          <span className="flex h-6 w-6 items-center justify-center bg-blue">
            <MessageSquare className="h-3 w-3" />
          </span>
          Contact me
        </Link>
      </motion.div>

      {/* curved divider */}
      <svg aria-hidden className="mt-16 w-full text-ink/20" viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path d="M0 30 Q 600 -10 1200 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </section>
  );
}

/* ================= WHAT'S UP ================= */
function WhatsUp() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-24 md:px-6">
      <Hand className="absolute left-6 -top-2 text-lg">about me!</Hand>

      <div className="grid items-center gap-10 md:grid-cols-[1fr_2fr_1fr]">
        <Reveal className="flex justify-center md:justify-start">
          <Polaroid src="/shots/tida.jpg" alt="Tida app" caption="shipping tida ✨" rotate={-5} width="w-48 md:w-52" />
        </Reveal>

        <Reveal delay={0.1} className="text-center">
          <span className="frame inline-block bg-white px-4 py-1 text-lg font-semibold">what's up</span>
          <p className="hand mx-auto mt-6 max-w-md text-2xl leading-snug md:text-[1.7rem]">{site.intro}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {site.skills.map((s) => (
              <span key={s.label} className="flex items-center gap-2">
                <span className={`chip ${s.color}`}>{s.label}</span>
                <span className="text-lg">{s.emoji}</span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="flex justify-center md:justify-end">
          <Polaroid src="/shots/enkay.jpg" alt="Enkay Signature site" caption="for a client in Warri" rotate={4} width="w-48 md:w-52" />
        </Reveal>
      </div>
    </section>
  );
}

/* ================= FEATURED ================= */
function Featured() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 md:px-6">
      <Reveal className="mb-14">
        <PixelHeading note="explore my work">Featured works</PixelHeading>
      </Reveal>

      <div className="space-y-14">
        {featured.map((p, i) => (
          <ProjectPanel key={p.slug} project={p} index={i} />
        ))}
      </div>

      <Reveal className="mt-12 text-center">
        <Link to="/work" className="btn-ink">
          All {projects.length} projects <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Reveal>
    </section>
  );
}

/* ================= TOOLS ================= */
const noteCycle = ["yellow", "mint", "pink", "blue", "peach"] as const;

function Tools() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 text-center md:px-6">
      <Reveal>
        <Hand className="block text-lg">tools I reach for</Hand>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {site.tools.map((t, i) => (
            <Note key={t} color={noteCycle[i % noteCycle.length]} rotate={((i * 7) % 5) - 2}>
              {t}
            </Note>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ================= LET'S TALK ================= */
function LetsTalk() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-28 text-center md:px-6">
      <Reveal>
        <motion.div
          animate={{ rotate: [0, -6, 6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow text-5xl shadow-[3px_3px_0_#121212]"
        >
          🙂
        </motion.div>
        <h2 className="pixel mt-6 text-5xl md:text-6xl">Let's talk</h2>
        <p className="hand mx-auto mt-4 max-w-md text-2xl leading-snug">
          Got a project, a local business, or just want to say hi? Send it over. I read every message.
        </p>
        <Link to="/contact" className="btn-ink mt-8">
          <span className="flex h-6 w-6 items-center justify-center bg-pink">✉</span>
          Get in touch
        </Link>
      </Reveal>
    </section>
  );
}
