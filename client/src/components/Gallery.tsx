import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import freshTomatoesPeppers from "../assets/store-photos/fresh-tomatoes-peppers.png";
import cactusPaddles from "../assets/store-photos/cactus-paddles-display.png";
import tajinSeasoning from "../assets/store-photos/tajin-seasoning-bottles.png";
import produceSection from "../assets/store-photos/produce-section-colorful.png";
import citrusFruitsDisplay from "../assets/store-photos/citrus-fruits-display.png";
import drinks from "@assets/drinks_1759971076901.jpeg";
import frontOfStore from "@assets/front of store_1759971076902.jpeg";
import meat from "@assets/meat_1759971076903.jpeg";
import products1 from "@assets/products 1_1759971076904.jpeg";
import products2 from "@assets/products 2_1759971076905.jpeg";
import products3 from "@assets/products 3_1759971076906.jpeg";
import products4 from "@assets/products 4_1759971076906.jpeg";
import products5 from "@assets/products 5_1759971076907.jpeg";
import productsOnShelves from "@assets/products on shelves_1759971076907.jpeg";
import stuffInShelves2 from "@assets/stuff in shelves 2_1759971076908.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const { t } = useLanguage();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    { 
      src: groceryAisle, 
      alt: "Selection of authentic Latino groceries and Goya products",
      objectPosition: "center"
    },
    { 
      src: citrusFruitsDisplay, 
      alt: "Fresh oranges and limes display",
      objectPosition: "center"
    },
    { 
      src: freshProduce, 
      alt: "Fresh vegetables and produce from our market",
      objectPosition: "center"
    },
    { 
      src: freshLemons, 
      alt: "Fresh lemons and citrus fruits",
      objectPosition: "center"
    },
    { 
      src: freshTomatoesPeppers, 
      alt: "Fresh tomatoes and peppers in crates",
      objectPosition: "center"
    },
    { 
      src: cactusPaddles, 
      alt: "Fresh cactus paddles (nopales) display",
      objectPosition: "center"
    },
    { 
      src: tajinSeasoning, 
      alt: "Tajin seasoning bottles - popular Mexican seasoning",
      objectPosition: "center"
    },
    { 
      src: produceSection, 
      alt: "Colorful produce section display",
      objectPosition: "center"
    },
    { 
      src: drinks, 
      alt: "Drinks section",
      objectPosition: "center"
    },
    { 
      src: frontOfStore, 
      alt: "Front of store",
      objectPosition: "center"
    },
    { 
      src: meat, 
      alt: "Meat section",
      objectPosition: "center"
    },
    { 
      src: products1, 
      alt: "Products display",
      objectPosition: "center"
    },
    { 
      src: products2, 
      alt: "Products display",
      objectPosition: "center"
    },
    { 
      src: products3, 
      alt: "Products display",
      objectPosition: "center"
    },
    { 
      src: products4, 
      alt: "Products display",
      objectPosition: "center"
    },
    { 
      src: products5, 
      alt: "Products display",
      objectPosition: "center"
    },
    { 
      src: productsOnShelves, 
      alt: "Products on shelves",
      objectPosition: "center"
    },
    { 
      src: stuffInShelves2, 
      alt: "Store shelves display",
      objectPosition: "center"
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % images.length);
      }, 4000); // Change slide every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, images.length]);

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

  const goToSlide = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
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
    <>
      <section id="gallery" className="pt-8 pb-16 zone-gallery w-full bg-[#F5E6D3]">
      <div className="w-full px-1 lg:px-4">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
              {t("gallery.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              {t("gallery.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Slideshow Container */}
        <div className="max-w-6xl mx-auto relative">
          {/* Main Slideshow */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-mercado-yellow azulejo-corner">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out cursor-pointer ${
                  index === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
                onClick={() => openModal(image.src, index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            ))}
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => setCurrentSlideIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-20"
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-6 space-x-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 p-0 ${
                  index === currentSlideIndex 
                    ? 'border-[#D41414] shadow-lg scale-110' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center block"
                />
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-4">
            <span className="text-gray-500 text-sm">
              {currentSlideIndex + 1} of {images.length}
            </span>
          </div>
        </div>

        {/* Modal for Zoomed View */}
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
    </>
  );
};

export default Gallery;