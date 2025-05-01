# Betting Dashboard

A responsive, interactive betting dashboard built with React, TypeScript, and Material UI. This application simulates a betting platform with mock API interactions.

**Note:** This application is currently configured to run locally only. It relies on Mock Service Worker for API simulation, which is not enabled in production builds by default. A real backend integration would be required for deployment.

## Features

- **Responsive Grid Layout**: Displays betting cards in a responsive grid that adapts to different screen sizes
- **Interactive Betting Cards**: Each card shows team matchups, odds, and bet counts
- **Add Random Bets**: Generate new random betting cards with a simulated API call
- **Error Handling**: Robust error states and loading indicators
- **Empty State Handling**: User-friendly empty state when no bets exist

## Tech Stack

- **React 19**: Modern UI library with functional components and hooks
- **TypeScript**: Type safety throughout the application
- **Material UI v7**: Component library for consistent, responsive design
- **TanStack Router**: File-based routing solution
- **TanStack Query**: Data fetching and state management
- **Redux Toolkit**: For global state (toast notifications)
- **Mock Service Worker**: For simulating API calls

## Project Architecture

- **Feature-Based Structure**: Organized by domain features
- **Component Composition**: Breakdown of UI elements into smaller, reusable pieces
- **Separation of Concerns**: API logic separated from UI components
- **Clean Data Flow**: Predictable state management

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. Version 20.x or later is recommended. You can download it from [nodejs.org](https://nodejs.org/).
- **pnpm**: This project uses `pnpm` for package management. Install it globally via npm:
  ```bash
  npm install -g pnpm
  ```

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start
```

### Building

```bash
# Build for production
pnpm build
```

## Code Structure

```
src/
  ├── app/                  # Application bootstrapping
  ├── components/           # Shared components
  │   ├── common/           # Generic reusable components
  │   └── layouts/          # Layout components
  ├── features/             # Feature modules
  │   └── dashboard/        # Dashboard feature
  │       ├── api/          # API integration
  │       ├── components/   # UI components
  │       │   └── betting-card/  # Betting card composite component
  │       └── types/        # TypeScript types
  ├── hooks/                # Custom React hooks
  ├── lib/                  # Utilities and services
  ├── mocks/                # Mock service worker setup
  ├── routes/               # Application routes
  └── store/                # Redux store configuration
```

## Key Implementation Details

### Component Architecture

The betting cards use a composition pattern for better maintainability:

- `BettingCard`: Main container component
- `TeamMatchup`: Displays competing teams with responsive text scaling
- `OddsInfo`: Shows betting odds for each team
- `BetsInfo`: Displays bet counts with icons
- Each component has clear, single responsibilities

### Data Flow

1. **API Simulation**:

   - Mock Service Worker intercepts fetch requests
   - Simulated endpoints: `/api/bets` (GET/POST)

2. **State Management**:

   - React Query handles server state (fetching/caching bets)
   - Redux for UI state (toast notifications)
   - Component state for local UI concerns

3. **Error Handling**:
   - Toast notifications for API errors
   - Fallback UI for failed requests
   - Empty state for when no bets exist

## Responsive Design

The application is fully responsive across:

- Desktop: 3-column grid layout
- Tablet: 2-column grid layout
- Mobile: 1-column layout with adaptively sized text

## Development Decisions

- **Component Composition**: Breaking UI into logical, reusable pieces
- **Early Returns**: Cleaner conditional rendering in components
- **Adaptive Text Sizing**: Using responsive font sizing instead of ellipsis
- **Theme Integration**: Leveraging MUI theme for consistent styling
- **API Client Pattern**: Centralized API request handling

## Future Improvements

- Add authentication flow
- Implement bet placement functionality
- Add sorting/filtering options
- Remove bets
- Expand test coverage
- Add performance monitoring
- Control Mock Service Worker enablement via environment variables
- Configure API base URL via environment variables

---

This project was built with React 19 and Material UI v7.
