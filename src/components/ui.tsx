import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- Reveal on scroll ---------- */
/**
 * Fades content in when it scrolls into view. Content is never left hidden:
 * a manual viewport check (on scroll and a short timer) shows it even when
 * IntersectionObserver doesn't fire (some in-app browsers / hidden windows).
 */
export function useRevealed(ref: React.RefObject<HTMLElement | null>) {
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    if (inView || forced) return;
    const check = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (vh === 0 || (r.top < vh && r.bottom > 0)) setForced(true);
    };
    const t = window.setTimeout(check, 1500);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [inView, forced, ref]);

  return inView || forced;
}

const revealTags = { div: motion.div, li: motion.li, span: motion.span } as const;

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  ...rest
}: { children: ReactNode; delay?: number; as?: keyof typeof revealTags } & HTMLMotionProps<"div">) {
  const ref = useRef<HTMLDivElement>(null);
  const shown = useRevealed(ref);
  const Tag = revealTags[as] as typeof motion.div;
  return (
    <Tag
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
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
  delay,
}: {
  children: ReactNode;
  color?: keyof typeof noteColors;
  rotate?: number;
  className?: string;
  /** When set, the note drops in on mount after this many seconds */
  delay?: number;
}) {
  return (
    <motion.span
      className={`note ${noteColors[color]} ${className}`}
      initial={delay === undefined ? { rotate } : { rotate: rotate - 6, opacity: 0, y: -10 }}
      animate={{ rotate, opacity: 1, y: 0 }}
      whileHover={{ rotate: rotate + (rotate >= 0 ? -3 : 3), scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 16, delay }}
    >
      {children}
    </motion.span>
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
