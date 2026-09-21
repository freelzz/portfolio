import { useState, type FormEvent } from "react";
import { Github, Mail, MessageCircle, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Reveal, Hand, Polaroid, Tape } from "@/components/ui";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // No backend: compose a mailto so it works anywhere the site is hosted.
  function submit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Hi from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const links = [
    { href: site.github, label: "GitHub", icon: Github, show: !!site.github },
    { href: `mailto:${site.email}`, label: "Email", icon: Mail, show: !!site.email },
    { href: site.whatsapp ? `https://wa.me/${site.whatsapp}` : "", label: "WhatsApp", icon: MessageCircle, show: !!site.whatsapp },
    { href: site.linkedin, label: "LinkedIn", icon: Linkedin, show: !!site.linkedin },
    { href: site.twitter, label: "Twitter / X", icon: Twitter, show: !!site.twitter },
  ].filter((l) => l.show);

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr_1fr]">
        <Reveal className="hidden justify-center md:flex">
          <Polaroid src="/shots/enkay.jpg" alt="Enkay Signature" caption="client work" rotate={-5} width="w-52" />
        </Reveal>

        <Reveal delay={0.1} className="text-center">
          <Hand className="block text-lg">say hi</Hand>
          <h1 className="pixel mt-2 inline-block border-2 border-ink bg-white px-5 py-2 text-5xl md:text-6xl">Contact</h1>
          <p className="mono-label mt-6 text-ink/70">
            Got a project, a new problem, or just want to say hi? Send it over. I read every message.
          </p>

          <motion.form
            onSubmit={submit}
            initial={{ rotate: -0.8 }}
            whileHover={{ rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="relative mt-8 bg-note-yellow p-5 text-left shadow-[3px_4px_0_rgba(0,0,0,0.15)]"
          >
            <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-[2deg]" />
            <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Field label="Email (optional)" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            <label className="mt-4 block">
              <span className="mono-label text-ink/60">Message</span>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="hand mt-1 w-full resize-none border-b-2 border-ink/40 bg-transparent text-xl leading-snug outline-none focus:border-ink"
                placeholder="What are you building?"
              />
            </label>
            <button type="submit" className="btn-ink mt-6">
              <span className="flex h-6 w-6 items-center justify-center bg-blue">→</span>
              Send it
            </button>
          </motion.form>

          <div className="mt-8">
            <Hand className="block text-lg">or find me on</Hand>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {links.map(({ href, label, icon: Icon }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" whileHover={{ y: -3, rotate: -1 }} className="tab frame bg-white">
                  <Icon className="h-3.5 w-3.5" /> {label} <ArrowUpRight className="h-3 w-3 opacity-50" />
                </motion.a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="hidden justify-center md:flex">
          <Polaroid src="/shots/taskmate.jpg" alt="Taskmate" caption="taskmate" rotate={5} width="w-52" />
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <label className="mt-4 block first:mt-0">
      <span className="mono-label text-ink/60">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="hand mt-1 w-full border-b-2 border-ink/40 bg-transparent text-xl outline-none focus:border-ink"
      />
    </label>
  );
}
