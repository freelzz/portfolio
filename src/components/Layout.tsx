import { NavLink, Outlet, Link, useLocation } from "react-router-dom";
import { Home, User, LayoutGrid, Sparkles, Heart, Github, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

const tabs = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: User },
  { to: "/work", label: "Case Study", icon: LayoutGrid },
  { to: "/playground", label: "Playground", icon: Sparkles },
];

export function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:px-6">
          <div className="flex items-center gap-1">
            <Link to="/" className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-pink text-xs font-bold text-white" aria-label="Home">
              ✦
            </Link>
            <nav className="hidden items-center gap-1 md:flex">
              {tabs.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
                  <Icon className="h-3 w-3" strokeWidth={2.5} />
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1.5 sm:flex">
              <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow text-ink transition hover:scale-110">
                <Github className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
              <a href={`mailto:${site.email}`} aria-label="Email" className="flex h-6 w-6 items-center justify-center rounded-full bg-pink text-white transition hover:scale-110">
                <Mail className="h-3.5 w-3.5" strokeWidth={2.5} />
              </a>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green text-white text-[10px]">●</span>
            </div>
            <NavLink to="/contact" className={({ isActive }) => `tab frame ${isActive ? "active" : "bg-white"}`}>
              <Heart className="h-3 w-3" strokeWidth={2.5} />
              Contact
            </NavLink>
            <button className="tab frame md:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              {open ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-ink/10 px-4 py-3 md:hidden">
            {tabs.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} end={to === "/"} className={({ isActive }) => `tab ${isActive ? "active" : ""}`}>
                <Icon className="h-3 w-3" strokeWidth={2.5} />
                {label}
              </NavLink>
            ))}
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
        <p className="mono-label text-ink/60">
          © {new Date().getFullYear()} {site.name} · Built with React, Tailwind & too much coffee
        </p>
        <div className="flex items-center gap-4">
          <a href={site.github} target="_blank" rel="noreferrer" className="mono-label hover:text-blue">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="mono-label hover:text-blue">
            Email
          </a>
          <Link to="/contact" className="mono-label hover:text-blue">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
