# Copilot Instructions for Xavier Archive

## Project Overview
This is a single-page React application ("Xavier Main Frame") for managing lecture materials and interactive quizzes. It features a file inventory system and flashcard-based quiz engine, built with Vite and deployed to GitHub Pages.

## Architecture
- **Main Component**: `XavierVault` in `src/App.jsx` manages the entire app state and routing between views ('home', 'lectures', 'games', 'realworld').
- **Data Structure**: Hardcoded arrays for `flashcards` (quiz questions/answers) and `files` (lecture assets with name, path, type).
- **Styling**: Dark theme with glassmorphism effects using inline `smokeGlass` style object (see `src/App.jsx` lines 20-25) combined with Tailwind CSS classes.
- **Navigation**: Uses `activeCourse` state string to switch views; no router library.

## Key Patterns
- **Consistent Card Styling**: Apply `smokeGlass` object for translucent backgrounds with blur and borders (e.g., lecture list items in `src/App.jsx` lines 50-60).
- **State Management**: Simple `useState` hooks for UI state (activeCourse, quizIndex, showAnswer); no external state libraries.
- **File Linking**: Assets in `files` array link to `public/` directory paths; ensure paths match deployed structure.
- **Quiz Interaction**: Toggle `showAnswer` on click to reveal flashcard answers; cycle through `flashcards` array with index buttons.

## Development Workflow
- **Local Dev**: `npm run dev` starts Vite dev server.
- **Build**: `npm run build` outputs to `dist/` directory.
- **Deploy**: `npm run deploy` builds and pushes to GitHub Pages with base path `/xavier-archive/` (configured in `vite.config.js`).
- **Linting**: `npm run lint` uses ESLint with React hooks and refresh plugins.

## Conventions
- Functional components with default exports.
- Inline styles for reusable objects like `smokeGlass`; Tailwind for utility classes.
- Uppercase component names (e.g., `XavierVault`).
- Hardcode data arrays directly in component; no separate data files.
- Use `onClick` for navigation and interactions; no form submissions.

## Integration Points
- **Assets**: Lecture files (PPTX, PDF, ZIP) stored in `public/`; update `files` array in `src/App.jsx` to add new materials.
- **External Links**: File paths open in new tabs; ensure public assets are accessible at deployment URL.
- **.webloc Files**: Root directory contains macOS web location files; may be source references for downloading assets.

## Common Tasks
- **Add New File**: Append to `files` array with name, path (relative to public/), and type.
- **Add Flashcard**: Push to `flashcards` array with `q` and `a` properties.
- **Style New Sections**: Reuse `smokeGlass` and Tailwind classes for consistency.
- **Deploy Updates**: Commit changes, run `npm run deploy` from root directory.