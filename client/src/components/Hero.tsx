import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import exterior1 from "../assets/store-photos/exterior1.png";
import exterior2 from "../assets/store-photos/exterior2.png";
import exterior3 from "../assets/store-photos/exterior3.png";
import sign from "../assets/store-photos/sign.png";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section 
      id="home" 
      className="flex items-center justify-center pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex].src})`,
        backgroundSize: 'cover',
        backgroundPosition: images[currentImageIndex].position,
        height: '80vh',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto bg-black/30 p-6 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-['Poppins'] font-bold text-white mb-6">
            Bienvenidos a<br /> 
            <span className="text-[#FFD700]">Mi Gente Bonita Market</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
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
              className="bg-[#D41414] hover:bg-[#3D9C42] text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 text-base"
            >
              Discover More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
