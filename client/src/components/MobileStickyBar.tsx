import { useState, useEffect } from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileStickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero section
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`mobile-sticky-bar ${isVisible ? 'visible' : ''}`}>
      <div className="flex justify-around items-center gap-2 max-w-md mx-auto">
        <a 
          href="tel:3026016900"
          className="flex flex-col items-center justify-center text-white hover:opacity-80 transition-opacity flex-1"
          data-testid="sticky-bar-call"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">{t("contact.callUs")}</span>
        </a>
        
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center justify-center text-white hover:opacity-80 transition-opacity flex-1 cursor-pointer"
          data-testid="sticky-bar-location"
        >
          <MapPin className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">{t("contact.location1.title")}</span>
        </Link>
        
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center justify-center text-white hover:opacity-80 transition-opacity flex-1 cursor-pointer"
          data-testid="sticky-bar-hours"
        >
          <Clock className="h-5 w-5 mb-1" />
          <span className="text-xs font-medium">{t("contact.hours.title")}</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileStickyBar;
