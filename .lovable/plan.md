# SABER — Marketing Site Rebuild

Pivot the existing app into a clean, public-facing information site for **SABER**, an ETL company. No login, no signup, no dashboard.

## Brand & Voice

- **Name:** SABER
- **Pitch:** Turn information into advantage. SABER helps companies transform messy, scattered data into structured, up-to-date insight so they can make the right business decisions.
- **Style:** Bold & technical — mono fonts, visible grid lines, terminal/data vibe. Black & white only, with one toggle to flip between dark (default) and light.

## Sections (single long-scroll page)

1. **Sticky header** — SABER logo + wordmark, nav links, EN/ES toggle, theme toggle
2. **Hero** — Oversized statement: "Turn information into advantage." Subhead with the pitch. Animated grid/data motif in background.
3. **Services / What we do** — ETL pipelines, data integration, real-time dashboards, data quality
4. **Industries / Use cases** — e.g. fintech, retail, healthcare, logistics (generic until you specify)
5. **Trusted by / Testimonials** — Logo strip + 2–3 quote cards (placeholders you can edit later)
6. **About** — Company story / mission
7. **Team** — Grid of placeholder member cards (name, role, bio)
8. **Contact** — Big CTA with `mailto:` link, no form/backend
9. **Footer** — Logo, copyright, language + theme toggles repeated

## Internationalization (EN/ES)

- Lightweight in-house i18n — a `LanguageContext` with a dictionary object keyed by `en` / `es`.
- All copy lives in `src/i18n/translations.ts` so you can edit either language in one place.
- Toggle in header persists choice in `localStorage`.

## Theme (Black ↔ White)

- Reuse existing `ThemeToggle` pattern but lock palette to pure B&W.
- Dark mode: `#000` background, `#fff` text, thin gray grid lines. Light mode: inverse.
- All accents use grayscale only — no color.

## Logo

- Until you upload your real logo, I'll use the existing `StackedLogo` component as a placeholder so nothing looks broken.
- **To upload:** click the **+** button in the chat input → **Attach** (or drag & drop the file in). Send a PNG with transparent background ideally. If you have separate dark/light versions, send both.
- Once uploaded, I'll wire it into header, hero, footer, and favicon.

## What gets removed

- All auth pages (`/auth`), `AuthContext`, protected routes
- Dashboard, Bug list/detail/create, Analytics, Settings pages
- Supabase auth wiring from the app shell (the backend stays connected but unused — easy to remove later if you want)
- Sidebar layout — replaced with a top header + long-scroll page

## What stays

- React + Vite + Tailwind + shadcn setup
- The `StackedLogo` component as logo placeholder
- Tailwind design token system (re-tuned to pure B&W)

## File changes

- **New:** `src/contexts/LanguageContext.tsx`, `src/i18n/translations.ts`, `src/components/LanguageToggle.tsx`, `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/pages/Home.tsx`, plus section components (`Hero`, `Services`, `Industries`, `Testimonials`, `About`, `Team`, `Contact`)
- **Rewrite:** `src/App.tsx` (single route → Home), `src/index.css` + `tailwind.config.ts` (pure B&W palette), `index.html` (title/meta to SABER)
- **Delete:** `src/pages/Auth.tsx`, `Dashboard.tsx`, `BugList.tsx`, `BugDetail.tsx`, `BugCreate.tsx`, `Analytics.tsx`, `Settings.tsx`, `Landing.tsx`, `src/contexts/AuthContext.tsx`, `ProtectedRoute.tsx`, `AppLayout.tsx`, `AppSidebar.tsx`

## After approval

I'll build it with placeholder logo + sample testimonial/team/industry content you can edit. Once you upload your logo, I'll swap it in everywhere.
