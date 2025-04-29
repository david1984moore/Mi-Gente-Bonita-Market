import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";
import freshTomatoesPeppers from "../assets/store-photos/fresh-tomatoes-peppers.png";
import cactusPaddles from "../assets/store-photos/cactus-paddles-display.png";
import tajinSeasoning from "../assets/store-photos/tajin-seasoning-bottles.png";
import produceSection from "../assets/store-photos/produce-section-colorful.png";
import fruits1 from "../assets/store-photos/fruits1.png"; // Replacement for pinatasAndFruits
import snacks from "../assets/store-photos/snacks.png"; // Replacement for snacksAisle
import GroceryGalleryImage from "../assets/attached/groceryGallery";
// Import extracted images from the attached content
import { GroceryAisleImage, PinatasImage, SnacksImage } from "../assets/attached/extractedImages";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(9).fill(false));
  const [showFallbackImage, setShowFallbackImage] = useState<boolean>(false);
  
  // Refs for intersection observer
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Create references to our SVG components
  const svgRefs = useRef({
    groceryAisle: <GroceryAisleImage />,
    pinatas: <PinatasImage />,
    snacks: <SnacksImage />
  });
  
  // State for tracking which images have SVG fallbacks
  const [svgFallbacks, setSvgFallbacks] = useState<Record<number, JSX.Element | null>>({});
  
  // Check if images need to be replaced with SVG fallbacks
  useEffect(() => {
    // Check each image and replace problematic ones
    const imagesToCheck = [
      { index: 5, testImage: fruits1, fallback: svgRefs.current.pinatas },
      { index: 7, testImage: snacks, fallback: svgRefs.current.snacks }
    ];
    
    const newFallbacks: Record<number, JSX.Element | null> = {};
    
    imagesToCheck.forEach(item => {
      if (!item.testImage || typeof item.testImage !== 'string' || 
          (typeof item.testImage === 'string' && item.testImage.length < 100)) {
        newFallbacks[item.index] = item.fallback;
      }
    });
    
    setSvgFallbacks(newFallbacks);
    
    // If we have any fallbacks, check if we need to show the main fallback
    if (Object.keys(newFallbacks).length > 3) {
      setShowFallbackImage(true);
    }
  }, []);
  
  const images = [
    { 
      src: groceryAisle, 
      alt: "Selection of authentic Latino groceries and Goya products",
      objectPosition: "center",
      span: "col-span-2"
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
    // Use fruits1 but have PinatasImage as a fallback
    { 
      src: fruits1, 
      alt: "Colorful piñatas, fresh fruits and Latino products", 
      objectPosition: "center",
      span: "col-span-2"
    },
    { 
      src: tajinSeasoning, 
      alt: "Tajin seasoning bottles - popular Mexican seasoning",
      objectPosition: "center",
      span: "col-span-1"
    },
    // Use snacks but have SnacksImage as a fallback
    { 
      src: snacks, 
      alt: "Latino snacks aisle with popular chips and treats",
      objectPosition: "center",
      span: "col-span-2"
    },
    { 
      src: produceSection, 
      alt: "Colorful produce section with festive decorations",
      objectPosition: "center",
      span: "col-span-2"
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

  const [selectedSvgIndex, setSelectedSvgIndex] = useState<number | null>(null);

  const openModal = (src: string, index: number) => {
    if (svgFallbacks[index]) {
      // If we're using an SVG fallback for this image
      setSelectedSvgIndex(index);
      setSelectedImage(null);
    } else {
      setSelectedSvgIndex(null);
      setSelectedImage(src);
    }
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedSvgIndex(null);
  };

  const navigateImage = (direction: 'next' | 'prev') => {
    let nextIdx: number;
    if (direction === 'next') {
      nextIdx = (selectedIndex + 1) % images.length;
    } else {
      nextIdx = (selectedIndex - 1 + images.length) % images.length;
    }
    
    setSelectedIndex(nextIdx);
    
    if (svgFallbacks[nextIdx]) {
      setSelectedSvgIndex(nextIdx);
      setSelectedImage(null);
    } else {
      setSelectedSvgIndex(null);
      setSelectedImage(images[nextIdx].src);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white w-full">
      <div className="w-full px-0 sm:px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-5">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>

        {showFallbackImage ? (
          // Fallback SVG when images are not loading
          <div className="w-full max-w-5xl mx-auto bg-white p-4 rounded-lg shadow-md">
            <GroceryGalleryImage />
          </div>
        ) : (
          // Regular image gallery
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
                  {svgFallbacks[index] ? (
                    // Show SVG fallback for specific image
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                      {svgFallbacks[index]}
                    </div>
                  ) : (
                    // Show regular image
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: image.objectPosition }}
                      loading="lazy"
                      onError={() => {
                        const newFallbacks = {...svgFallbacks};
                        if (index === 5) newFallbacks[index] = svgRefs.current.pinatas;
                        else if (index === 7) newFallbacks[index] = svgRefs.current.snacks;
                        else setShowFallbackImage(true);
                        setSvgFallbacks(newFallbacks);
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced modal with navigation */}
        {(selectedImage || selectedSvgIndex !== null) && (
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
                {selectedSvgIndex !== null && svgFallbacks[selectedSvgIndex] ? (
                  // Render SVG component in modal
                  <div 
                    className="w-full h-96 bg-white rounded-lg flex items-center justify-center" 
                    onClick={(e) => e.stopPropagation()}
                  >
                    {svgFallbacks[selectedSvgIndex]}
                  </div>
                ) : (
                  // Render image in modal
                  <img 
                    src={selectedImage} 
                    alt={images[selectedIndex].alt} 
                    className="w-full rounded-lg max-h-[85vh] object-contain shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
              
              {/* Image counter indicator */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 rounded-full text-white/90 text-sm font-medium border border-white/20">
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