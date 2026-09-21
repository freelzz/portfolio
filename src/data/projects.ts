export type Project = {
  slug: string;
  title: string;
  date: string;
  tagline: string;
  description: string;
  tags: string[];
  stack: string[];
  live: string;
  repo: string;
  image: string;
  /** Panel colour on the home page stack */
  panel: "dark" | "yellow" | "blue" | "pink" | "paper";
  featured?: boolean;
  role: string;
  timeline: string;
  highlights: string[];
  outcomes?: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "tida",
    title: "Tida",
    date: "Aug 2026",
    tagline: "The right person for the job, close to you, today.",
    description:
      "A local services marketplace for Nigeria. You type what you need in plain words — \"a haircut at home before a wedding on Sunday\" — and Tida shows plumbers, electricians, barbers and mechanics near you with reviews from real jobs, priced in Naira before anyone starts work.",
    tags: ["Marketplace", "Web + Android"],
    stack: ["React 19", "TanStack Start", "Supabase", "Capacitor", "Tailwind 4"],
    live: "https://tida-beta.vercel.app",
    repo: "https://github.com/freelzz/TiDa",
    image: "/shots/tida.jpg",
    panel: "dark",
    featured: true,
    role: "Design, frontend, backend, Android",
    timeline: "3 months",
    highlights: [
      "Full Supabase backend: auth, provider profiles, image uploads and in-app messaging.",
      "Row-level security hardened so roles and provider verification can't be self-granted from the client — verified by hand with two real accounts.",
      "Provider verification flow for admins, plus a request-to-quote loop that settles price before work starts.",
      "Packaged for Android with Capacitor; live in Lagos and Warri.",
    ],
    outcomes: [
      { value: "2", label: "cities live at launch" },
      { value: "0", label: "RLS escalation paths after audit" },
    ],
  },
  {
    slug: "enkay-signature",
    title: "Enkay Signature",
    date: "Sep 2026",
    tagline: "A luxury dress house in Warri, finally online.",
    description:
      "Official website for Enkay Signature — custom bridal, prom and evening gowns by designer Nkechi Agboma. Collections, a lookbook, a small shop and a booking flow for custom designs, with WhatsApp a tap away.",
    tags: ["Client site", "Fashion"],
    stack: ["React 19", "Vite", "Tailwind 4", "Framer Motion", "Supabase"],
    live: "https://enkay-signature.vercel.app",
    repo: "https://github.com/freelzz/EnkaySignature",
    image: "/shots/enkay.jpg",
    panel: "yellow",
    featured: true,
    role: "Design & development",
    timeline: "4 weeks",
    highlights: [
      "Editorial layout with reveal-on-scroll photography and a lightbox lookbook.",
      "Booking and enquiry forms backed by Supabase, with local fallbacks so the site works even without the backend.",
      "WhatsApp floating action for the way clients actually reach a tailor in Warri.",
    ],
  },
  {
    slug: "taskmate",
    title: "Taskmate",
    date: "Jun 2026",
    tagline: "Tasks that show up on your calendar by themselves.",
    description:
      "A task manager that syncs to Google Calendar. Sign in with Google, add a task with a time, and it appears in your calendar with reminders — no copy-pasting between apps. Also ships as an Android app.",
    tags: ["Productivity", "Web + Android"],
    stack: ["React", "Vite", "Supabase Edge Functions", "Google Calendar API", "Capacitor"],
    live: "https://todo-app-jade-alpha.vercel.app",
    repo: "https://github.com/freelzz/todo-app",
    image: "/shots/taskmate.jpg",
    panel: "blue",
    featured: true,
    role: "Frontend, backend integration, Android",
    timeline: "6 weeks",
    highlights: [
      "Google OAuth via Supabase and a `google-calendar` edge function that pushes tasks to events end to end.",
      "Replaced a hosted OAuth proxy with direct Supabase sign-in so the app works outside its original host.",
      "Android build with Capacitor.",
    ],
  },
  {
    slug: "maison-nord",
    title: "Maison Nord",
    date: "Sep 2026",
    tagline: "A furniture brand site that feels expensive.",
    description:
      "Luxury furniture and interior design concept — dark earthy palette, glassmorphism, oversized type and a shop with category filters. Seven pages, every section animated into view.",
    tags: ["Concept", "E-commerce"],
    stack: ["React 19", "TanStack Start", "Tailwind 4", "Framer Motion"],
    live: "https://maison-nord-vert.vercel.app",
    repo: "https://github.com/freelzz/maison-nord",
    image: "/shots/maison-nord.jpg",
    panel: "paper",
    role: "Design & development",
    timeline: "2 weeks",
    highlights: [
      "Glass search bar, horizontal category scroller and floating product cards.",
      "Shop page with category, search and sort filters.",
      "Server-rendered with TanStack Start for fast first paint.",
    ],
  },
  {
    slug: "trekker",
    title: "Trekker",
    date: "Sep 2026",
    tagline: "An editorial travel site for people who hike.",
    description:
      "Hiking and travel brand concept — cinematic hero, curated destinations, a trail-journal blog, gear shop, travel insurance and jobs pages. Built to feel like a real magazine, not a template.",
    tags: ["Concept", "Editorial"],
    stack: ["React 19", "TanStack Start", "Tailwind 4", "Framer Motion"],
    live: "https://trekker-travel.vercel.app",
    repo: "https://github.com/freelzz/trekker-travel",
    image: "/shots/trekker.jpg",
    panel: "paper",
    role: "Design & development",
    timeline: "2 weeks",
    highlights: [
      "Seven pages with scroll-triggered motion throughout.",
      "Blog and destination cards driven by a single data file.",
    ],
  },
  {
    slug: "skysavvy",
    title: "skysavvy",
    date: "Sep 2026",
    tagline: "Precise weather, precisely for you.",
    description:
      "Weather site concept with a parallax sky hero, drifting cloud layers and a 14-day forecast page with air quality, UV and an hourly timeline.",
    tags: ["Concept", "Weather"],
    stack: ["React 19", "TanStack Start", "Tailwind 4", "Framer Motion"],
    live: "https://skysavvy-weather.vercel.app",
    repo: "https://github.com/freelzz/skysavvy-weather",
    image: "/shots/skysavvy.jpg",
    panel: "paper",
    role: "Design & development",
    timeline: "1 week",
    highlights: [
      "Scroll-linked parallax and scale on the hero using Framer Motion's useScroll.",
      "Forecast, locations, services and about pages.",
    ],
  },
];

export const featured = projects.filter((p) => p.featured);
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);
