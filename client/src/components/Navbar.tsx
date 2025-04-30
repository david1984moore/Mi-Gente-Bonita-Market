import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X, Home, Store, Phone, Facebook, MapPin, Heart } from "lucide-react";
import { Logo } from "../assets/logo";
import { Button } from "@/components/ui/button";
import Portal from "@/components/ui/portal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Create a ref for the mobile menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Function to toggle menu with proper focus handling
  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    
    // Prevent background scrolling when menu is open
    if (newState) {
      // Allow scrolling within the menu while preventing body scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      
      // Move the menu to the root of the document to avoid positioning issues
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.classList.remove('menu-open');
    }
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
      // Make sure to reset body styles when component unmounts
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, []);

  const navItems = [
    { to: "about", label: "About", icon: null },
    { to: "gallery", label: "Products", icon: null },
    { to: "testimonials", label: "Reviews", icon: null },
    { to: "contact", label: "Contact", icon: <Phone className="h-4 w-4" /> },
  ];

  return (
    <header 
      className={`fixed w-full ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' : 'bg-white py-3'} z-[60] transition-all duration-300`}
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
        
        {/* Mobile menu button - Using the highest z-index to be always clickable */}
        <button 
          ref={menuButtonRef}
          onClick={toggleMenu} 
          className="md:hidden bg-white/90 p-2 rounded-full shadow-md text-[#1D3557] hover:text-[#D41414] transition-colors duration-300 focus:outline-none relative z-[10000]"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Regular nav items */}
          {navItems.filter(item => item.to !== "features" && item.to !== "contact").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link relative text-base font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeSection === item.to
                  ? 'text-[#D41414]' 
                  : 'text-[#1D3557] hover:text-[#D41414]'
              }`}
            >
              <span className="uppercase">{item.label}</span>
              {activeSection === item.to && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#D41414]/30 via-[#D41414] to-[#D41414]/30 rounded-full"></span>
              )}
            </Link>
          ))}
          
          {/* Contact link with icon */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={`flex items-center space-x-1 nav-link relative text-base font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              activeSection === "contact"
                ? 'text-[#D41414]' 
                : 'text-[#1D3557] hover:text-[#D41414]'
            }`}
          >
            <Phone className="h-4 w-4 mr-1" />
            <span className="uppercase">Contact</span>
            {activeSection === "contact" && (
              <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-gradient-to-r from-[#D41414]/30 via-[#D41414] to-[#D41414]/30 rounded-full"></span>
            )}
          </Link>
        </div>
      </nav>
      
      {/* Mobile Navigation - Using Portal to ensure it renders outside the normal DOM hierarchy */}
      {isOpen && (
        <Portal>
          <>
            {/* Backdrop overlay */}
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] md:hidden mobile-menu-backdrop"
              onClick={toggleMenu}
              aria-hidden="true"
              style={{ position: 'fixed' }}
            />
            
            {/* Mobile menu container - completely separated from other DOM elements */}
            <div 
              id="mobile-menu"
              ref={mobileMenuRef}
              className="fixed inset-y-0 right-0 z-[10000] w-64 bg-white shadow-2xl md:hidden flex flex-col mobile-menu"
              role="dialog"
              aria-modal="true"
              style={{ position: 'fixed' }}
            >
              <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                <h3 className="font-bold text-lg text-[#D41414]">Menu</h3>
                <button 
                  onClick={toggleMenu}
                  className="text-gray-500 hover:text-[#D41414] focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="px-4 py-6 space-y-6 flex-1 overflow-y-auto pb-20">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`block p-3 transition-all duration-300 relative ${
                      activeSection === item.to
                        ? 'text-[#D41414] font-bold pl-5' 
                        : 'text-[#1D3557] hover:text-[#D41414] hover:pl-5 font-semibold'
                    }`}
                    onClick={toggleMenu}
                  >
                    {activeSection === item.to && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#D41414] shadow-sm shadow-[#D41414]/20"></span>
                    )}
                    <span className="text-lg tracking-wide uppercase">{item.label}</span>
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
          </>
        </Portal>
      )}
    </header>
  );
};

export default Navbar;
