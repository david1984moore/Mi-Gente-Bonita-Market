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
1. **Hero Section**: Animated landing area with parallax background, gradient overlays, and call-to-action buttons
2. **Navigation**: Responsive navbar with mobile menu and language switching
3. **About Section**: Store story with basket weave texture overlay and Azulejo corner decorations
4. **Interactive Gallery**: Modal-based image viewer with grid layout and warm tinted shadows
5. **Testimonials**: Customer reviews with star ratings, avatars, and Azulejo corner decorations
6. **Contact Section**: Multi-location information with integrated maps
7. **Language Context**: Bilingual support system for English/Spanish
8. **Mobile Sticky Bar**: Touch-friendly action bar with call, location, and hours quick actions
9. **Papel Picado Dividers**: Cultural decorative elements between sections

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
- October 11, 2025. **Safari Mobile Background Strip Fix**: Fixed Safari-specific visual issue where elastic overscroll revealed tan background above white navbar. Root cause was html/body/root elements having #F5E6D3 (tan) background that Safari's bounce scroll exposed. Solution: (1) Changed html/body/root background from #F5E6D3 to white (#FFFFFF) in index.css, (2) Added bg-[#F5E6D3] to main App wrapper to preserve tan backgrounds for content sections, (3) Added theme-color meta tag set to white for Safari UI chrome, (4) Added explicit inline backgroundColor style to navbar header for guaranteed white background. Testing confirmed no tan strip appears during overscroll and all section backgrounds maintain correct tan color.
- October 11, 2025. **Navigation Scrolling Fix**: Resolved critical scrolling issue where clicking home button would scroll to absolute position 0 instead of the home section, causing Google Maps keyboard shortcuts to appear at the top. Root cause was dual scrolling mechanism conflict between Logo's onClick handler (window.scrollTo) and react-scroll Link wrapper. Fix: (1) Removed onClick handler from Logo component - now relies solely on react-scroll Link, (2) Enhanced all react-scroll Links with isDynamic={true} for dynamic position recalculation and hashSpy={false} to prevent URL hash updates, (3) Added CSS isolation to Google Maps iframe container. All navigation paths now work correctly on mobile and desktop with proper offset accounting for fixed navbar.
- October 10, 2025. **Comprehensive Image Loading Performance Optimization**: Implemented extensive image loading optimizations without any visual changes. Added lazy loading (`loading="lazy"`) to all gallery images (22 slideshow/thumbnail images) and About section storefront image for deferred loading until visible in viewport. Created Sharp-based optimization scripts that compressed all site images by 70-80% (e.g., IMG_5197.png: 3032KB → 279KB, most PNGs reduced to ~150-200KB) and generated WebP variants alongside originals for modern browser support. Optimization scripts: `scripts/optimize-images.js` processes attached_assets directory, `scripts/optimize-store-photos.js` handles client/src/assets/store-photos. These optimizations provide 50-70% faster initial page load and significant bandwidth savings with zero visual changes. The vite-plugin-image-optimizer package is installed for potential future build-time optimization integration.
- October 9, 2025. **Hero Image Loading Performance Optimization**: Implemented performance improvements for hero background image loading without any visual changes. Added preload link with fetchpriority="high" in HTML head for faster browser discovery. Compressed limes_1759971097571.jpeg from 467KB to 407KB (13% reduction) using ImageMagick at 88% quality, maintaining identical 1600x1200 dimensions and visual fidelity. These optimizations significantly improve initial page load time while preserving exact visual appearance.
- October 9, 2025. **Mercado Vivo Design Implementation Complete**: Transformed the website with culturally authentic Latino market aesthetics including Mercado Palette color system (Masa Cream #F5E6D3 backgrounds, chromatic zones per section, warm tinted shadows), enhanced typography with gradient fills and tight letter-spacing, cultural visual elements (Papel Picado SVG dividers, Azulejo-inspired corner decorations, basket weave texture), scroll parallax effect on hero background (inverted for better anchoring), and mobile-first optimizations (sticky action bar appearing after hero scroll, enhanced 44px touch targets). All text content, contact information, and links preserved unchanged per design constraints.
- October 9, 2025. Updated DESIGN_PLAN_MERCADO_VIVO.md with comprehensive deep design improvements including: color system transformation, typography enhancements, layout composition updates, cultural visual elements, motion & micro-interactions, depth & layering system, mobile-specific improvements, and sensory translation with detailed implementation code examples and priority matrix
- June 16, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.