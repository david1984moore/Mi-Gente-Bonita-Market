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
      {/* Modern gradient overlay for images */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-5"></div>
      
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
          }}
        />
      ))}
      
      {/* Cinematic dark vignette for depth */}
      <div className="absolute inset-0 z-15 opacity-50 pointer-events-none" 
           style={{ 
             background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.6) 100%)'
           }}>
      </div>
      
      <section 
        id="home" 
        className="relative z-20 flex items-center justify-center h-full mb-none px-4"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 md:col-start-3 text-center relative">
              {/* Modern, animated reveal content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="overflow-hidden mb-3 md:mb-5 w-full">
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-['Inter'] font-bold tracking-tight animate-fade-in-down relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-100 shadow-text">
                      {t("hero.welcome")}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent animate-pulse-slow"></span>
                  </h1>
                </div>
                
                <div className="overflow-hidden mb-6 md:mb-8 w-full">
                  <div className="relative inline-block">
                    <h2 className="text-[#FFDE59] text-3xl sm:text-4xl md:text-7xl font-['Inter'] font-bold tracking-tight text-shadow-lg animate-fade-in-up drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                      <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-[#FFDE59] via-[#FFDE59] to-[#FFE980] bg-clip-text text-transparent">Mi Gente Bonita</span>
                      </span>
                      <span className="relative inline-block ml-2">
                        <span className="bg-gradient-to-r from-[#FFDE59] via-white to-[#FFDE59] bg-clip-text text-transparent">Market</span>
                      </span>
                    </h2>
                    
                    {/* Enhanced modern underline effect */}
                    <div className="absolute -bottom-3 left-0 w-full h-[4px] animate-pulse-slow">
                      <div className="h-full w-full bg-gradient-to-r from-[#D41414]/80 via-[#FFDE59] to-[#D41414]/80 rounded-full shadow-lg"></div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-hidden mb-10 md:mb-12 w-full">
                  <div className="relative inline-block">
                    <p className="text-base sm:text-xl md:text-2xl text-white tracking-tight font-light animate-fade-in-up animation-delay-300 max-w-3xl mx-auto leading-relaxed shadow-text px-4 py-2">
                      <span className="relative z-10">{t("hero.tagline")}</span>
                    </p>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-lg -z-0 transform scale-105 glow-subtle"></div>
                  </div>
                </div>
                
                {/* Stylish CTA button with enhanced hover effect */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="inline-block group"
                >
                  <button 
                    className="animate-fade-in-up animation-delay-500 bg-[#D41414]/90 text-white hover:bg-[#D41414] px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 font-medium tracking-wide border-2 border-transparent hover:border-[#FFDE59]/50 relative overflow-hidden"
                  >
                    <span className="relative z-10">{t("hero.hoursBtn")}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#D41414] to-[#D41414]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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