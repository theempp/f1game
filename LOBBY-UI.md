# Lobby UI

The existing game was vanilla JavaScript. The lobby now uses React 19, TypeScript, Tailwind 4 and Motion, with shadcn-compatible configuration in `components.json`. No setup is required to play: run `node server.cjs` and open http://localhost:4186.

For development, run `npm install`, `npm run typecheck`, then `npm run build`. Reload the local game after building. The build emits local browser assets into `public/lobby-ui`; no CDN is required.

Reusable UI components live in `/components/ui` (including `origin-button.tsx` and its demo). This matches the `@/components/ui` shadcn alias so copied registry components have a predictable home. Shared class utilities live in `/lib/utils.ts`. Lobby styles live in `/lobby/style.css`, and Tailwind's entry is `/lobby/tailwind.css`. The existing racing styles remain in `style.css` and `race3d.css`.

OriginButton retains pointer-origin circular fill, pressed state, forwarded refs, disabled/loading semantics and keyboard focus treatment. Its palette is scoped to this monochrome lobby. Reduced motion is honored; native Space activation is retained (the supplied preventDefault would suppress native button activation). No providers are required. Lucide supplies control icons.

The reference artwork is used as a static scene, framed to exclude its baked controls. Saved statistics and buttons are real UI. The logo's white pixels become transparent through an SVG filter without changing the supplied source. Driver level replaces the reference's championship count because championships are not implemented. Actual race-car and circuit selection are under the top-right settings button.
