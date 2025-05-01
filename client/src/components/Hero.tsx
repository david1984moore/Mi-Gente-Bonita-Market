import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${image.src})`,
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
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto relative z-10 animate-in slide-in-from-bottom duration-700">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-['Poppins'] font-bold text-white mb-2 md:mb-3 tracking-wide text-shadow-lg hero-text-primary">
                Bienvenidos a
              </h1>
              <h2 className="text-[#FFD700] text-3xl sm:text-4xl md:text-6xl font-['Poppins'] font-bold mb-5 md:mb-6 tracking-wider text-shadow-lg hero-title-highlight drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
                Mi Gente Bonita Market
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 tracking-wide font-medium text-shadow-lg hero-text-secondary max-w-xl mx-auto">
                Your trusted source for authentic Latino products
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="group"
                >
                  <Button 
                    className="bg-[#D41414] hover:bg-[#D41414]/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 text-base tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105 group-hover:translate-y-[-2px] relative overflow-hidden animate-in fade-in duration-700 delay-150 after:absolute after:inset-0 after:z-[-1] after:bg-gradient-to-r after:from-[#D41414]/80 after:to-[#D41414] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500"
                  >
                    Discover More
                  </Button>
                </Link>
              </div>
          </div>
        </div>
      </section>
      
      {/* Triangular shape divider to connect with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden text-[#F8FDF9] z-10 section-connector">
        <svg
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M600 0L0 120H1200L600 0Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;