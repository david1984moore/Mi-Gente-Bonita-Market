import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import freshTomatoesPeppers from "../assets/store-photos/fresh-tomatoes-peppers.png";
import cactusPaddles from "../assets/store-photos/cactus-paddles-display.png";
import tajinSeasoning from "../assets/store-photos/tajin-seasoning-bottles.png";
import produceSection from "../assets/store-photos/produce-section-colorful.png";
import snacksAisle from "../assets/store-photos/snacks-aisle.png";
import citrusFruitsDisplay from "../assets/store-photos/citrus-fruits-display.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(8).fill(false));
  
  // Refs for intersection observer
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const images = [
    { 
      src: groceryAisle, 
      alt: "Selection of authentic Latino groceries and Goya products",
      objectPosition: "center",
      span: "col-span-2"
    },
    { 
      src: citrusFruitsDisplay, 
      alt: "Fresh oranges and limes display",
      objectPosition: "center",
      span: "col-span-1"
    },
    { 
      src: freshProduce, 
      alt: "Fresh vegetables and produce from our market",
      objectPosition: "center",
      span: "col-span-1"
    },
    { 
      src: freshLemons, 
      alt: "Fresh lemons and citrus fruits",
      objectPosition: "center",
      span: "col-span-1"
    },
    { 
      src: freshTomatoesPeppers, 
      alt: "Fresh tomatoes and peppers in crates",
      objectPosition: "center",
      span: "col-span-1"
    },
    { 
      src: cactusPaddles, 
      alt: "Fresh cactus paddles (nopales) display",
      objectPosition: "center",
      span: "col-span-1"
    },
    
    { 
      src: tajinSeasoning, 
      alt: "Tajin seasoning bottles - popular Mexican seasoning",
      objectPosition: "center",
      span: "col-span-1"
    },
  ];

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
  };
  
  // Add keyboard support for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'ArrowRight':
          navigateImage('next');
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'Escape':
          closeModal();
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <section id="gallery" className="pt-4 pb-12 md:pt-6 md:pb-14 bg-gradient-to-b from-white to-gray-50 w-full section-connector">
      <div className="w-full px-0 sm:px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
            Our Products
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#D41414]/30"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-3">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>

        {/* Gallery grid layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mx-auto max-w-full">
          {images.map((image, index) => (
            <div 
              key={index} 
              ref={(el) => { imageRefs.current[index] = el }}
              className={`${image.span} ${index === 0 || index === 6 ? 'h-56 md:h-64' : 'h-44 md:h-56'} overflow-hidden rounded-xl cursor-pointer group relative 
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced modal with navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-300 cursor-pointer" 
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery view"
          >
            <div className="relative max-w-7xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300">
              {/* Close button - more visible and prominent */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="fixed top-4 right-4 text-white hover:text-white bg-red-600 hover:bg-red-700 focus:outline-none transition-colors p-3 rounded-full border-2 border-white z-[60] shadow-lg"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Additional close text button at the bottom for better visibility */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="fixed bottom-4 right-4 bg-black/70 hover:bg-black text-white px-4 py-2 rounded-full border border-white/40 text-sm font-medium z-[60] shadow-lg flex items-center gap-2"
                aria-label="Close view"
              >
                <X className="h-4 w-4" /> Close
              </button>
              
              {/* Navigation buttons - positioned relative to the image container */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all focus:outline-none border border-white/20 z-[60]"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all focus:outline-none border border-white/20 z-[60]"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              <div className="p-2 rounded-xl overflow-hidden w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] border border-white/20 bg-black/40 shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt={images[selectedIndex].alt} 
                  className="w-full rounded-lg max-h-[80vh] object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              
              {/* Image counter indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/20 z-[60]">
                {selectedIndex + 1} of {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;