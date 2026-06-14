# The Choco Munch

A premium, custom-designed web application for The Choco Munch artisan bakery. This platform provides a sophisticated digital storefront for showcasing custom cakes, detailing baking workshops, and facilitating direct customer inquiries.

## Overview

The Choco Munch is a React-based frontend application built with modern web technologies to deliver a fast, responsive, and highly visual experience. The design system emphasizes an elegant, editorial aesthetic using a bespoke color palette of deep cocoa, warm alabaster, and caramel gold accents.

## Features

- **Editorial Design System**: Custom-built styling avoiding generic templates, focusing on high-end typography and refined whitespace.
- **Responsive Architecture**: Fully fluid layout that adapts seamlessly from mobile devices to large desktop monitors.
- **Dynamic Routing**: Single-page application structure for instantaneous page transitions.
- **Component-Driven UI**: Modular React architecture utilizing Radix UI primitives for accessible, unstyled foundational components.
- **Optimized Asset Delivery**: Implementation of modern image formats and CSS-based gradients for performance.

## Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **State Management**: React Query (TanStack)
- **Routing**: React Router DOM

## Getting Started

### Prerequisites

Ensure you have Node.js (version 18 or higher) and npm installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/notUbaid/thechocomunch.git
   ```

2. Navigate to the project directory:
   ```bash
   cd thechocomunch
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:

```bash
npm run dev
```

The application will be available at your local host address provided in the terminal output.

### Production Build

Create an optimized production build:

```bash
npm run build
```

The compiled assets will be generated in the `dist` directory, ready for deployment.

## Project Structure

- `/src/components` - Reusable UI elements and major page sections
- `/src/pages` - Top-level route components
- `/src/assets` - Static assets including images and brand graphics
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and shared logic
- `index.css` - Global stylesheet containing the custom design system tokens

## License

This project is proprietary and confidential. All rights reserved by The Choco Munch.