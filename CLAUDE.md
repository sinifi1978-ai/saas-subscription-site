# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project overview

A **subscription SaaS** web app with a **Persian / RTL** UI. Built with
**Next.js 15 (App Router) + TypeScript + Tailwind CSS**.

**Current phase: UI-only skeleton.** The backend (authentication, database,
payments) is intentionally **deferred** — the app currently renders the visual
shell only, with placeholders where backend-connected features will go. Features
are being added one at a time, on request.

Deferred backend stack (planned, see `README.md`): Auth.js (NextAuth v5),
Prisma + PostgreSQL, Stripe (Checkout + Customer Portal + webhooks) with a single
plan + 14-day free trial. A `prisma/schema.prisma` is kept for that later work.

## ⚠️ Environment specifics (READ FIRST — non-obvious)

This is a **Windows Server 2019 box with only 4 GB RAM**.

- **Git**: full Git for Windows is installed **system-wide** at
  `C:\Program Files\Git` and is on the system PATH (auto-detected by VS Code).
- **Node.js 20** is a **portable** install at `C:\Users\Administrator\tools\nodejs`
  and is **not** on the default PATH. In a fresh PowerShell, prepend it first:

```powershell
$env:Path = "$env:Path;C:\Users\Administrator\tools\nodejs"
```

> Note: a leftover portable MinGit also exists at `C:\Users\Administrator\tools\git`,
> but the system Git above is canonical.

### Memory constraint — do NOT run `next dev`
`next dev` and even `next start` **crash with out-of-memory** on this machine.
The app is configured for **static export** (`output: "export"` in
`next.config.ts`) and served with a tiny custom static server instead:

```powershell
npm run build            # generates ./out (static export)
node serve-static.mjs    # serves ./out on http://localhost:3000 (~25 MB RAM)
```

`serve-static.mjs` is a dependency-free ~30 MB static file server used because
Next's own runtime servers exhaust system memory here. If a build fails with an
OOM/StackOverflow error, it's memory pressure — retry when more RAM is free.

## Commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Build (static export → `./out`) | `npm run build` |
| Serve locally | `node serve-static.mjs` → http://localhost:3000 |
| Lint | `npm run lint` |

> `npm run dev` / `npm start` exist but are unusable here (see memory note).

## Architecture

- `app/page.tsx` — landing page (hero, features, single pricing plan w/ trial)
- `app/(auth)/login`, `app/(auth)/signup` — auth screens (UI-only forms)
- `app/dashboard/` — protected-area shell; `page.tsx` has the placeholder for the
  real product; `billing/` shows subscription status + (disabled) pay buttons
- `app/layout.tsx` — sets `lang="fa" dir="rtl"`, loads Vazirmatn font
- `components/` — `Navbar`, `SignOutButton` (currently static/UI-only)
- `prisma/schema.prisma` — DB models for the deferred backend (not yet wired)

## Conventions

- **RTL-first.** Use Tailwind logical properties (`ps-`, `pe-`, `ms-`, `me-`),
  not `left`/`right`. All user-facing copy is Persian.
- Brand color is blue (`brand-*` in `tailwind.config.ts`); neutrals are `slate`.
- When adding backend features, restore the real implementations (auth actions,
  Prisma client, Stripe routes) rather than the current UI-only stubs.

## Secrets & env

- `.env.local` (gitignored) holds real secrets; a real `AUTH_SECRET` is already
  generated there. `DATABASE_URL` / Stripe keys are blank until wired up.
- `.env.example` (committed) is the placeholder template for others.
- **Never commit** `.env*` files except `.env.example` (see `.gitignore`).

## Git / GitHub

- Remote: `git@github.com:sinifi1978-ai/saas-subscription-site.git` (SSH).
- SSH is fully configured (`git config core.sshCommand` points at the ed25519 key
  in `~/.ssh`), so `git push` works with **no token needed**. Git is on the system
  PATH, so plain `git` works in any shell.

## Deployment (Vercel)

- The repo is connected to **Vercel**, which **auto-deploys on every push to
  `main`** — no local build needed (Vercel builds in the cloud, sidestepping the
  4 GB RAM limit above).
- Live URL: **https://saas-subscription-site.vercel.app**
- Currently deploys as a **static site** (because of `output: "export"`). When the
  backend is added, remove `output: "export"` from `next.config.ts` so Vercel runs
  it as a full Next.js app (SSR/serverless), and set the real env vars
  (`DATABASE_URL`, `AUTH_SECRET`, Stripe keys) in the Vercel dashboard.
