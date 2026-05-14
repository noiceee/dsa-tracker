<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Application Architecture & Styling Rules

1. **Theming**: Do NOT use hardcoded hex values (e.g. `bg-[#0b1326]`) in Tailwind classes. The application uses `next-themes` and a set of custom CSS variables defined in `src/app/globals.css`. Always use semantic color classes (e.g. `bg-canvas`, `text-text`, `bg-accent`, `text-success`) to ensure that dark mode and light mode both work correctly.
2. **Hydration**: When adding React code that interacts with `localStorage` (like `redux-persist`), be careful of SSR hydration mismatches. The `StoreProvider` correctly delays hydration until the first `useEffect` tick.
3. **App Layout**: The `<body suppressHydrationWarning>` tag should maintain its warning suppression attribute to prevent false-positive hydration errors caused by browser extensions injecting classes.
4. **Navigation**: Tab navigation state is localized in the parent component. Do not remove this state handling without adding proper App Router links.
