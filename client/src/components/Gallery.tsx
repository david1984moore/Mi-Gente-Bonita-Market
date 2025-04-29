import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import groceries from "../assets/store-photos/groceries.png";
import vegetables from "../assets/store-photos/vegetables.png";
import fruits1 from "../assets/store-photos/fruits1.png";
import spices from "../assets/store-photos/spices.png";
import snacks from "../assets/store-photos/snacks.png";
import produce from "../assets/store-photos/produce.png";

interface GalleryImage {
  src: string;
  alt: string;
  objectPosition: string;
  title?: string;
  description?: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const images: GalleryImage[] = [
    { 
      src: groceries, 
      alt: "Wide selection of authentic Latino groceries",
      objectPosition: "center",
      title: "Authentic Groceries",
      description: "Discover our wide selection of imported Latino products"
    },
    { 
      src: vegetables, 
      alt: "Fresh vegetables and produce",
      objectPosition: "center 30%", // Focus more on the variety of vegetables
      title: "Fresh Vegetables",
      description: "Fresh produce delivered regularly for maximum quality"
    },
    { 
      src: fruits1, 
      alt: "Fresh citrus fruits",
      objectPosition: "center 40%", // Highlight the colorful fruits
      title: "Tropical Fruits",
      description: "Hard-to-find tropical fruits, just like back home"
    },
    { 
      src: spices, 
      alt: "Authentic spices and seasonings",
      objectPosition: "center",
      title: "Authentic Spices",
      description: "Traditional seasonings for authentic flavors"
    },
    { 
      src: snacks, 
      alt: "Latino snacks and cookies",
      objectPosition: "center 35%", // Show better view of the snack variety
      title: "Delicious Snacks",
      description: "Your favorite Latino snacks and treats"
    },
    { 
      src: produce, 
      alt: "Fresh produce display",
      objectPosition: "center 25%", // Focus on the produce arrangement
      title: "Fresh Produce",
      description: "Quality fruits and vegetables for your family"
    },
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      
      if (e.key === 'Escape') {
        closeModal();
      } else if (e.key === 'ArrowRight') {
        navigateImage(1);
      } else if (e.key === 'ArrowLeft') {
        navigateImage(-1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  const openModal = (image: GalleryImage, index: number) => {
    setIsLoading(true);
    setSelectedImage(image);
    setSelectedIndex(index);
    
    // Prevent body scrolling when modal is open
    document.body.style.overflow = 'hidden';
    
    // Simulate image loading
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedIndex(-1);
    document.body.style.overflow = '';
  };
  
  const navigateImage = (direction: number) => {
    if (selectedIndex === -1) return;
    
    setIsLoading(true);
    const newIndex = (selectedIndex + direction + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
    
    // Simulate image loading
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold mb-6 text-[#1D3557]">
            Our Products
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#D41414] via-[#3D9C42] to-[#FFD700] rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              {/* Card with hover effects */}
              <div className="overflow-hidden rounded-xl shadow-lg bg-white transition-all duration-500 group-hover:shadow-xl group-hover:translate-y-[-5px]">
                {/* Image container with fixed aspect ratio */}
                <div className="relative overflow-hidden pb-[70%]">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: image.objectPosition }}
                    loading="lazy"
                  />
                  
                  {/* Overlay with gradient that appears on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
                    <ZoomIn className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
                
                {/* Image caption */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-[#1D3557] mb-1">{image.title}</h3>
                  <p className="text-gray-600 text-sm">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal with navigation and loading state */}
        {selectedImage && (
          <div 
            ref={modalRef}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-6xl w-full mx-auto animate-in fade-in zoom-in-50 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/80 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              
              {/* Image container with loading state */}
              <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black/30">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                    <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                  </div>
                )}
                
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt}
                  className={`w-full max-h-[80vh] object-contain ${isLoading ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300`}
                />
                
                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 hidden md:block">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-10 w-10" />
                </button>
              </div>
              
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 hidden md:block">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-10 w-10" />
                </button>
              </div>
              
              {/* Mobile navigation indicators */}
              <div className="flex justify-center mt-4 space-x-2 md:hidden">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(-1);
                  }}
                  className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <div className="text-white/80 px-2 py-1">
                  {selectedIndex + 1} / {images.length}
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage(1);
                  }}
                  className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 focus:outline-none transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;