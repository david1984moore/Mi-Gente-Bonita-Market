import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import freshNopales from "../assets/store-photos/fresh-nopales.png";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import storefront from "../assets/store-photos/storefront.png";

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
      src: storefront,
      position: 'center' // Showcase the market storefront
    },
    { 
      src: groceryAisle,
      position: 'center' // Showcase the grocery aisle
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
    <div className="relative overflow-hidden" style={{ height: '90vh' }}>
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
        className="relative z-20 flex items-center justify-center pt-16 h-full"
      >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto relative z-10">
          {/* Modern glass effect container */}
          <div className="bg-black/30 p-8 rounded-xl backdrop-blur-sm border border-white/10 shadow-2xl animate-in slide-in-from-bottom duration-700">
            <h1 className="text-3xl md:text-5xl font-['Poppins'] font-bold text-white mb-4 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,1)] elegant-text hero-text-primary">
              Bienvenidos a<br /> 
              <span className="text-[#FFD700] inline-block mt-2 hero-title-highlight drop-shadow-[0_2px_5px_rgba(0,0,0,1)]">Mi Gente Bonita Market</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 tracking-wider font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,1)] elegant-text hero-text-secondary max-w-xl mx-auto">
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
                  className="bg-[#D41414]/90 hover:bg-[#D41414] text-white font-medium py-2.5 px-6 rounded-lg transition duration-300 text-base tracking-wider shadow-lg hover:shadow-xl group-hover:translate-y-[-2px]"
                >
                  Discover More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Hero;