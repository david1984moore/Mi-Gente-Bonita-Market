
import logoImage from './logo.png';

export const Logo = ({ className }: { className?: string }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Enhanced SVG logo with vibrant colors and visual effects
  return (
    <div 
      className={`cursor-pointer relative inline-block ${className || ''}`}
      onClick={scrollToTop}
    >
      {/* Background image with overlay effect */}
      <div className="relative">
        <img
          src={logoImage}
          alt=""
          className="w-full h-auto opacity-90"
        />
        
        {/* Text overlay with enhanced styling */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg 
            viewBox="0 0 400 180" 
            className="w-full h-full"
            aria-hidden="true"
          >
            {/* Golden glow filter */}
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feFlood floodColor="#FFD700" floodOpacity="0.3" result="glow" />
                <feComposite in="glow" in2="blur" operator="in" result="glowBlur" />
                <feMerge>
                  <feMergeNode in="glowBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            
            {/* Main title with 3D effect */}
            <text 
              x="50%" 
              y="40%" 
              textAnchor="middle" 
              className="text-5xl font-bold" 
              fill="#FFD700" 
              stroke="#AA7700" 
              strokeWidth="1.5"
              filter="url(#glow)"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Mi Gente Bonita
            </text>
            
            {/* Subtitle with contrast */}
            <text 
              x="50%" 
              y="75%" 
              textAnchor="middle" 
              className="text-4xl font-bold" 
              fill="#FFFFFF" 
              stroke="#222222" 
              strokeWidth="1"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Market
            </text>
          </svg>
        </div>
      </div>
      
      {/* Accessible text for screen readers */}
      <span className="sr-only">Mi Gente Bonita Market</span>
    </div>
  );
};
