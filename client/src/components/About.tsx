import { MapPin, Facebook, Clock, ShoppingCart, Users, Flag, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import storefront from "../assets/store-photos/storefront.png";
import customerTomatoes from "../assets/store-photos/customer-tomatoes.png";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

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
      <ScrollReveal direction="left" delay={0.2} className="order-2 lg:order-1">
        <div className="relative">
          {/* Modern decorative elements */}
          <div className="absolute -top-5 -left-5 w-24 h-24 bg-[#D41414]/5 rounded-2xl -z-10 rotate-6"></div>
          <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#FFDE59]/10 rounded-2xl -z-10 -rotate-3"></div>
          
          <div className="relative z-10 overflow-hidden rounded-md shadow-mercado-orange transform transition-all duration-500 hover:shadow-xl group">
            <img 
              src={storefront} 
              alt="Mi Gente Bonita Market storefront with owners" 
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </ScrollReveal>
      
      <ScrollReveal direction="right" delay={0.2} className="order-1 lg:order-2">
        <div className="bg-[#F5E6D3] p-6 sm:p-8 md:p-10 rounded-lg shadow-mercado-red azulejo-corner texture-basket">
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
      </ScrollReveal>
    </div>
  );
  
  return (
    <>
      <section id="about" className="pt-10 pb-20 md:pt-12 md:pb-24 zone-about section-connector">
      <div className="w-full mx-auto px-1 lg:px-4 xl:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-10">
              {mounted && isMobile ? (
                <>
                  <button
                    onClick={() => {
                      const contentDiv = document.getElementById('about-content');
                      if (contentDiv) {
                        const isCurrentlyHidden = contentDiv.style.display === 'none' || !contentDiv.style.display;
                        contentDiv.style.display = isCurrentlyHidden ? 'block' : 'none';
                      }
                    }}
                    className="flex items-center justify-center gap-2 mx-auto"
                    aria-expanded="false"
                    aria-controls="about-content"
                  >
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
                      {t("about.title")}
                    </h2>
                    <ChevronDown className="h-6 w-6 text-[#D41414]" />
                  </button>
                  <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mt-4 font-light">
                    {t("about.subtitle")}
                  </p>
                </>
              ) : (
                <>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
                    {t("about.title")}
                  </h2>
                  <p className="text-xl text-[#4B5563] max-w-2xl mx-auto mt-4 font-light">
                    {t("about.subtitle")}
                  </p>
                </>
              )}
            </div>
          </ScrollReveal>
          
          {mounted && isMobile ? (
            <div className="w-full">
              <div id="about-content" className="pt-6 w-full" style={{ display: 'none' }}>
                {aboutContent}
              </div>
            </div>
          ) : (
            aboutContent
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
