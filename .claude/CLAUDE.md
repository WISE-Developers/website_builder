# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website builder for the Fire Growth Modelling website (firegrowthmodel.ca). Built with Vite, TypeScript, and React 19.

## Common Commands

```bash
npm run dev          # Start development server (localhost:5173)
npm run build        # Build for production (outputs to dist/)
npm run lint         # Run ESLint
npm run testHosting  # Test built site locally (localhost:8180) - mimics GitHub Pages
npm run preview      # Vite preview server
```

## Architecture

**Stack**: Vite + React 19 + TypeScript + React Router (HashRouter for GitHub Pages compatibility)

**Key Structure**:
- `src/App.tsx` - Root component with HashRouter, Header, Navigation, Footer
- `src/AppRoutes.tsx` - All route definitions mapping paths to page components
- `src/pages/` - Page components for each route (product overviews, documentation, software downloads, support)
- `src/components/` - Shared components (Header, Footer, Navigation, Banner, DocumentationTable, TabContent)
- `src/styles/` - CSS stylesheets

**Product Pages Pattern**: Each product (Prometheus, WISE, REDapp, BurnP3, BurnP3+, Pandora) has 4 pages:
- `{Product}Overview.tsx`
- `{Product}Documentation.tsx`
- `{Product}Software.tsx`
- `{Product}Support.tsx`

## Critical Deployment Notes

**The `dist/` folder is a git submodule** pointing to `https://github.com/WISE-Developers/firegrowthmodelling.ca.git`. This is the live website repository.

**Build behavior**: `emptyOutDir: false` in vite.config.ts prevents clearing dist/ - this preserves:
- `dist/resources/` - Legacy COM documentation (do not alter)
- `dist/CNAME` - GitHub Pages domain config (do not alter)

**Publishing workflow**:
1. Make source changes
2. Update `src/components/Footer.tsx` with today's date before publishing
3. Run `npm run build`
4. Commit/push in `dist/` submodule, then commit submodule reference in parent repo

## Development Notes

- Uses relative paths (`base: './'`) for GitHub Pages compatibility
- Test builds with `npm run testHosting`, not LiveServer
- JSX/TSX files use React JSX syntax, not raw HTML
