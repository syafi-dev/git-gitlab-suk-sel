# Mastering Git & GitLab — 1-Day Refresher Workshop

A [Slidev](https://sli.dev) deck for the **SUK Selangor** (Setiausaha Kerajaan
Negeri Selangor) Git & GitLab 1-day refresher workshop.

**Live:** https://syafi-dev.github.io/git-gitlab-suk-sel/

Facilitator: **Syafiyullah Yahya** — MBOT Professional Technologist · HRD Corp
Accredited Trainer.

## What's inside

40 slides across four hands-on blocks, following the Recap → Lab → Pitfall →
Debrief rhythm:

1. **Git Core Refresher** — the daily loop, four places code lives, core
   commands · Labs 1–2 · basic pitfalls
2. **Branching & Merging** — branches, fast-forward vs 3-way merge, conflicts ·
   Labs 3–5 · branch pitfalls
3. **GitLab Collaboration** — self-hosted vs SaaS, remotes & origin, the Merge
   Request flow, `.gitignore` · Labs 6–7 · best practices
4. **Oops! Recovery Clinic** — the undo cheat sheet, classic rescues,
   symptom→fix table · Lab 8

Plus a one-page command cheat sheet, seven habits, and pre/post-assessment +
feedback links.

## Develop

```bash
pnpm install
pnpm dev            # http://localhost:3030, live reload
pnpm build          # static site → dist/ (base /git-gitlab-suk-sel/)
pnpm export         # PNG/PDF via Playwright (faithful final-click frames)
```

Presenter notes carry the spoken script, demo cues, and the `ASK:` / `STORY:` /
`ACTIVITY:` engagement markers — press `p` in the browser for presenter mode.

## Structure

- `slides.md` — headmatter + a `src:` manifest; one slide per `pages/<slug>.md`.
- `components/` — shared visual system: `TermWindow`, `LiveBadge`, `GitGraph`,
  `FlowGraph`, `Lab`, plus `DiagIcon`/`diagram-icons.ts` for the diagram grammar.
- `style.css` — links, eyebrows, reveal grammar, lab/pitfall styles.
- `global-bottom.vue` — footer. `public/suk-logo.png` — title/footer mark.

The visual system is adapted from a shared Slidev training-deck design system;
content is derived from the SUK Selangor 1-Day Refresher and Mastering source
decks.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the deck
and publishes `dist/` to GitHub Pages (source: GitHub Actions).
