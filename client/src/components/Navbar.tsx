import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Logo } from "../assets/logo";

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

      // Track active section for nav highlighting
      const sections = ["home", "about", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className={`fixed w-full bg-white/95 backdrop-blur-sm shadow-lg z-50 transition-all duration-300 
      ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer relative z-10 group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <Logo className="h-16 w-auto relative" />
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[#1D3557] focus:outline-none z-50 hover:text-primary transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link font-medium transition duration-300 cursor-pointer px-2 py-1 rounded-md
              ${isActive("home") 
                ? "text-[#D41414] font-semibold" 
                : "text-[#1D3557] hover:text-[#D41414]"}`}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link font-medium transition duration-300 cursor-pointer px-2 py-1 rounded-md
              ${isActive("about") 
                ? "text-[#D41414] font-semibold" 
                : "text-[#1D3557] hover:text-[#D41414]"}`}
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`nav-link font-medium transition duration-300 cursor-pointer px-2 py-1 rounded-md
              ${isActive("contact") 
                ? "text-[#D41414] font-semibold" 
                : "text-[#1D3557] hover:text-[#D41414]"}`}
          >
            Contact
          </Link>
          <a
            href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-[#3D9C42] transition duration-300 p-2 rounded-full hover:bg-blue-50"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleMenu}
      >
        <div 
          className={`absolute right-0 top-0 h-full w-2/3 max-w-xs bg-white shadow-xl p-6 transition-transform duration-300 transform
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-end mb-8">
            <button 
              onClick={toggleMenu}
              aria-label="Close menu"
              className="text-gray-500 hover:text-primary"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-6">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center text-lg font-medium p-2 rounded-md transition-colors
                ${isActive("home") 
                  ? "text-[#D41414] bg-red-50" 
                  : "text-[#1D3557] hover:text-[#D41414] hover:bg-gray-50"}`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center text-lg font-medium p-2 rounded-md transition-colors
                ${isActive("about") 
                  ? "text-[#D41414] bg-red-50" 
                  : "text-[#1D3557] hover:text-[#D41414] hover:bg-gray-50"}`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`flex items-center text-lg font-medium p-2 rounded-md transition-colors
                ${isActive("contact") 
                  ? "text-[#D41414] bg-red-50" 
                  : "text-[#1D3557] hover:text-[#D41414] hover:bg-gray-50"}`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-6">
              <a
                href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                className="flex items-center text-[#1877F2] hover:text-[#3D9C42] p-2 rounded-md hover:bg-blue-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-3 fill-current">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
