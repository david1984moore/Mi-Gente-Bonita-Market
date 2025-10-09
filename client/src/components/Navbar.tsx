import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { Menu, X, Phone, Facebook, MapPin, Globe, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { Logo } from "../assets/logo";
import { Button } from "@/components/ui/button";
import Portal from "@/components/ui/portal";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // Create a ref for the mobile menu
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  // Use language context
  const { language, toggleLanguage, t } = useLanguage();

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
    { to: "about", label: t("navbar.about"), icon: null },
    { to: "gallery", label: t("navbar.products"), icon: null },
    { to: "testimonials", label: t("navbar.reviews"), icon: null },
    { to: "contact", label: t("navbar.contact"), icon: <Phone className="h-4 w-4" /> },
  ];

  return (
    <header 
      className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm py-1 z-[60] transition-all duration-300"
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <Logo className="transition-all duration-300 h-9 w-auto" />
        </Link>
        
        {/* Mobile menu button - Using the highest z-index to be always clickable */}
        <button 
          ref={menuButtonRef}
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md text-[#D41414] transition-colors duration-300 focus:outline-none relative z-[10000]"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-8 w-8" />
          ) : (
            <Menu className="h-8 w-8" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-7 lg:space-x-9">
          {/* Language toggle button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center justify-center p-3 bg-[#1D1D1F] hover:bg-[#333] text-white rounded-md transition-colors duration-300"
            title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1.5 text-sm font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
          </button>
          
          {/* Regular nav items */}
          {navItems.filter(item => item.to !== "features" && item.to !== "contact").map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={`nav-link relative text-sm tracking-wide transition-all duration-300 cursor-pointer ${
                activeSection === item.to
                  ? 'text-[#D41414] font-bold' 
                  : 'text-[#1D1D1F] hover:text-[#D41414] font-semibold'
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.to && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D41414] rounded-full"></span>
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
            className={`flex items-center nav-link relative text-sm tracking-wide transition-all duration-300 cursor-pointer ${
              activeSection === "contact"
                ? 'text-[#D41414] font-bold' 
                : 'text-[#1D1D1F] hover:text-[#D41414] font-semibold'
            }`}
          >
            <Phone className="h-3.5 w-3.5 mr-1.5" />
            <span>{t("navbar.contact")}</span>
            {activeSection === "contact" && (
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D41414] rounded-full"></span>
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
              className="fixed inset-y-0 right-0 z-[10000] w-72 bg-white/95 backdrop-blur-md shadow-xl md:hidden flex flex-col mobile-menu"
              role="dialog"
              aria-modal="true"
              style={{ position: 'fixed' }}
            >
              <div className="flex justify-between items-center p-5 sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  {/* Language toggle for mobile */}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center justify-center p-3 bg-[#1D1D1F] hover:bg-[#333] text-white rounded-md transition-colors duration-300"
                    title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                    aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                  >
                    <Globe className="h-5 w-5" />
                    <span className="ml-1.5 text-sm font-semibold">{language === 'es' ? 'EN' : 'ES'}</span>
                  </button>
                </div>
                <button 
                  onClick={toggleMenu}
                  className="text-[#1D1D1F] hover:text-[#D41414] focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="px-5 py-6 space-y-5 flex-1 overflow-y-auto pb-20">
                {navItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`block p-2.5 transition-all duration-300 relative rounded-md ${
                      activeSection === item.to
                        ? 'text-[#D41414] font-bold bg-[#FEF2F2] pl-4' 
                        : 'text-[#1D1D1F] hover:text-[#D41414] hover:pl-4 font-semibold hover:bg-gray-50'
                    }`}
                    onClick={toggleMenu}
                  >
                    {activeSection === item.to && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-10 bg-[#D41414] rounded-r-md"></span>
                    )}
                    <span className="text-base">{item.label}</span>
                  </Link>
                ))}
                
                <div className="pt-5 space-y-3">
                  <a
                    href="tel:3026913048"
                    className="flex items-center justify-center w-full bg-[#D41414] hover:bg-[#B01212] text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-medium">{t("navbar.callUs")}</span>
                  </a>
                  
                  <a
                    href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#1D1D1F] hover:bg-[#333] text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="font-medium">{t("navbar.getDirections")}</span>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#1877F2] hover:bg-[#0A59C0] text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  
                  <a
                    href="https://www.instagram.com/explore/locations/105762445384586/mi-gente-bonita-market/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white py-2.5 px-4 rounded-lg transition-opacity duration-300"
                    onClick={toggleMenu}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    <span className="font-medium">Instagram</span>
                  </a>
                  
                  <a
                    href="https://www.tiktok.com/place/Mi-Gente-Bonita-Market-21568226272493734?language=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-[#000000] hover:bg-[#1a1a1a] text-white py-2.5 px-4 rounded-lg transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    <SiTiktok className="h-4 w-4 mr-2" />
                    <span className="font-medium">TikTok</span>
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
