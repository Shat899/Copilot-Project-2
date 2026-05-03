# Auth Rules

## Single Source of Auth: Clerk

All authentication in this app is handled exclusively by **Clerk**. No other auth libraries, custom JWT logic, session handling, or middleware-based auth may be used.

## ALWAYS

- Use `clerkMiddleware()` in `proxy.ts` to protect routes
- Use `auth()` from `@clerk/nextjs/server` to read session in Server Components and Server Actions
- Launch Sign In and Sign Up as **modals** — pass `mode="modal"` to `<SignInButton>` and `<SignUpButton>`
- Redirect unauthenticated users away from `/dashboard` to Clerk's sign-in modal
- Redirect authenticated users away from `/` (homepage) to `/dashboard`

## NEVER

- Do NOT implement any custom auth (sessions, JWTs, cookies, OAuth handlers, `next-auth`, `lucia`, etc.)
- Do NOT create custom `/sign-in` or `/sign-up` pages
- Do NOT use `<SignedIn>` / `<SignedOut>` — use `<Show when="signed-in">` / `<Show when="signed-out">`
- Do NOT use deprecated `authMiddleware()` or `withAuth()`

## Modal Sign In / Sign Up

Always open Clerk auth flows as a modal — never full-page redirects:

```typescript
<SignInButton mode="modal">
  <button>Sign In</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign Up</button>
</SignUpButton>
```

## Protected Route: `/dashboard`

`/dashboard` requires the user to be authenticated. Redirect to sign-in if not:

```typescript
// app/dashboard/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) redirect("/");
  // ...
}
```

## Homepage Redirect for Authenticated Users

If a signed-in user visits `/`, redirect them to `/dashboard`:

```typescript
// app/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) redirect("/dashboard");
  // ...
}
```
