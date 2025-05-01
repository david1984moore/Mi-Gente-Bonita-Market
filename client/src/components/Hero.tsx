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
    <div ref={heroRef} className="relative overflow-hidden" style={{ height: '100vh', paddingTop: '1rem' }}>
      {/* Darker shade overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      
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
      
      {/* Enhanced cinematic dark vignette for better text visibility */}
      <div className="absolute inset-0 z-15 opacity-80 pointer-events-none" 
           style={{ 
             background: 'radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.8) 100%)'
           }}>
      </div>
      
      {/* Additional linear gradient for better contrast behind text */}
      <div className="absolute inset-0 z-16 opacity-50 pointer-events-none"
           style={{
             background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.6) 100%)'
           }}>
      </div>
      
      <section 
        id="home" 
        className="relative z-20 flex items-center justify-center h-[calc(100%-80px)] mb-none px-4 pt-32 sm:pt-36 md:pt-28"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 md:col-start-3 text-center relative">
              {/* Content layout with Welcome to visible - no background */}
              <div className="relative z-10 flex flex-col items-center py-6 px-6 mb-10 -mt-12">
                {/* Small decorative Mexican-style flourish */}
                <div className="mb-2 opacity-80">
                  <div className="flex items-center">
                    <div className="h-[2px] w-[20px] md:w-[30px] bg-gradient-to-r from-transparent to-[#FFDE59]"></div>
                    <div className="mx-3 text-[#FFDE59] text-2xl" style={{ transform: 'scaleX(1.2)' }}>✼</div>
                    <div className="h-[2px] w-[20px] md:w-[30px] bg-gradient-to-l from-transparent to-[#FFDE59]"></div>
                  </div>
                </div>
                
                <div className="overflow-hidden w-full mb-1">
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-['Libre_Baskerville'] text-white tracking-tight animate-fade-in-down"
                      style={{ 
                        textShadow: '0 1px 1px black, 0 2px 3px black, 0 3px 5px black', 
                        letterSpacing: '0.04em',
                        fontWeight: '600'
                      }}>
                    {t("hero.welcome")}
                  </h1>
                </div>
                
                <div className="overflow-hidden mb-4 md:mb-6 w-full">
                  <div className="relative inline-block">
                    <h2 className="text-[#FFE057] text-3xl sm:text-4xl md:text-6xl font-['Libre_Baskerville'] tracking-tight animate-fade-in-up"
                        style={{ 
                          textShadow: '0 1px 1px black, 0 2px 2px black, 0 4px 4px rgba(0,0,0,0.9), 0 6px 8px rgba(0,0,0,0.8)', 
                          letterSpacing: '0.03em',
                          fontWeight: '700',
                          color: '#FFE057',
                          fontVariationSettings: '"wght" 700',
                          transform: 'scaleY(1.05)'
                        }}>
                      Mi Gente Bonita Market
                    </h2>
                    
                    {/* Mexican-inspired decorative border/underline */}
                    <div className="absolute -bottom-2 left-0 w-full h-[3px] animate-pulse-slow">
                      <div className="h-full w-full bg-gradient-to-r from-[#D41414]/80 via-[#FFDE59] to-[#D41414]/80 rounded-sm"></div>
                    </div>
                    <div className="absolute -bottom-5 left-0 w-full h-[1px] animate-pulse-slow" style={{ animationDelay: '0.5s' }}>
                      <div className="h-full w-[70%] mx-auto bg-gradient-to-r from-transparent via-[#FFDE59]/90 to-transparent"></div>
                    </div>
                    
                    {/* Traditional Mexican decorative motif */}
                    <div className="absolute -bottom-12 left-0 w-full flex justify-center opacity-80">
                      <div className="flex items-center">
                        <div className="text-[#D41414] mx-1">❦</div>
                        <div className="text-[#FFDE59] mx-1">✿</div>
                        <div className="text-[#D41414] mx-1">❦</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-hidden mb-6 md:mb-8 w-full">
                </div>
                
                {/* Mexican-style CTA button */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}
                  className="inline-block mt-2"
                >
                  <button 
                    className="animate-fade-in-up animation-delay-500 cta-button bg-[#D41414]/90 text-white hover:bg-[#D41414] px-7 py-3 text-base font-['Libre_Baskerville'] border-[1px] border-[#FFDE59]/70 rounded-sm shadow-lg hover:shadow-xl transition-all duration-500 group font-medium tracking-wide"
                    style={{
                      letterSpacing: '0.06em',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
                    }}
                  >
                    {t("contact.hours.title")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modern wave divider - increased z-index and height to fully cover content */}
      <div className="absolute bottom-0 left-0 right-0 z-30 text-white pointer-events-none">
        <div className="relative">
          {/* Extra padding space to ensure wave fully covers any content */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white z-10"></div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" preserveAspectRatio="none" className="w-full h-auto relative z-20">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,90.7C672,107,768,149,864,154.7C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;