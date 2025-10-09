import { Link } from "react-scroll";
import { Logo } from "../assets/logo";
import { Facebook, Heart, ArrowUp, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="relative" style={{marginTop: '-1px'}}>
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[#1D1D1F] hover:text-[#D41414] p-2.5 rounded-md shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none group z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
      </button>
      
      {/* Modern footer with subtle gradient */}
      <div className="bg-gradient-to-br from-[#1D1D1F] to-[#2D2D2F] text-white pt-16 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Logo and About */}
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="font-['Inter'] font-medium text-xl mb-5 flex items-center justify-center md:justify-start">
                  <Logo className="h-12 w-auto bg-white rounded-md p-1.5 shadow-md" />
                </div>
                <p className="text-gray-300 leading-relaxed mb-5 text-sm">
                  {t("footer.serving")}
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 p-2.5 rounded-md transition-all duration-300 group"
                  >
                    <Facebook className="h-5 w-5 text-white group-hover:text-[#1877F2] transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/explore/locations/105762445384586/mi-gente-bonita-market/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 p-2.5 rounded-md transition-all duration-300 group"
                  >
                    <Instagram className="h-5 w-5 text-white group-hover:text-[#E4405F] transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.tiktok.com/place/Mi-Gente-Bonita-Market-21568226272493734?language=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 p-2.5 rounded-md transition-all duration-300 group"
                  >
                    <SiTiktok className="h-5 w-5 text-white group-hover:text-[#000000] transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-base font-medium mb-5 text-white/90">
                {t("navbar.menu")}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer flex items-center text-sm justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFDE59] mr-2"></span>
                    {t("navbar.home")}
                  </Link>
                </li>
                
                <li>
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer flex items-center text-sm justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFDE59] mr-2"></span>
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="gallery"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer flex items-center text-sm justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFDE59] mr-2"></span>
                    {t("navbar.products")}
                  </Link>
                </li>
                <li>
                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white hover:translate-x-0.5 transition-all duration-300 cursor-pointer flex items-center text-sm justify-center md:justify-start"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#FFDE59] mr-2"></span>
                    {t("navbar.testimonials")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 flex items-center justify-center text-xs">
              &copy; {year} Mi Gente Bonita Market. {t("footer.rights")}. 
              <Heart className="h-3 w-3 mx-1.5 text-[#D41414] inline" /> 
              {t("footer.developed")} {t("footer.community")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
