import { useState } from "react";
import { X } from "lucide-react";
import groceries from "../assets/store-photos/groceries.png";
import vegetables from "../assets/store-photos/vegetables.png";
import fruits1 from "../assets/store-photos/fruits1.png";
import spices from "../assets/store-photos/spices.png";
import snacks from "../assets/store-photos/snacks.png";
import produce from "../assets/store-photos/produce.png";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { 
      src: groceries, 
      alt: "Wide selection of authentic Latino groceries",
      objectPosition: "center" 
    },
    { 
      src: vegetables, 
      alt: "Fresh vegetables and produce",
      objectPosition: "center 30%" // Focus more on the variety of vegetables
    },
    { 
      src: fruits1, 
      alt: "Fresh citrus fruits",
      objectPosition: "center 40%" // Highlight the colorful fruits
    },
    { 
      src: spices, 
      alt: "Authentic spices and seasonings",
      objectPosition: "center" 
    },
    { 
      src: snacks, 
      alt: "Latino snacks and cookies",
      objectPosition: "center 35%" // Show better view of the snack variety
    },
    { 
      src: produce, 
      alt: "Fresh produce display",
      objectPosition: "center 25%" // Focus on the produce arrangement
    },
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-[#D41414] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a wide variety of authentic Latino foods, produce, and specialty items 
            imported from all over Latin America.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:brightness-105 group relative"
              onClick={() => openModal(image.src)}
            >
              <div className="relative pb-[75%]">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image - more elegant styling */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300" 
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full">
              <button 
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white/80 hover:text-white focus:outline-none transition-colors"
                aria-label="Close"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="p-1 rounded-lg overflow-hidden border border-white/10">
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="w-full rounded-lg max-h-[80vh] object-contain shadow-2xl"
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