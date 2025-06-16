# Mi Gente Bonita Market

## Overview

Mi Gente Bonita Market is a responsive single-page website for an authentic Latino grocery market with locations in Delaware. The application showcases store locations, products, testimonials, and provides bilingual support (English/Spanish) to serve the Latino community. Built as a modern React application with TypeScript, it features interactive maps, image galleries, and customer testimonials.

## System Architecture

The application follows a full-stack architecture with a clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and Shadcn/ui components
- **State Management**: React Context API for language switching and local state management
- **UI Components**: Radix UI primitives with custom styling via Shadcn/ui
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with progressive enhancement

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but using memory storage currently)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful endpoints with `/api` prefix
- **Development**: Hot module replacement via Vite integration

## Key Components

### Frontend Components
1. **Hero Section**: Animated landing area with call-to-action buttons
2. **Navigation**: Responsive navbar with mobile menu and language switching
3. **About Section**: Store story with image gallery integration
4. **Interactive Gallery**: Modal-based image viewer with grid layout
5. **Testimonials**: Customer reviews with star ratings and avatars
6. **Contact Section**: Multi-location information with integrated maps
7. **Language Context**: Bilingual support system for English/Spanish

### Backend Components
1. **Express Server**: Main application server with middleware setup
2. **Route Registration**: Modular routing system for API endpoints
3. **Storage Interface**: Abstracted storage layer supporting multiple backends
4. **Health Check**: Basic application monitoring endpoint
5. **Vite Integration**: Development server integration for hot reloading

### Database Schema
Currently defines a basic user management system:
- **Users Table**: ID, username, password fields with Drizzle ORM integration
- **Extensible Design**: Schema structure supports easy addition of business-specific tables

## Data Flow

1. **Client Requests**: React frontend makes API calls to Express backend
2. **Language Management**: Context-based language switching with persistent state
3. **Image Loading**: Progressive image loading with intersection observers
4. **Navigation**: Smooth scrolling between sections using react-scroll
5. **Mobile Optimization**: Responsive design with mobile-specific interactions

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **@neondatabase/serverless**: Serverless PostgreSQL client
- **drizzle-orm**: Type-safe database ORM
- **react-scroll**: Smooth scrolling navigation
- **class-variance-authority**: Component variant management

### UI Libraries
- **@radix-ui/***: Accessible UI primitives (accordion, dialog, dropdown, etc.)
- **lucide-react**: SVG icon library
- **tailwindcss**: Utility-first CSS framework
- **cmdk**: Command palette component

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool and development server

## Deployment Strategy

### Static Deployment
- **Target**: Static site deployment optimized for CDN distribution
- **Build Process**: Vite builds frontend assets to `dist` directory
- **Server Bundle**: esbuild bundles Express server for production
- **Routing**: Client-side routing with fallback to index.html
- **Port Configuration**: Development on port 5000, production on port 80

### Database Configuration
- **Development**: Memory-based storage for rapid prototyping
- **Production**: PostgreSQL with Drizzle ORM migrations
- **Environment**: DATABASE_URL environment variable for connection

### Replit Integration
- **Modules**: Node.js 20, web, and PostgreSQL 16 support
- **Development**: Automatic server restart on file changes
- **Deployment**: Integrated build and deploy pipeline

## Changelog

Changelog:
- June 16, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.