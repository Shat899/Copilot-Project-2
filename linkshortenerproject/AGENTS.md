<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Instructions

This file is the entry point for LLM coding agents. All detailed coding standards are split into separate files in the `/docs` directory. **Read the relevant docs file(s) before writing any code.**

## Docs Index

| File | Topic |
|---|---|
| [docs/01-auth-rules.md](./docs/01-auth-rules.md) | Clerk-only auth, modal sign-in/up, protected `/dashboard`, homepage redirect |
| [docs/02-ui-components.md](./docs/02-ui-components.md) | shadcn/ui only — no custom components, CLI usage, `cn()` utility |

## Quick Rules (Non-Negotiable)

- **App Router only** — never use `pages/`, `_app.tsx`, or pages-router APIs
- **TypeScript strict** — no `any`, use `@/` path aliases
- **Server Components by default** — add `"use client"` only when necessary
- **Clerk auth** — use `clerkMiddleware()`, `<Show>`, never deprecated `<SignedIn>`/`<SignedOut>`
- **Clerk only** — no other auth libraries; sign-in/sign-up always launch as modals (`mode="modal"`)
- **`/dashboard` is protected** — redirect unauthenticated users away; redirect authenticated users from `/` to `/dashboard`
- **Drizzle ORM** — all DB calls in server context only, schema in `db/schema.ts`
- **Tailwind v4** — no `tailwind.config.js`, configuration lives in `globals.css`
- **shadcn/ui** — use CLI to add components, never edit `components/ui/` manually
- **`cn()`** — always use for conditional class merging
- **Never commit secrets** — all keys stay in `.env`
