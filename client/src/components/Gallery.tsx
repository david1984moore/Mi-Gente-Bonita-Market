import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
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
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // We need to wait for client-side hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
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

  // Gallery grid component
  const galleryGrid = (
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
  );

  return (
    <section id="gallery" className="pt-4 pb-12 md:pt-6 md:pb-14 bg-gradient-to-b from-white to-gray-50 w-full section-connector">
      <div className="w-full px-0 sm:px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
            {t("gallery.title")}
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#D41414]/30"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-3">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Conditionally render collapsible content on mobile */}
        {mounted && isMobile ? (
          <Accordion type="single" collapsible defaultValue="gallery-content">
            <AccordionItem value="gallery-content" className="border-b-0">
              <AccordionTrigger className="py-3 text-center justify-center text-base font-semibold bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-md text-[#1D1D1F]">
                {t("common.showContent")}
              </AccordionTrigger>
              <AccordionContent className="pt-6">
                {galleryGrid}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ) : (
          galleryGrid
        )}

        {/* Modal with navigation */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex flex-col z-50 pt-16 pb-8 px-4 animate-in fade-in duration-300 cursor-pointer"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery view"
          >
            {/* Close button */}
            <div className="fixed top-4 right-4 z-50">
              <button 
                onClick={closeModal}
                className="bg-black hover:bg-gray-900 text-white px-4 py-2 rounded-md shadow-lg border border-white/50 flex items-center gap-2"
              >
                <X className="h-4 w-4" /> <span>{t("gallery.close")}</span>
              </button>
            </div>
            
            <div className="flex-1 relative flex items-center justify-center">
              {/* Navigation buttons */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all focus:outline-none border border-white/20 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all focus:outline-none border border-white/20 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              
              {/* Image container */}
              <div className="p-2 rounded-xl overflow-hidden w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] border border-white/20 bg-black/40 shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt={images[selectedIndex].alt} 
                  className="w-full rounded-lg max-h-[65vh] object-contain shadow-xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
            
            {/* Footer with counter */}
            <div className="flex justify-between items-center mt-4 px-2">
              <div className="bg-black/60 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-white/90 text-xs sm:text-sm font-medium border border-white/20">
                {selectedIndex + 1} of {images.length}
              </div>
              
              <button
                onClick={closeModal}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md shadow-lg border border-white/50"
              >
                {t("gallery.close")}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;