import { ReactNode } from 'react';

// Fallback Hero image component
export const HeroImage = (): ReactNode => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <rect width="1200" height="600" fill="#3B4A3F" />
      
      {/* Background gradient */}
      <rect width="1200" height="600" fill="url(#paint0_linear)" />
      
      {/* Products visualization */}
      <g opacity="0.5">
        {/* Shelves */}
        <rect x="100" y="200" width="1000" height="5" fill="#E0E0E0" />
        <rect x="100" y="300" width="1000" height="5" fill="#E0E0E0" />
        <rect x="100" y="400" width="1000" height="5" fill="#E0E0E0" />
        
        {/* Product items on shelves */}
        <rect x="150" y="150" width="40" height="50" rx="3" fill="#D32F2F" />
        <rect x="200" y="160" width="30" height="40" rx="3" fill="#388E3C" />
        <rect x="240" y="155" width="35" height="45" rx="3" fill="#FBC02D" />
        <rect x="300" y="150" width="40" height="50" rx="3" fill="#1976D2" />
        <rect x="350" y="160" width="30" height="40" rx="3" fill="#7B1FA2" />
        
        <rect x="450" y="250" width="40" height="50" rx="3" fill="#E64A19" />
        <rect x="500" y="260" width="30" height="40" rx="3" fill="#388E3C" />
        <rect x="540" y="255" width="35" height="45" rx="3" fill="#0097A7" />
        <rect x="600" y="250" width="40" height="50" rx="3" fill="#FFA000" />
        <rect x="650" y="260" width="30" height="40" rx="3" fill="#D32F2F" />
        
        <rect x="750" y="350" width="40" height="50" rx="3" fill="#7B1FA2" />
        <rect x="800" y="360" width="30" height="40" rx="3" fill="#388E3C" />
        <rect x="840" y="355" width="35" height="45" rx="3" fill="#1976D2" />
        <rect x="900" y="350" width="40" height="50" rx="3" fill="#E64A19" />
        <rect x="950" y="360" width="30" height="40" rx="3" fill="#FBC02D" />
        
        {/* Fresh produce visual elements */}
        <circle cx="200" y="500" r="20" fill="#8BC34A" />
        <circle cx="250" y="500" r="15" fill="#F44336" />
        <circle cx="290" y="500" r="18" fill="#FF9800" />
        <circle cx="330" y="500" r="15" fill="#8BC34A" />
        <circle cx="370" y="500" r="20" fill="#FFEB3B" />
      </g>
      
      {/* Overlay for text readability */}
      <rect width="1200" height="600" fill="rgba(0,0,0,0.4)" />
      
      {/* Define gradients */}
      <defs>
        <linearGradient id="paint0_linear" x1="600" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1A2617" />
          <stop offset="1" stopColor="#3B4A3F" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default HeroImage;