import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
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

  // Preload images for smoother transitions
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image.src;
    });
  }, []);

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
    <div className="relative overflow-hidden" style={{ height: '92vh', paddingTop: '0' }}>
      {/* Active images layer - both visible during transition */}
      {images.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 hero-slide"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.4)), url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: image.position,
            opacity: index === currentImageIndex ? (isTransitioning ? 0 : 1) : (index === nextImageIndex ? 1 : 0),
            zIndex: index === currentImageIndex ? 10 : (index === nextImageIndex ? 5 : 0),
            transition: 'opacity 3s cubic-bezier(0.4, 0.0, 0.2, 1)', // Smooth cubic-bezier transition
          }}
        />
      ))}
      
      <section 
        id="home" 
        className="relative z-20 flex items-center justify-center pt-20 sm:pt-24 md:pt-28 h-full mb-none"
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto relative z-10 animate-in slide-in-from-bottom duration-700">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-['Inter'] font-bold text-white mb-2 md:mb-3 tracking-tight text-shadow-md hero-text-primary">
                {t("hero.welcome")}
              </h1>
              <h2 className="text-[#FFDE59] text-3xl sm:text-4xl md:text-6xl font-['Inter'] font-bold mb-5 md:mb-6 tracking-tight text-shadow-md hero-title-highlight drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Mi Gente Bonita Market
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 tracking-tight font-normal text-shadow-md hero-text-secondary max-w-xl mx-auto">
                {t("hero.tagline")}
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="inline-block"
                >
                  <div className="animate-in fade-in duration-700 delay-150">
                    <Button 
                      className="bg-[#D41414] text-white font-medium py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-base tracking-tight hover:bg-[#B01212] flex items-center justify-center group relative overflow-hidden"
                      onClick={() => {
                        // Tactile feedback on click
                        if (window.navigator.vibrate) {
                          window.navigator.vibrate(50);
                        }
                      }}
                    >
                      <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300 ease-in-out">
                        {t("hero.discoverMore")}
                      </span>
                    </Button>
                  </div>
                </Link>
              </div>
          </div>
        </div>
      </section>
      
      {/* Modern wave divider to connect with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden text-white z-10 section-connector">
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            opacity=".25"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            opacity=".5"
          />
          <path 
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;