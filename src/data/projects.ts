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
    slug: "todo",
    title: "ToDo",
    date: "Sep 2026",
    tagline: "The reminder app you talk to.",
    description:
      "Say what needs doing \u2014 by text or voice \u2014 and ToDo sets the task, the time and the reminder, then makes sure it reaches you even with the app closed. Hands-free voice mode listens, answers out loud, and keeps the conversation going. Ships as a web app and an Android app from one codebase.",
    tags: ["AI + Voice", "Web + Android"],
    stack: ["React", "Vite", "Supabase", "Gemini", "Capacitor", "Paystack"],
    live: "https://todo-app-jade-alpha.vercel.app",
    repo: "https://github.com/freelzz/todo-app",
    image: "/shots/todo.jpg",
    panel: "blue",
    featured: true,
    role: "Design, frontend, backend, Android",
    timeline: "Ongoing",
    highlights: [
      "AI chat with real tool-calling \u2014 a Gemini-backed edge function that creates, lists and deletes tasks against the live database, with a duplicate-task guard.",
      "Hands-free voice loop: on-device speech recognition, auto-send when you stop talking, a spoken reply through the phone's TTS engine, then it listens again.",
      "OS-level Android reminders that fire with the app closed, plus hourly email reminders via pg_cron and Resend.",
      "Google Calendar sync and Google Sign-In on both web and native, through Supabase edge functions and deep links.",
      "Recurring Pro billing with Paystack \u2014 checkout, signed webhook, plan gating, cancel and self-healing sync.",
      "Recurring tasks enforced in the form, the AI tool and a database trigger.",
    ],
    outcomes: [
      { value: "5", label: "edge functions in production" },
      { value: "2", label: "platforms from one codebase" },
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
