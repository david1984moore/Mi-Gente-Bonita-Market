import { Link } from "react-scroll";
import { Facebook, Phone, MapPin, ArrowUp } from "lucide-react";
import { Logo } from "../assets/logo";
import { useState, useEffect } from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const showThreshold = 600; // Show button after scrolling 600px
      
      if (scrollY > showThreshold) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gradient-to-br from-[#3D9C42] to-[#2a7a2e] text-white pt-16 pb-8 relative">
      {/* Decorative wave at the top */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden transform -translate-y-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Logo and description */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <div className="font-['Poppins'] font-bold text-2xl mb-4 flex justify-center md:justify-start">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <Logo className="h-14 w-auto" />
              </div>
            </div>
            <p className="text-white/90 text-center md:text-left mb-4 max-w-xs">
              Your authentic Latino market in Stanton, Delaware, providing quality products that remind you of home.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <a
                href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-white group-hover:text-[#1877F2]" />
              </a>
              <a
                href="tel:+13026913048"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300 group"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5 text-white group-hover:text-white" />
              </a>
              <a
                href="https://maps.google.com/?q=Mi+Gente+Bonita+Market+Wilmington+DE"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition duration-300 group"
                aria-label="Location"
              >
                <MapPin className="h-5 w-5 text-white group-hover:text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#FFD700]"></span>
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white/90 hover:text-[#FFD700] transition duration-300 cursor-pointer hover:translate-x-1"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white/90 hover:text-[#FFD700] transition duration-300 cursor-pointer hover:translate-x-1"
              >
                About Us
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-white/90 hover:text-[#FFD700] transition duration-300 cursor-pointer hover:translate-x-1"
              >
                Visit Us
              </Link>
            </nav>
          </div>
          
          {/* Opening hours */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Opening Hours
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#FFD700]"></span>
            </h3>
            <div className="text-white/90 space-y-3">
              <p>Mon - Sat: 8am - 8pm</p>
              <p>Sunday: 9am - 6pm</p>
            </div>
          </div>
          
          {/* Contact info */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold mb-6 text-white relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-[#FFD700]"></span>
            </h3>
            <div className="text-white/90 space-y-3">
              <p>2125 W Newport Pike, <br />Wilmington, DE 19804</p>
              <p>
                <a href="tel:+13026913048" className="hover:text-[#FFD700]">
                  (302) 691-3048
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/80 text-sm text-center md:text-left">&copy; {year} Mi Gente Bonita Market. All rights reserved.</p>
          <p className="text-white/60 text-xs mt-2 md:mt-0">Proudly serving the Delaware community since 2020</p>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-8 right-8 bg-[#D41414] hover:bg-[#3D9C42] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${showScrollTop ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
