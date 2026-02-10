# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern UI with Shadcn/ui components
- ⚡ Fast build times with Vite
- 🔒 Type-safe with TypeScript
- ♿ Accessible with ARIA labels and semantic HTML
- 🎯 SEO optimized with meta tags and structured data
- 🚀 Performance optimized with lazy loading and code splitting
- 🧪 Comprehensive test coverage (unit + E2E)
- 🏗️ Clean architecture following SRP and DRY principles

## Tech Stack

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui + Radix UI
- **Icons:** Lucide React
- **Testing:** Vitest + Playwright
- **Performance:** React.lazy, Intersection Observer

## Project Structure

```
app/
├── components/          # React components
│   ├── icons/          # Custom SVG icon components
│   ├── ui/             # Shadcn/ui components
│   └── ...             # Feature components
├── lib/                # Utilities and constants
│   ├── constants.ts    # Centralized constants (colors, nav, etc.)
│   ├── scroll.ts       # Scroll utilities
│   └── utils.ts        # General utilities
├── test/               # Unit tests
├── e2e/                # End-to-end tests
└── styles/             # Global styles
```

## Code Quality

This project follows industry best practices:

- **Single Responsibility Principle (SRP)**: Each component/function has one clear purpose
- **Don't Repeat Yourself (DRY)**: Shared code extracted to reusable utilities
- **Centralized Constants**: All colors, navigation, contact info in `lib/constants.ts`
- **Type Safety**: Full TypeScript coverage with strict mode
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Comprehensive meta tags, Open Graph, and JSON-LD structured data

See [REFACTORING-SUMMARY.md](REFACTORING-SUMMARY.md) for detailed information about code improvements.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers (for E2E tests)
npm run playwright:install

# Start development server (opens at localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing

### Unit Tests (Vitest)
```bash
# Run unit tests in watch mode
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### E2E Tests (Playwright)
```bash
# Run E2E tests
npm run test:e2e

# Run with UI mode
npm run test:e2e:ui

# Debug mode
npm run test:e2e:debug
```

See [TESTING.md](TESTING.md) for comprehensive testing documentation.

## Project Structure

```
app/
├── components/          # React components
│   ├── ui/             # Shadcn/ui components
│   ├── figma/          # Figma-specific components
│   └── ...             # Feature components
├── styles/             # Global styles
├── guidelines/         # Development guidelines
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.html          # HTML template
```

## Development

The application runs on `http://localhost:3000` by default.

## Building

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## License

Private - All rights reserved

## Author

Jim Floss - Senior Full-Stack Developer
