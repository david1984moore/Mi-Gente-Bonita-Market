import { MapPin, Facebook, Clock, ShoppingCart, Users, Flag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { MobileToggle } from "@/components/ui/mobile-toggle";
import storefront from "../assets/store-photos/storefront.png";
import customerTomatoes from "../assets/store-photos/customer-tomatoes.png";
import { useState, useEffect } from "react";

const About = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // We need to wait for client-side hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const aboutContent = (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <div className="relative">
          {/* Modern decorative elements */}
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#D41414]/5 rounded-2xl -z-10 rotate-6"></div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#FFDE59]/10 rounded-2xl -z-10 -rotate-3"></div>
          
          <div className="relative z-10 overflow-hidden rounded-md shadow-sm transform transition-all duration-500 hover:shadow-xl group">
            <img 
              src={storefront} 
              alt="Mi Gente Bonita Market storefront with owners" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
      
      <div className="order-1 lg:order-2">
        <div className="bg-white p-0 sm:p-2">
          <h3 className="text-2xl font-['Inter'] font-bold mb-6 text-[#1D1D1F] relative">
            {t("about.storyTitle")}
          </h3>
          
          <p className="mb-6 text-[#4B5563] leading-relaxed text-base">
            {t("about.storyPart1")}
          </p>
          
          <p className="mb-8 text-[#4B5563] leading-relaxed text-base">
            {t("about.storyPart2")}
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="group"
            >
              <Button className="bg-[#D41414] hover:bg-[#B01212] text-white py-2 px-6 rounded-md shadow-sm hover:shadow-md transition-all duration-300 inline-flex items-center">
                <MapPin className="h-4 w-4 mr-2" /> {t("about.visitUs")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  
  return (
    <section id="about" className="pt-10 pb-20 md:pt-12 md:pb-24 bg-white section-connector">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-['Inter'] font-bold mb-3 tracking-tight text-[#1D1D1F]">
              {t("about.title")}
            </h2>
            <div className="h-1 w-16 bg-[#D41414] mx-auto my-4 rounded-full"></div>
            <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mt-4 font-light">
              {t("about.subtitle")}
            </p>
          </div>
          
          {mounted && isMobile ? (
            <MobileToggle title={t("common.showContent")} defaultOpen={true}>
              {aboutContent}
            </MobileToggle>
          ) : (
            aboutContent
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
