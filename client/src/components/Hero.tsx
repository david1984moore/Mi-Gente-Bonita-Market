import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import freshNopales from "../assets/store-photos/fresh-nopales.png";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import citrusFruitsDisplay from "../assets/store-photos/citrus-fruits-display.png";
import snackShelves from "../assets/store-photos/snack-shelves.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const { t } = useLanguage();
  
  const heroRef = useRef<HTMLDivElement>(null);
  
  const images = [
    { 
      src: freshNopales,
      position: 'center' // Showcase fresh cactus paddles (nopales)
    },
    { 
      src: citrusFruitsDisplay,
      position: 'center' // Showcase colorful citrus fruits display
    },
    { 
      src: groceryAisle,
      position: 'center' // Showcase the grocery aisle
    },
    { 
      src: snackShelves,
      position: 'center' // Display colorful snack selection shelves
    },
    { 
      src: freshProduce,
      position: 'center' // Display the fresh produce selection
    },
    { 
      src: freshLemons,
      position: 'center' // Highlight the fresh citrus fruits
    }
  ];
  
  // Preload images for smoother transitions
  useEffect(() => {
    const imagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.src;
        img.onload = () => resolve(img);
      });
    });
    
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  // Image transition effect
  useEffect(() => {
    const transitionInterval = 8000; // Total time between transitions
    const fadeTime = 3000; // Longer crossfade for smoother transition
    
    const interval = setInterval(() => {
      // Start transition
      setIsTransitioning(true);
      
      // After fadeTime, complete the transition
      const timer = setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % images.length);
        setIsTransitioning(false);
      }, fadeTime);
      
      return () => clearTimeout(timer);
    }, transitionInterval);
    
    return () => clearInterval(interval);
  }, [nextImageIndex, images.length]);

  return (
    <div ref={heroRef} className="relative overflow-hidden" style={{ height: '100vh', paddingTop: '0' }}>
      {/* Enhanced gradient overlay for images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-5"></div>
      
      {/* Active images layer - both visible during transition */}
      {images.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 hero-slide"
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: image.position,
            opacity: index === currentImageIndex ? (isTransitioning ? 0 : 1) : (index === nextImageIndex ? 1 : 0),
            zIndex: index === currentImageIndex ? 10 : (index === nextImageIndex ? 5 : 0),
            transition: 'opacity 3s cubic-bezier(0.4, 0.0, 0.2, 1)', // Smooth cubic-bezier transition
            filter: 'brightness(0.85) contrast(1.1)', // Enhanced image contrast
          }}
        />
      ))}
      
      {/* Improved cinematic dark vignette for depth */}
      <div className="absolute inset-0 z-15 opacity-60 pointer-events-none" 
           style={{ 
             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.7) 100%)'
           }}>
      </div>
      
      {/* Subtle moving light overlay */}
      <div className="absolute inset-0 z-16 opacity-30 pointer-events-none overflow-hidden">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIiAvPjwvc3ZnPg==')] animate-float"></div>
      </div>
      
      <section 
        id="home" 
        className="relative z-20 flex items-center justify-center h-full mb-none px-4"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-10 md:col-start-2 text-center relative">
              {/* Modern, enhanced reveal content with glass effect */}
              <div className="relative z-10 flex flex-col items-center px-4 py-8 rounded-3xl glass-hero backdrop-blur-md">
                {/* Welcome text with enhanced animation */}
                <div className="overflow-hidden mb-2 md:mb-3 w-full">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Inter'] font-bold text-white tracking-tight animate-fade-in-down 
                   drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] letter-spacing-wider">
                    {t("hero.welcome")}
                  </h1>
                </div>
                
                {/* Market name with enhanced styling */}
                <div className="overflow-hidden mb-6 md:mb-7 w-full">
                  <div className="relative inline-block transform transition-transform duration-700 hover:scale-105">
                    <h2 className="text-[#FFDE59] text-4xl sm:text-5xl md:text-7xl font-['Inter'] font-extrabold tracking-tight 
                    text-shadow-lg animate-fade-in-up drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]" 
                    style={{letterSpacing: '0.02em', textTransform: 'uppercase'}}>
                      Mi Gente Bonita<br />Market
                    </h2>
                    
                    {/* Enhanced modern underline effect */}
                    <div className="absolute -bottom-3 left-0 w-full h-[4px] animate-pulse-slow">
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-[#FFDE59] to-transparent rounded-full 
                      shadow-[0_0_8px_rgba(255,222,89,0.8)]"></div>
                    </div>
                  </div>
                </div>
                
                {/* Tagline with enhanced styling */}
                <div className="overflow-hidden mb-8 md:mb-10 w-full">
                  <p className="text-xl sm:text-2xl md:text-3xl text-white tracking-wide font-medium animate-fade-in-up 
                  animation-delay-300 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" 
                  style={{letterSpacing: '0.015em'}}>
                    {t("hero.tagline")}
                  </p>
                </div>
                
                {/* Enhanced stylish CTA button */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="inline-block transform transition-transform duration-500 hover:scale-105"
                >
                  <button 
                    className="animate-fade-in-up animation-delay-500 cta-button bg-[#D41414] text-white hover:bg-[#D41414]/90 
                    px-10 py-4 text-xl rounded-full shadow-[0_4px_20px_rgba(212,20,20,0.4)] hover:shadow-[0_6px_25px_rgba(212,20,20,0.6)] 
                    transition-all duration-500 group font-semibold tracking-wide"
                    style={{letterSpacing: '0.03em'}}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <span className="mr-2">Hours of Operation</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" preserveAspectRatio="none" className="w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,90.7C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;