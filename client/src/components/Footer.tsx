import { Link } from "react-scroll";
import { Logo } from "../assets/logo";
import { Facebook, Phone, MapPin, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#3D9C42] hover:text-[#D41414] p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6 group-hover:animate-bounce" />
      </button>
      
      {/* Wave SVG divider */}
      <div className="w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[70px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#3D9C42]"
          ></path>
        </svg>
      </div>
      
      <div className="bg-[#3D9C42] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Logo and About */}
            <div>
              <div className="mb-6">
                <div className="font-['Poppins'] font-bold text-2xl mb-4 flex items-center">
                  <Logo className="h-14 w-auto bg-white rounded-lg p-1.5 shadow-lg hover:shadow-xl transition-all duration-300" />
                </div>
                <p className="text-white/90 leading-relaxed mb-4">
                  Serving Wilmington and Newark since 2023.
                </p>
                <a
                  href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors duration-300 group"
                >
                  <Facebook className="h-5 w-5 mr-2 text-[#1877F2]" />
                  <span className="font-medium">Follow us</span>
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Quick Links
                <span className="absolute left-0 bottom-[-6px] w-12 h-0.5 bg-white/30"></span>
              </h3>
              <ul className="space-y-3 mt-6">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2"></span>
                    Home
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2"></span>
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] mr-2"></span>
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Contact Info
                <span className="absolute left-0 bottom-[-6px] w-12 h-0.5 bg-white/30"></span>
              </h3>
              <ul className="space-y-4 mt-6">
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white mb-0.5">Wilmington:</div>
                    <span className="text-white/90">2125 W Newport Pike, Wilmington, DE 19804</span>
                  </div>
                </li>
                <li className="flex">
                  <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-medium text-white mb-0.5">Newark:</div>
                    <span className="text-white/90">1300 Capitol Tr, Newark, DE 19711</span>
                  </div>
                </li>
                <li className="flex">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" />
                  <a href="tel:3026913048" className="text-white/90 hover:text-white transition-colors duration-300">
                    (302) 691-3048
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-bold mb-4 relative inline-block">
                Business Hours
                <span className="absolute left-0 bottom-[-6px] w-12 h-0.5 bg-white/30"></span>
              </h3>
              <ul className="space-y-2 mt-6">
                <li className="flex justify-between">
                  <span className="text-white/90">Monday - Saturday:</span>
                  <span className="text-white font-medium">8:30 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/90">Sunday:</span>
                  <span className="text-white font-medium">8:30 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2a7a2e] mt-12 pt-8 text-center">
            <p className="text-white/80 flex items-center justify-center text-sm">
              &copy; {year} Mi Gente Bonita Market. All rights reserved. 
              <Heart className="h-4 w-4 mx-1 text-[#D41414] inline animate-pulse" /> 
              Made with love for our community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
