# Recipe Scaler

A responsive React + TypeScript recipe scaling application that dynamically adjusts ingredient quantities based on serving size changes.

Built as part of a frontend architecture and UI systems sprint focused on React state management, derived data, reusable hooks, responsive layouts, and modern component design patterns.

---

## Features

- Dynamic ingredient scaling based on serving count
- Per-card local serving state
- Persistent recipes with localStorage
- Delete recipes
- Reset servings to base values
- Responsive recipe card grid
- Empty state UI handling
- Formatted ingredient display values
- Memoized derived ingredient calculations with `useMemo`

---

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite

---

## Architecture Highlights

### Local vs Global State Ownership

- `App.tsx` owns the global recipes collection
- `RecipeCard` owns local UI state for `currentServings`
- Ingredient scaling is computed as derived render data rather than duplicated state

### Derived Data Patterns

Ingredient amounts are calculated dynamically using utility functions instead of mutating recipe data directly.

The app uses:

- pure utility functions
- immutable updates
- memoized transformed collections with `useMemo`

### Reusable Persistence Layer

Recipes persist across refreshes using a reusable generic `useLocalStorage<T>` hook.

---

## UI / Frontend Focus Areas

This project intentionally focused on practical frontend UI patterns including:

- responsive CSS grid layouts
- Flexbox alignment patterns
- card-based UI systems
- spacing hierarchy
- interactive button states
- conditional rendering
- empty-state UX
- Tailwind utility composition

---

## Learning Objectives

This project was built to strengthen:

- React component architecture
- prop drilling and callback flow
- TypeScript prop typing
- derived state patterns
- reusable custom hooks
- memoization concepts
- responsive frontend design
- CRUD-style UI interactions

---

## Future Improvements

Potential future enhancements:

- recipe editing
- ingredient unit pluralization
- drag-and-drop ingredient ordering
- backend persistence
- authentication
- image uploads
- server-side storage

---

## Running Locally

```bash
npm install
npm run dev
```

---

## Screenshots

_Add screenshots here later._

---

## Project Status

Completed as a frontend architecture and React systems practice project.
