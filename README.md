# Portfolio

Personal portfolio — scrapbook / notebook theme: ruled paper, pixel headings, handwritten notes, sticky-note tags and taped polaroids.

Built with React 19, TypeScript, Vite, Tailwind CSS 4, Framer Motion and React Router.

## Editing content

- `src/data/site.ts` — name, role, location, bio, skills, tools, links
- `src/data/projects.ts` — every project (title, description, stack, links, screenshot, case-study notes)
- `public/shots/` — project screenshots (1200×750 JPG)
- `src/pages/Playground.tsx` — the "just for fun" collage items

## Running

```sh
npm install
npm run dev
```

## Deploying

Builds to `dist/`; `vercel.json` rewrites all routes to `index.html` for client-side routing.
