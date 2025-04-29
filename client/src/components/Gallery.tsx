import { useState } from "react";
import { X } from "lucide-react";
import groceryAisle from "../assets/store-photos/grocery-aisle.png";
import freshProduce from "../assets/store-photos/fresh-produce.png";
import freshLemons from "../assets/store-photos/fresh-lemons.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { 
      src: groceryAisle, 
      alt: "Selection of authentic Latino groceries and Goya products",
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
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4 relative inline-block">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-8">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-xl shadow-xl cursor-pointer transform transition-all duration-500 
                hover:shadow-2xl hover:scale-[1.02] hover:brightness-105 hover:rotate-1 group relative"
              onClick={() => openModal(image.src)}
            >
              <div className="relative pb-[75%]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/90 backdrop-blur-sm py-3 px-4 rounded-lg shadow-lg">
                    <p className="text-sm font-medium text-gray-800">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image - more modern styling */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-500" 
            onClick={closeModal}
          >
            <div className="relative max-w-6xl w-full animate-in zoom-in-95 duration-300">
              <button 
                onClick={closeModal}
                className="absolute -top-14 right-0 text-white/80 hover:text-white focus:outline-none transition-colors p-2 rounded-full hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="p-2 rounded-xl overflow-hidden border border-white/20 bg-black/40 shadow-2xl">
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="w-full rounded-lg max-h-[85vh] object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;