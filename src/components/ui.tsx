import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: { children: ReactNode; delay?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Masking tape ---------- */
export function Tape({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`tape ${className}`} />;
}

/* ---------- Polaroid photo ---------- */
export function Polaroid({
  src,
  alt,
  caption,
  rotate = -3,
  className = "",
  width = "w-56",
}: {
  src: string;
  alt: string;
  caption?: string;
  rotate?: number;
  className?: string;
  width?: string;
}) {
  return (
    <motion.figure
      initial={{ rotate, y: 0 }}
      whileHover={{ rotate: 0, y: -6, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={`polaroid relative ${width} ${className}`}
    >
      <Tape className="-top-2 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover object-top" loading="lazy" />
      {caption && <figcaption className="hand absolute bottom-2 left-0 right-0 text-center text-base text-ink/80">{caption}</figcaption>}
    </motion.figure>
  );
}

/* ---------- Sticky note tag ---------- */
const noteColors = {
  yellow: "bg-note-yellow",
  mint: "bg-note-mint",
  pink: "bg-note-pink",
  blue: "bg-note-blue",
  peach: "bg-note-peach",
} as const;

export function Note({
  children,
  color = "yellow",
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  color?: keyof typeof noteColors;
  rotate?: number;
  className?: string;
}) {
  return (
    <span className={`note ${noteColors[color]} ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {children}
    </span>
  );
}

/* ---------- Handwritten annotation with arrow ---------- */
export function Hand({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`hand text-xl leading-none text-ink/85 ${className}`}>{children}</span>;
}

/* ---------- Section heading in pixel font ---------- */
export function PixelHeading({
  children,
  note,
  className = "",
  size = "text-5xl md:text-7xl",
}: {
  children: ReactNode;
  note?: string;
  className?: string;
  size?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {note && <Hand className="absolute -top-6 left-1 text-lg">{note}</Hand>}
      <h2 className={`pixel ${size}`}>{children}</h2>
    </div>
  );
}

/* ---------- Circular emoji sticker ---------- */
export function Sticker({ emoji, color, className = "" }: { emoji: string; color: string; className?: string }) {
  return (
    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm ${color} ${className}`}>{emoji}</span>
  );
}
