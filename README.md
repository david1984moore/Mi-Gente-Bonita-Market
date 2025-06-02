# Mi Gente Bonita Market

A responsive single-page website for Mi Gente Bonita Market featuring interactive map integration and location details for their Delaware stores.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive map showing store locations
- Bilingual support (English/Spanish)
- Contact information and store details
- Gallery showcase
- Customer testimonials

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js
- **Map Integration**: Leaflet/React-Leaflet
- **Build Tool**: Vite
- **UI Components**: Shadcn/ui, Radix UI
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mi-gente-bonita-market
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── contexts/       # React contexts
├── server/                 # Backend Express application
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Data storage interface
├── shared/                # Shared types and schemas
└── attached_assets/       # Project assets and images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary and confidential.