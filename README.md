# DSA Tracker (Next.js SSR)

Modernized DSA tracker app migrated from a single HTML file into a production-ready Next.js App Router project with:

- Server-side initial render (SSR-capable architecture)
- Redux Toolkit state management with local persistence
- Light + dark theme support
- Working LeetCode sync via server API route
- Optional authenticated session mode to import exact solved slugs

## Stack

- Next.js `13.5.x` (App Router)
- React `18`
- Redux Toolkit + React Redux
- Tailwind CSS `3`
- `next-themes`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build + Lint

```bash
npm run lint
npm run build
```

## LeetCode Sync Modes

1. Public mode
- Enter a username and sync.
- Imports avatar + ranking + solved count stats.

2. Session mode (exact solved import)
- Sign into LeetCode in your browser.
- Paste `LEETCODE_SESSION` (and optionally `csrftoken`) into the app’s session sync fields.
- This uses authenticated GraphQL queries to import exact solved problem slugs and auto-mark matching tracker items.

## Deployment Note

This app includes a server API route (`/api/leetcode/sync`) for LeetCode integration, so it should be deployed on a runtime platform (for example Vercel, Railway, Render).

GitHub Pages is static-only and will not run the API route required for sync.
