# TESTPLAN — SUK Selangor Git & GitLab deck

Append-only checklist of scenarios that must keep passing. Verified via
`pnpm build` and `pnpm exec slidev export --format png` (Playwright renders
final-click state faithfully; the Claude Browser preview tab runs `hidden`, so
RAF-driven `v-motion` freezes there — always verify with the PNG export, not
preview-pane screenshots).

## Build & structure

- [x] `pnpm install` succeeds; `pnpm build` exits 0 (671 modules). — 2026-07-21
- [x] `slides.md` imports 50 pages via `src:`; every page file exists. — 2026-07-21
- [x] Build base is `/git-gitlab-suk-sel/`; all `dist/assets/*` reference that base. — 2026-07-21

## Rendering — both color schemes

- [x] Full deck exported to PNG (dark); all 40 slides render, no blank/broken. — 2026-07-21 (check-dark/)
- [x] Light-scheme sample (1,7,8,15,27,31,35,40) renders: dark text on white,
      diagrams switch to light palette, TermWindows stay dark, GUI mocks stay
      light, footer legible. — 2026-07-21 (check-light/)
- [x] Icons resolve: `mdi-*` and `logos-gitlab-icon` render (no empty boxes). — 2026-07-21
- [x] GitGraph (branch-graph, merge-strategies) draws commits/wires/HEAD with
      explicit English props (never the BM Docker defaults). — 2026-07-21
- [x] FlowGraph (four-places, remotes-origin, merge-request-flow) draws nodes,
      edges, and command labels with explicit props. — 2026-07-21

## Layout regressions

- [x] **best-practices (slide 31):** 6-medallion grid must fit above the footer
      in BOTH schemes (regression: original `mt-10`+`gap-y-8`+4.6rem medallions
      overflowed, clipping the bottom row's captions). Fixed with
      `mt-6 gap-y-5` + `!w-14 !h-14` medallions + one-line captions. — 2026-07-21
- [x] **Lab component (Lab 2 & Lab 4):** five-step labs must keep the caution
      strip above the fixed footer (regression: original spacing overflowed and
      the caution collided with the footer). Fixed by tightening medallion/goal/
      step/terminal spacing + font in `Lab.vue`; verified Lab 2 & Lab 4 clear the
      footer in BOTH schemes. — 2026-07-21
- [x] No slide's content overlaps the fixed footer at final click state. — 2026-07-21

## Branding (client deliverable — no design-ref leakage)

- [x] No "Infratify", "Inframesia", "NTW", "National Training", or trainer names
      from the reference repo anywhere in shipped files (grep clean). — 2026-07-21
- [x] Title/footer/closing carry only SUK Selangor + Syafiyullah Yahya
      (MBOT Professional Technologist, github.com/syafi-dev, linkedin.com/in/syafi). — 2026-07-21
- [x] FlowGraph/GitGraph component defaults contain no Bahasa Malaysia strings. — 2026-07-21

## Deploy

- [x] GitHub Actions workflow builds and publishes to Pages (no ntw `lint:decks`
      step; single-deck build). — 2026-07-21
- [x] Live at https://syafi-dev.github.io/git-gitlab-suk-sel/ — HTTP 200, correct
      `<title>`, assets on `/git-gitlab-suk-sel/` base, logo + icons load. — 2026-07-21
- [x] Printable PDF cheat sheet (`public/git-gitlab-cheatsheet.pdf`, source in
      `cheatsheet/`, rendered via Playwright) — one A4-landscape page, 9 sections;
      served at `/git-gitlab-suk-sel/git-gitlab-cheatsheet.pdf` and linked from the
      "Take this with you" slide. — 2026-07-21

## Content fidelity

- [x] All 4 parts present with 8 labs (Lab 1–8), pitfalls, recovery clinic,
      cheat sheet, seven habits, pre/post-assessment + feedback links. — 2026-07-21
- [x] Enriched with Mastering concept slides: what-is-git, merge-strategies
      (fast-forward vs 3-way), what-is-gitlab (self-hosted vs SaaS). — 2026-07-21
- [x] Fundamentals/tools added: history-of-git (ice-breaker: Linus/2005/
      distributed), toolkit (Git CLI + VS Code + Sourcetree → GitLab Selangor),
      sourcetree (GUI-vs-CLI split); start-repo (git init vs git clone — how a repo begins). VS Code/GitLab logos render in both schemes;
      Lab 1 aligned to the GitLab Selangor training-repo workflow (clone → add
      your details → commit → push, in any of the three tools). — 2026-07-21
- [x] Gaps from Mosh "Git in 1 Hour" folded in: setup-check now sets line
      endings (core.autocrlf) + init.defaultBranch; undo cheat sheet adds
      `git restore -s HEAD~1` (restore an earlier version) and `git clean -fd`.
      Both verified in dark + light, no footer overflow. — 2026-07-21
- [x] VCS foundations added: vcs-intro (definition + the family: SVN, Mercurial,
      CVS, Perforce, Bazaar; Git as the standard) and vcs-types (centralized vs
      distributed, with DiagIcon SVG diagrams). SVG `<text>` uses inline
      `style="font-size"` (presentation attr is overridden by a global rule).
      Both verified, no footer overflow. — 2026-07-21
- [x] GitLab expanded: gitlab-features (Repository/Issues/MRs/CI-CD/Boards/Wiki)
      and gitlab-issues-ci (Issue #42 mock + pipeline build→test→deploy). — 2026-07-21
- [x] Activity marker: `ActivityBadge` ("your turn", green) on all 8 labs (via
      Lab.vue) and the warm-up — distinct from the red `LiveBadge`. — 2026-07-21
- [x] Lab environment: `lab-setup` slide states the shared repo
      (training/practice, everyone a Developer), solo vs pair, and that labs
      build on the Lab 1 clone. Every lab has a `prep` (SETUP) line naming its
      prerequisites: solo/own-branch for 1-4 & 8, pairs on a shared branch
      (pair-03) for the conflict lab, pairs+MR for 6-7. Lab 5 steps rewritten to
      make + resolve the conflict on the shared branch. All 5-step labs still
      clear the footer in both schemes with the added SETUP line. — 2026-07-21
- [x] Source URLs preserved: ml.my/git-gitlab-slide, pre/post questionnaires,
      git.selangor.gov.my practice repo. — 2026-07-21
