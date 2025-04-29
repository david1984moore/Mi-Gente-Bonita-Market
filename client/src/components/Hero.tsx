import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import exterior1 from "../assets/store-photos/exterior1.png";
import exterior2 from "../assets/store-photos/exterior2.png";
import exterior3 from "../assets/store-photos/exterior3.png";
import sign from "../assets/store-photos/sign.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  
  const images = [
    { 
      src: exterior1,
      position: 'center 30%', // Focus more on the storefront
      alt: "Mi Gente Bonita Market exterior view"
    },
    { 
      src: exterior2,
      position: 'center 40%', // Show more of the entrance area
      alt: "Entrance to Mi Gente Bonita Market"
    },
    { 
      src: exterior3,
      position: 'center 25%', // Highlight the store signage
      alt: "Mi Gente Bonita Market storefront"
    },
    { 
      src: sign,
      position: 'center 20%', // Focus on the sign details
      alt: "Mi Gente Bonita Market sign"
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

  // Scroll indicator animation
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollIndicatorRef.current) return;
      
      if (window.scrollY > 100) {
        scrollIndicatorRef.current.style.opacity = '0';
      } else {
        scrollIndicatorRef.current.style.opacity = '1';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="relative overflow-hidden" style={{ height: '85vh' }}>
      {/* Preload images div - hidden but helps with performance */}
      <div className="preload-images">
        {images.map((img, i) => (
          <img key={`preload-${i}`} src={img.src} alt={img.alt} />
        ))}
      </div>
      
      {/* Active images layer with enhanced transitions */}
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
          }}
          aria-hidden={index !== currentImageIndex}
        />
      ))}
      
      {/* Subtle overlay patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 z-10 pointer-events-none"></div>
      
      {/* Content Section */}
      <section 
        id="home" 
        className="relative z-20 flex items-center justify-center pt-16 h-full"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto relative z-10 hero-content">
            {/* Enhanced backdrop with more sophisticated blur and shadow */}
            <div className="p-6 sm:p-8 rounded-xl backdrop-blur-sm bg-gradient-to-br from-black/40 to-black/20 border border-white/10 shadow-2xl">
              <h1 className="text-3xl md:text-5xl font-['Poppins'] font-bold text-white mb-3 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] hero-text-primary">
                Bienvenidos a<br /> 
                <span className="text-[#FFD700] inline-block mt-2 hero-title-highlight text-shadow-lg">
                  Mi Gente Bonita Market
                </span>
              </h1>
              
              <p className="text-base md:text-xl text-white/95 mb-6 tracking-wider font-light drop-shadow-[0_2px_4px_rgba(0,0,0,1)] hero-text-secondary max-w-md mx-auto">
                Your trusted source for authentic Latino products in Delaware
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    className="bg-[#D41414] hover:bg-[#D41414]/90 text-white font-medium py-2 px-6 rounded-lg shadow-lg transition-all duration-300 text-base w-full sm:w-auto hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    Discover Our Story
                  </Button>
                </Link>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="w-full sm:w-auto"
                >
                  <Button 
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30 font-medium py-2 px-6 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-300 text-base w-full sm:w-auto hover:shadow-xl hover:translate-y-[-2px]"
                  >
                    Visit Us Today
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div 
            ref={scrollIndicatorRef}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white transition-opacity duration-700"
          >
            <span className="text-sm mb-2 opacity-80">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </section>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Hero;
