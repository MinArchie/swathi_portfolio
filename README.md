# Swathi Kulkarni — Portfolio

Personal portfolio with a living hand-drawn parallax hero (scroll +
cursor parallax, ambient animations), live at
**https://minarchie.github.io/swathi_portfolio/**.

Built with React 19, TypeScript, Vite, Tailwind CSS v4, shadcn/ui, and
framer-motion. Hosted on GitHub Pages (fully static — pushing to `main`
auto-deploys via GitHub Actions).

## Quick start

```bash
npm install
npm run dev
```

## Updating content

All content (projects, achievements, education, bio, contact info)
lives in plain data files under `src/data/` — no component code
needed. **See [CONTENT_GUIDE.md](CONTENT_GUIDE.md)** for step-by-step
instructions on adding/removing anything, creating new pages, and
deploying.

## Structure

```
public/images/        parallax artwork + profile photo
src/data/             ← edit these to change content
src/pages/            Home, About, Experience, Projects, Education, Contact
src/components/       navbar, footer, parallax hero, transitions
src/components/ui/    shadcn/ui primitives
src/index.css         theme colors + animations (Tailwind v4 @theme)
.github/workflows/    auto-deploy to GitHub Pages
```
