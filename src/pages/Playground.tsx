import { motion } from "framer-motion";
import { Reveal, Note, Hand, Polaroid, PixelHeading, Tape } from "@/components/ui";

/**
 * Loose collage of side quests and things that don't fit a case study.
 * Add items to `items` — each renders as a polaroid or a sticky card.
 */
const items = [
  {
    kind: "photo",
    src: "/shots/fupre-map.jpg",
    alt: "FUPRE sampling station map",
    caption: "FUPRE sampling map — QGIS + Python",
    rotate: -3,
  },
  {
    kind: "card",
    color: "bg-note-yellow",
    title: "Android from one codebase",
    body: "Tida and ToDo both ship as APK/AAB via Capacitor. Same React, no rewrite.",
    rotate: 2,
  },
  {
    kind: "photo",
    src: "/shots/skysavvy.jpg",
    alt: "skysavvy weather",
    caption: "clouds that drift ☁️",
    rotate: 4,
  },
  {
    kind: "card",
    color: "bg-note-pink",
    title: "RLS audit, by hand",
    body: "Two real accounts, five escalation attempts, zero successes. The boring security work is the fun part.",
    rotate: -2,
  },
  {
    kind: "photo",
    src: "/shots/maison-nord.jpg",
    alt: "Maison Nord",
    caption: "glassmorphism, but tasteful",
    rotate: -2,
  },
  {
    kind: "card",
    color: "bg-note-mint",
    title: "Google Calendar sync",
    body: "A Supabase edge function that turns a task into a calendar event with reminders. One OAuth dance, done.",
    rotate: 3,
  },
  {
    kind: "photo",
    src: "/shots/trekker.jpg",
    alt: "Trekker",
    caption: "trail journal 🥾",
    rotate: 3,
  },
  {
    kind: "card",
    color: "bg-note-blue",
    title: "Hello, world",
    body: "This site: React, Tailwind 4, Framer Motion, ruled paper and a pixel font. Built in an afternoon.",
    rotate: -1,
  },
] as const;

export function Playground() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <Reveal className="text-center">
        <Hand className="block text-lg">side quests</Hand>
        <PixelHeading className="mt-2">Just for fun</PixelHeading>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Note color="mint" rotate={-2}>Maps</Note>
          <Note color="yellow" rotate={2}>Android</Note>
          <Note color="pink" rotate={-1}>Experiments</Note>
          <Note color="blue" rotate={1}>Motion</Note>
        </div>
      </Reveal>

      <div className="mt-16 columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-8 [&>*]:break-inside-avoid">
        {items.map((it, i) => (
          <Reveal key={i} delay={(i % 3) * 0.08} className="flex justify-center">
            {it.kind === "photo" ? (
              <Polaroid src={it.src} alt={it.alt} caption={it.caption} rotate={it.rotate} width="w-full max-w-xs" />
            ) : (
              <motion.div
                initial={{ rotate: it.rotate }}
                whileHover={{ rotate: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className={`relative w-full max-w-xs ${it.color} px-5 py-5 shadow-[2px_3px_0_rgba(0,0,0,0.12)]`}
              >
                <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[-2deg]" />
                <h3 className="text-lg font-extrabold tracking-tight">{it.title}</h3>
                <p className="hand mt-2 text-xl leading-snug text-ink/85">{it.body}</p>
              </motion.div>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
