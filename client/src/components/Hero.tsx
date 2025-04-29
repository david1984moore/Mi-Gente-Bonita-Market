import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import exterior1 from "../assets/store-photos/exterior1.png";
import exterior2 from "../assets/store-photos/exterior2.png";
import exterior3 from "../assets/store-photos/exterior3.png";
import sign from "../assets/store-photos/sign.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
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
  
  const images = [
    { 
      src: exterior1,
      position: 'center 30%' // Focus more on the storefront
    },
    { 
      src: exterior2,
      position: 'center 40%' // Show more of the entrance area
    },
    { 
      src: exterior3,
      position: 'center 25%' // Highlight the store signage
    },
    { 
      src: sign,
      position: 'center 20%' // Focus on the sign details
    }
  ];

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
    <div className="relative overflow-hidden" style={{ height: '80vh' }}>
      {/* Active images layer - both visible during transition */}
      {images.map((image, index) => (
        <div 
          key={index}
          className="absolute inset-0 hero-slide"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${image.src})`,
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
        className="relative z-20 flex items-center justify-center pt-16 h-full"
      >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-lg mx-auto relative z-10">
          {/* Extremely minimal container to maximize image visibility */}
          <div className="bg-black/20 p-4 rounded-sm backdrop-blur-[0.5px]">
            <h1 className="text-2xl md:text-4xl font-['Poppins'] font-bold text-white mb-2 tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,1)] elegant-text hero-text-primary">
              Bienvenidos a<br /> 
              <span className="text-[#FFD700] inline-block mt-1 hero-title-highlight text-shadow-lg">Mi Gente Bonita Market</span>
            </h1>
            <p className="text-base md:text-lg text-white/95 mb-4 tracking-wider font-light drop-shadow-[0_2px_4px_rgba(0,0,0,1)] elegant-text hero-text-secondary">
              Your trusted source for authentic Latino products
            </p>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button 
                className="bg-[#D41414]/80 hover:bg-[#3D9C42]/90 text-white font-medium py-1.5 px-5 rounded-full transition duration-300 text-sm tracking-wider"
              >
                Discover More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Hero;
