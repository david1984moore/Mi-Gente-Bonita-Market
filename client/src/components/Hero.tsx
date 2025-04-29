import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1607806143831-45e469f0ec2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        transition: 'background-image 0.5s ease-in-out'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
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
