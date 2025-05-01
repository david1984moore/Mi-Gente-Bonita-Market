import { MapPin, Facebook, Clock, ShoppingCart, Users, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import storefront from "../assets/store-photos/storefront.png";
import customerTomatoes from "../assets/store-photos/customer-tomatoes.png";

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="pt-8 pb-10 md:pt-10 md:pb-12 bg-gradient-to-b from-[#F8FDF9] to-white section-connector">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
              {t("about.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
              {t("about.subtitle")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D41414]/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3D9C42]/10 rounded-full -z-10"></div>
                
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] group">
                  <img 
                    src={storefront} 
                    alt="Mi Gente Bonita Market storefront with owners" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Quick stats */}
              
              
              {/* Quick stats removed */}
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-['Poppins'] font-bold mb-6 text-[#3D9C42] relative inline-block">
                  {t("about.storyTitle")}
                  <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#3D9C42]/30"></span>
                </h3>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  {t("about.storyPart1")}
                </p>
                
                <p className="mb-8 text-gray-700 leading-relaxed">
                  {t("about.storyPart2")}
                </p>
                
                
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group"
                  >
                    <Button className="bg-[#D41414] hover:bg-[#B51212] text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center group-hover:translate-y-[-2px]">
                      <MapPin className="h-4 w-4 mr-2" /> {t("about.visitUs")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
