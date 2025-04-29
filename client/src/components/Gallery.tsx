import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Info } from "lucide-react";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import freshTomatoesPeppers from "../assets/store-photos/fresh-tomatoes-peppers.png";
import cactusPaddles from "../assets/store-photos/cactus-paddles-display.png";
import tajinSeasoning from "../assets/store-photos/tajin-seasoning-bottles.png";
import produceSection from "../assets/store-photos/produce-section-colorful.png";
import pinatasAndFruits from "../assets/store-photos/pinatas-and-fruits.png";
import snacksAisle from "../assets/store-photos/snacks-aisle.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [autoplay, setAutoplay] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(9).fill(false));
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Refs for intersection observer
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    { 
      src: groceryAisle, 
      alt: "Selection of authentic Latino groceries and Goya products",
      objectPosition: "center",
      span: "col-span-2",
      description: "Our shelves are stocked with authentic Latino grocery products, including a wide selection of Goya items."
    },
    { 
      src: freshProduce, 
      alt: "Fresh vegetables and produce from our market",
      objectPosition: "center",
      span: "col-span-1",
      description: "We offer a variety of fresh vegetables and produce sourced locally and imported from Latin America."
    },
    { 
      src: freshLemons, 
      alt: "Fresh lemons and citrus fruits",
      objectPosition: "center",
      span: "col-span-1",
      description: "Our citrus selection includes fresh lemons, limes, and other tropical fruits essential for Latino cuisine."
    },
    { 
      src: freshTomatoesPeppers, 
      alt: "Fresh tomatoes and peppers in crates",
      objectPosition: "center",
      span: "col-span-1",
      description: "We carry a colorful variety of tomatoes and peppers perfect for your traditional Latino recipes."
    },
    { 
      src: cactusPaddles, 
      alt: "Fresh cactus paddles (nopales) display",
      objectPosition: "center",
      span: "col-span-1",
      description: "Our fresh nopales (cactus paddles) are a staple in Mexican cuisine, perfect for tacos and salads."
    },
    { 
      src: pinatasAndFruits, 
      alt: "Colorful piñatas, fresh fruits and Latino products", 
      objectPosition: "center",
      span: "col-span-2",
      description: "We carry festive piñatas for celebrations alongside our fresh produce and authentic Latino products."
    },
    { 
      src: tajinSeasoning, 
      alt: "Tajin seasoning bottles - popular Mexican seasoning",
      objectPosition: "center",
      span: "col-span-1",
      description: "Find popular Mexican seasonings like Tajin, perfect for adding flavor to fruits, vegetables, and more."
    },
    { 
      src: snacksAisle, 
      alt: "Latino snacks aisle with popular chips and treats",
      objectPosition: "center",
      span: "col-span-2",
      description: "Our snack aisle features a wide variety of authentic Latino chips, candies, and treats."
    },
    { 
      src: produceSection, 
      alt: "Colorful produce section with festive decorations",
      objectPosition: "center",
      span: "col-span-2",
      description: "Our vibrant produce section showcases the freshest fruits and vegetables, essential for Latino cuisine."
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay, images.length]);
  
  // Pause autoplay when interacting with slideshow
  const pauseAutoplay = () => {
    setAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    const timeout = setTimeout(() => {
      setAutoplay(true);
    }, 10000);
    
    return () => clearTimeout(timeout);
  };

  // Set up intersection observer for animation
  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            // Mark this image as loaded with a slight delay for staggered effect
            setTimeout(() => {
              setIsLoaded(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 100);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const openModal = (src: string, index: number) => {
    setSelectedImage(src);
    setSelectedIndex(index);
    pauseAutoplay();
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      const nextIndex = (selectedIndex + 1) % images.length;
      setSelectedIndex(nextIndex);
      setSelectedImage(images[nextIndex].src);
    } else {
      const prevIndex = (selectedIndex - 1 + images.length) % images.length;
      setSelectedIndex(prevIndex);
      setSelectedImage(images[prevIndex].src);
    }
    pauseAutoplay();
  };
  
  const navigateSlide = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
    pauseAutoplay();
  };
  
  const goToSlide = (index: number) => {
    setActiveIndex(index);
    pauseAutoplay();
  };

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-5">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>
        
        {/* Featured Slideshow */}
        <div 
          className="mb-12 relative"
          ref={slideshowRef}
          onMouseEnter={() => pauseAutoplay()}
          onTouchStart={() => pauseAutoplay()}
        >
          <div className="overflow-hidden rounded-xl shadow-xl relative max-w-5xl mx-auto">
            {/* Main Slideshow */}
            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] bg-gray-100">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 transform 
                    ${activeIndex === index ? 'opacity-100 translate-x-0 z-20' : 
                      activeIndex === (index + 1) % images.length ? 'opacity-0 translate-x-full z-10' : 
                      activeIndex === (index - 1 + images.length) % images.length ? 'opacity-0 -translate-x-full z-10' : 
                      'opacity-0 translate-x-0 z-0'}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: image.objectPosition }}
                  />
                  
                  {/* Caption/Info */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent pt-10 pb-4 px-6 text-white">
                    <div className="max-w-5xl mx-auto">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-xl md:text-2xl font-semibold mb-1">{image.alt}</h3>
                          {showInfo && (
                            <p className="text-white/90 text-sm md:text-base max-w-2xl animate-in fade-in duration-300">
                              {image.description}
                            </p>
                          )}
                        </div>
                        <button 
                          onClick={() => setShowInfo(!showInfo)}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                          aria-label={showInfo ? "Hide details" : "Show details"}
                        >
                          <Info className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Navigation Controls */}
              <button 
                onClick={() => navigateSlide('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all focus:outline-none shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              
              <button 
                onClick={() => navigateSlide('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all focus:outline-none shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </div>
            
            {/* Pagination Indicators */}
            <div className="flex justify-center space-x-2 mt-4 pb-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                    ${activeIndex === index ? 'bg-black/90 w-6' : 'bg-black/30 hover:bg-black/50'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mx-auto max-w-full">
          {images.map((image, index) => (
            <div 
              key={index} 
              ref={(el) => { imageRefs.current[index] = el }}
              className={`${image.span} ${index === 0 || index === 6 ? 'h-40 md:h-56' : 'h-32 md:h-48'} overflow-hidden rounded-xl cursor-pointer group relative 
                         transform transition-all duration-500 ease-out hover:z-10 hover:scale-[1.02] 
                         ${isLoaded[index] ? 'translate-y-0 opacity-100 shadow-lg' : 'translate-y-8 opacity-0'}`}
              onClick={() => openModal(image.src, index)}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="w-full h-full relative bg-gray-100">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: image.objectPosition }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <p className="text-sm font-medium line-clamp-2">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced modal with navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300" 
            onClick={closeModal}
          >
            <div className="relative max-w-7xl w-full animate-in zoom-in-95 duration-300">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute -top-14 right-0 text-white/80 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Navigation buttons */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 md:-translate-x-12">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="p-3 rounded-full bg-black/40 text-white/90 hover:bg-black/70 hover:text-white transition-all focus:outline-none border border-white/20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 md:translate-x-12">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="p-3 rounded-full bg-black/40 text-white/90 hover:bg-black/70 hover:text-white transition-all focus:outline-none border border-white/20"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-2 rounded-xl overflow-hidden border border-white/20 bg-black/40 shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt={images[selectedIndex].alt} 
                  className="w-full rounded-lg max-h-[85vh] object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              
              {/* Image info */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-6">
                <div className="bg-black/60 px-4 py-2 rounded-lg text-white/90 text-sm font-medium border border-white/20 max-w-xl">
                  <p>{images[selectedIndex].alt}</p>
                  <p className="text-white/70 text-xs mt-1">{images[selectedIndex].description}</p>
                </div>
                <div className="bg-black/60 px-4 py-2 rounded-full text-white/90 text-sm font-medium border border-white/20">
                  {selectedIndex + 1} of {images.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;