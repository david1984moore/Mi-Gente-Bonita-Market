import { ReactNode } from 'react';

// This component creates a static image gallery representation
// Used as a backup for any missing image files
export const GroceryGalleryImage = (): ReactNode => {
  return (
    <svg width="1012" height="600" viewBox="0 0 1012 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1012" height="600" fill="#f8f9fa" />
      
      {/* Top Row */}
      <rect x="10" y="30" width="520" height="170" rx="8" fill="#e9ecef" />
      <text x="270" y="115" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Latino Groceries and Goya Products</text>
      
      <rect x="540" y="30" width="220" height="170" rx="8" fill="#e9ecef" />
      <text x="650" y="115" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Fresh Produce</text>
      
      <rect x="770" y="30" width="232" height="170" rx="8" fill="#e9ecef" />
      <text x="886" y="115" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Fresh Citrus Fruits</text>
      
      {/* Middle Row */}
      <rect x="10" y="210" width="246" height="180" rx="8" fill="#e9ecef" />
      <text x="133" y="300" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Fresh Tomatoes and Peppers</text>
      
      <rect x="266" y="210" width="246" height="180" rx="8" fill="#e9ecef" />
      <text x="389" y="300" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Cactus Paddles (Nopales)</text>
      
      <rect x="522" y="210" width="480" height="180" rx="8" fill="#e9ecef" />
      <text x="762" y="300" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Colorful Piñatas and Fresh Fruits</text>
      
      {/* Bottom Row */}
      <rect x="10" y="400" width="246" height="180" rx="8" fill="#e9ecef" />
      <text x="133" y="490" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Tajin Seasoning Bottles</text>
      
      <rect x="266" y="400" width="480" height="180" rx="8" fill="#e9ecef" />
      <text x="506" y="490" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Latino Snacks Aisle</text>
      
      <rect x="756" y="400" width="246" height="180" rx="8" fill="#e9ecef" />
      <text x="879" y="490" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#495057">Produce Section</text>
    </svg>
  );
};

export default GroceryGalleryImage;