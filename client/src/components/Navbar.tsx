import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Home, Store, Phone, Facebook, MapPin, Heart } from "lucide-react";
import { Logo } from "../assets/logo";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section for highlight nav item
      const sections = ["home", "features", "about", "gallery", "testimonials", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { to: "features", label: "Features", icon: <Store className="h-4 w-4" /> },
    { to: "about", label: "About", icon: <Home className="h-4 w-4" /> },
    { to: "gallery", label: "Products", icon: <Store className="h-4 w-4" /> },
    { to: "testimonials", label: "Reviews", icon: <Heart className="h-4 w-4" /> },
    { to: "contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
  ];

  return (
    <header 
      className={`fixed w-full ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-white py-3'} z-50 transition-all duration-300`}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <Logo className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'} w-auto`} />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden bg-white/90 p-2 rounded-full shadow-md text-[#1D3557] hover:text-[#D41414] transition-colors duration-300 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
          {navItems.filter(item => item.to !== "features").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link relative px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer flex items-center space-x-2 rounded-lg group ${
                activeSection === item.to
                  ? 'text-white bg-gradient-to-br from-[#D41414] to-[#B01111] shadow-md font-semibold' 
                  : 'text-[#1D3557] hover:text-[#D41414] hover:bg-gray-100'
              }`}
            >
              <div className={`flex items-center justify-center ${activeSection === item.to ? 'text-white' : 'text-[#D41414] group-hover:text-[#D41414]'} transition-all duration-300`}>
                {item.icon}
              </div>
              <span className="relative">
                {item.label}
                {activeSection !== item.to && (
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#D41414] group-hover:w-full transition-all duration-300"></span>
                )}
              </span>
            </Link>
          ))}
        </div>
      </nav>
      
      {/* Mobile Navigation - Modern slide-in menu */}
      <div 
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="font-bold text-lg text-[#D41414]">Menu</h3>
          <button 
            onClick={toggleMenu}
            className="text-gray-500 hover:text-[#D41414] focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="px-4 py-6 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                activeSection === item.to
                  ? 'bg-gradient-to-r from-[#D41414]/10 to-transparent text-[#D41414] font-medium shadow-sm'
                  : 'text-[#1D3557] hover:bg-gray-50 hover:text-[#D41414]'
              }`}
              onClick={toggleMenu}
            >
              <div className={`flex items-center justify-center rounded-md p-2 ${
                activeSection === item.to 
                ? 'bg-[#D41414]/10 text-[#D41414]' 
                : 'bg-gray-100 text-[#1D3557]'
              } transition-all duration-300`}>
                {item.icon}
              </div>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
          
          <div className="pt-6 space-y-4">
            <a
              href="tel:3026913048"
              className="flex items-center justify-center w-full bg-[#3D9C42] hover:bg-[#2A6D2E] text-white p-3 rounded-lg shadow-md transition-colors duration-300"
              onClick={toggleMenu}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>Call Us</span>
            </a>
            
            <a
              href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#1D3557] hover:bg-[#152538] text-white p-3 rounded-lg shadow-md transition-colors duration-300"
              onClick={toggleMenu}
            >
              <MapPin className="h-5 w-5 mr-2" />
              <span>Get Directions</span>
            </a>
            
            <a
              href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-[#1877F2] hover:bg-[#0A59C0] text-white p-3 rounded-lg shadow-md transition-colors duration-300"
              onClick={toggleMenu}
            >
              <Facebook className="h-5 w-5 mr-2" />
              <span>Facebook</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
