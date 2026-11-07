# Tasks

A personal productivity to-do list. Add a task, mark it done, filter the list, and come back later — everything stays in this browser through `localStorage`.

## Prerequisites

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173/todolist_test/](http://localhost:5173/todolist_test/). The dev server uses the same `/todolist_test/` base path as GitHub Pages.

## Typecheck and build

```bash
npm run typecheck
npm run build
npm run preview
```

`npm run build` runs `tsc --noEmit` and then Vite. The static site is written to `dist/`. Preview it at [http://localhost:4173/todolist_test/](http://localhost:4173/todolist_test/).

## Deploy to GitHub Pages

Pushes to `main` run `.github/workflows/deploy.yml`:

1. `npm ci` and `npm run build`
2. `actions/upload-pages-artifact` uploads `dist`
3. `actions/deploy-pages` publishes that artifact

### One-time Pages setup

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

The live site is [https://kartuznik.github.io/todolist_test/](https://kartuznik.github.io/todolist_test/).

The workflow needs the repository `pages: write` and `id-token: write` permissions (already set in the workflow file). The first deployment creates the `github-pages` environment.

## Features

- Add a task from the orange button. It becomes an input; Enter adds the trimmed title, Escape or a click outside cancels, and a blank title is ignored.
- Mark a task done or active again, or delete it.
- Filter by all, active, or done.
- Completed, remaining, and total counts update with the list. The total is zero-padded (`05 TOTAL`).
- Tasks persist in `localStorage`. Corrupt JSON or a payload that is not a list of tasks loads as an empty list instead of crashing.
