import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Tape } from "./ui";

const panelStyles: Record<Project["panel"], { bg: string; text: string; sub: string; tab: string }> = {
  dark: { bg: "bg-ink", text: "text-white", sub: "text-white/60", tab: "bg-blue text-white" },
  yellow: { bg: "bg-yellow", text: "text-ink", sub: "text-ink/70", tab: "bg-ink text-white" },
  blue: { bg: "bg-blue", text: "text-white", sub: "text-white/70", tab: "bg-yellow text-ink" },
  pink: { bg: "bg-pink", text: "text-white", sub: "text-white/70", tab: "bg-ink text-white" },
  paper: { bg: "bg-white", text: "text-ink", sub: "text-ink/60", tab: "bg-ink text-white" },
};

export function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const s = panelStyles[project.panel];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${s.bg} ${s.text} ${project.panel === "paper" ? "frame" : ""}`}
    >
      {/* folder tab */}
      <span
        className={`absolute -top-7 left-0 inline-flex h-7 items-center gap-2 px-4 ${s.tab} mono-label`}
        style={{ clipPath: "polygon(0 0, calc(100% - 14px) 0, 100% 100%, 0 100%)" }}
      >
        ✦ Project {num}
      </span>

      <div className="grid gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-10">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className={`mono-label ${s.sub}`}>● {project.date}</p>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">{project.title}</h3>
            <p className={`mt-3 max-w-sm text-sm ${s.sub}`}>{project.tagline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link to={`/work/${project.slug}`} className="mono-label inline-flex items-center gap-1 underline-offset-4 hover:underline">
              View project <ArrowUpRight className="h-3 w-3" />
            </Link>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className={`mono-label inline-flex items-center gap-1 ${s.sub} hover:underline`}>
                Live site <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <Tape className="-top-3 left-6 rotate-[-6deg] z-10" />
          <Tape className="-top-3 right-6 rotate-[5deg] z-10" />
          <motion.div whileHover={{ rotate: 0.5, scale: 1.01 }} className="frame overflow-hidden bg-white shadow-[6px_6px_0_rgba(0,0,0,0.25)]">
            <img src={project.image} alt={`${project.title} screenshot`} className="aspect-[16/10] w-full object-cover object-top" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
