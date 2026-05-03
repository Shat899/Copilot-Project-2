# UI Components

## Rules

- **shadcn/ui only** — all UI elements must use shadcn/ui components; never create custom UI components
- **Add via CLI** — always add new components with `npx shadcn@latest add <component>`; never manually create or edit files in `components/ui/`
- **No raw HTML for UI** — do not use raw `<button>`, `<input>`, `<dialog>`, etc. when a shadcn/ui equivalent exists
- **`cn()`** — always use the `cn()` utility for conditional or merged class names
- **Extend, don't replace** — compose shadcn/ui primitives together rather than rebuilding them from scratch

## Available Components

Check `components/ui/` for already-installed components before adding new ones.

## Examples

```tsx
// ✅ Correct
import { Button } from "@/components/ui/button"
<Button variant="outline">Click me</Button>

// ❌ Wrong — custom component
const MyButton = ({ children }) => <button className="...">{children}</button>
```
