# Task Manager App

A simple, modern task manager built with React, TypeScript, and Vite. 
This is a demo project designed to showcase modern React development practices and serve as a learning reference for TypeScript and component architecture.

## Features
- **Add tasks** with a title, description, and priority (Low, Medium, High)
- **View** the current list of tasks
- **Mark tasks as completed** (with strikethrough)
- **Delete tasks** from the list
- **Expand/collapse** tasks to view details
- **Priority color coding** (Low: blue, Medium: yellow, High: red)
- **Persistent storage** using localStorage

## Tech Stack
- [React](https://react.dev/) (with hooks)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast development
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing
- Native CSS for styling


## Quick Demo

1. **Add a task**: Fill in title, description, set priority → Click "Add Task"
2. **Mark complete**: Check the checkbox → See strikethrough effect
3. **View details**: Click the "+" button → Expand to see description
4. **Priority colors**: Notice blue (low), yellow (medium), red (high) backgrounds
5. **Persistence**: Refresh the page → Tasks remain saved

## Project Structure
```
src/
  components/    # React components (TaskList, NewTask, etc.)
  hooks/         # Custom React hooks (useTasks)
  type/          # TypeScript types
  utils/         # Utility functions (localStorage, etc.)
  App.tsx        # Main app component
  App.css        # Main styles
```

## Getting Started

### Prerequisites
- Node.js (v20.17.0 or higher recommended)
- npm

### Installation
```sh
npm install
```

### Development
```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### Build
```sh
npm run build
```

### Lint
```sh
npm run lint
```

### Test
Run all tests:
```sh
npm test
```
Run with coverage:
```sh
npm run test:coverage
```


## Architecture & Design Philosophy

### Core Principles

- **Component-Driven Development**: UI is built with small, focused, and reusable components that follow single responsibility principle
- **Type-First Approach**: Every function, component, and data structure is strongly typed with TypeScript for enhanced developer experience and runtime safety
- **Accessibility by Design**: All interactive elements use semantic HTML, proper ARIA labels, and keyboard navigation support
- **Lightweight & Fast**: Minimal dependencies and modern build tools ensure optimal bundle size and performance

### Technical Architecture

- **Custom Hooks Pattern**: The `useTasks` hook centralizes all task management logic, making it reusable and testable in isolation
- **Composition over Inheritance**: Components like `TaskActions` are designed to be composed together rather than extended
- **Clean Separation of Concerns**:
  - Components handle UI rendering and user interactions
  - Hooks manage state and business logic
  - Utils handle data persistence and transformations
- **Comprehensive Testing**: Unit tests cover components, hooks, and utilities with focus on user behavior rather than implementation details

## Note

This is a demo project built for educational purposes and to demonstrate modern React/TypeScript development patterns. 
While fully functional, it's designed as a learning tool and reference implementation rather than a production-ready application.





