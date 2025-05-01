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
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${image.src})`,
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
          <div className="max-w-2xl mx-auto relative z-10">
            {/* Enhanced glass effect container with decorative border */}
            <div className="bg-black/40 p-6 sm:p-9 rounded-xl backdrop-blur-md border border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.3)] animate-in slide-in-from-bottom duration-700 relative overflow-hidden">
              {/* Subtle accent corners */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#FFD700]/50 rounded-tl-lg"></div>
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#FFD700]/50 rounded-tr-lg"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#FFD700]/50 rounded-bl-lg"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#FFD700]/50 rounded-br-lg"></div>
              
              {/* Main heading with enhanced styling */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-['Poppins'] font-bold text-white mb-3 md:mb-5 tracking-wide text-shadow-lg elegant-text hero-text-primary">
                <span className="inline-block mt-1 relative">
                  Bienvenidos a
                  <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-[1px] bg-white/40"></span>
                </span>
                <br /> 
                <span 
                  className="text-[#FFD700] inline-block mt-2 md:mt-3 hero-title-highlight relative"
                  style={{ animation: 'textGlow 3.5s ease-in-out infinite' }}
                >
                  Mi Gente Bonita Market
                  {/* Decorative line below the main title */}
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent"></span>
                </span>
              </h1>
              
              {/* Enhanced subtitle with better spacing and animation */}
              <p className="text-base sm:text-lg md:text-xl text-white/95 mb-7 sm:mb-9 tracking-wider font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,1)] elegant-text hero-text-secondary max-w-xl mx-auto relative">
                <span className="relative">
                  Your trusted source for authentic Latino products
                  <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-white/30"></span>
                </span>
              </p>
              
              {/* Button with enhanced hover effect */}
              <div className="flex gap-4 justify-center">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700] to-[#D41414] opacity-75 rounded-lg blur-sm group-hover:opacity-100 transition duration-300"></div>
                  <Button 
                    className="relative bg-[#D41414] hover:bg-[#D41414]/90 text-white font-medium py-2.5 px-7 rounded-lg transition duration-300 text-base tracking-wider shadow-lg hover:shadow-xl group-hover:translate-y-[-2px]"
                  >
                    Discover More
                  </Button>
                </Link>
              </div>
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