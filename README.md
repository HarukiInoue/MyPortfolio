# Photo Portfolio Multi Agent

This scaffold is for iterating on a photo-first portfolio design with multiple design-review agents or Codex skills.

## Structure

- `AGENTS.md` defines the project rules and UI improvement loop.
- `.agents/skills/` contains local skills for portfolio review, gallery layout, and visual critique.
- `docs/` contains the design brief, goals, and evaluation rubric.
- `src/` contains a small dependency-free static portfolio starter.
- `public/images/` is reserved for portfolio image assets.

## Suggested Loop

1. Read `AGENTS.md`.
2. Use `portfolio-ui-review` to identify the top design issues.
3. Use `photo-gallery-layout` when gallery rhythm or image sizing needs work.
4. Make the smallest useful UI change.
5. Use `visual-design-critic` to score the result.
6. Repeat up to 3 iterations, then report the remaining issues.

## Commands

```bash
npm run lint
npm run build
npm run dev
```

`npm run dev` uses `npx serve`, so it may download the package if it is not already installed.
