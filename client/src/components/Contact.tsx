import { MapPin, Phone, Clock, Globe, Facebook, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logoImage from "../assets/logo.png";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <>
      <section id="contact" className="pt-8 pb-24 md:pb-16 md:pt-10 zone-contact relative section-connector">
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
            {t("contact.title")}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="bg-[#F5E6D3] rounded-2xl shadow-mercado-green lg:col-span-2 overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col h-auto min-h-[500px] md:h-[600px] azulejo-corner">
            <div className="bg-gradient-to-r from-[#E24949] to-[#B83434] text-white p-4 flex justify-center items-center">
              <img 
                src={logoImage}
                alt="Mi Gente Bonita Market"
                className="h-16 w-auto"
              />
            </div>
            
            <div className="px-6 py-5 flex-1">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#FEE8E8] text-[#D41414] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1.5 text-gray-800">{t("contact.location1.title")}</h4>
                    <div className="mb-2.5">
                      <p className="text-gray-700 font-semibold text-sm">Newark:</p>
                      <p className="text-gray-700 text-sm leading-snug">1300 Capitol Trail, Newark, DE 19711</p>
                      <a 
                        href="https://maps.google.com/?q=1300+Capitol+Tr,+Newark,+DE+19711" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-0.5 transition-colors duration-300 text-xs"
                      >
                        {t("contact.getDirections")} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">Wilmington:</p>
                      <p className="text-gray-700 text-sm leading-snug">2125 W Newport Pike, Wilmington, DE 19804</p>
                      <a 
                        href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-0.5 transition-colors duration-300 text-xs"
                      >
                        {t("contact.getDirections")} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#EDF9EE] text-[#3D9C42] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1.5 text-gray-800">{t("contact.callUs")}</h4>
                    <div className="mb-2.5">
                      <p className="text-gray-700 font-semibold text-sm">Newark:</p>
                      <p className="text-gray-700 text-sm leading-snug">(302) 601-6900</p>
                      <a 
                        href="tel:3026016900" 
                        className="inline-flex items-center text-[#3D9C42] hover:text-[#2A6D2E] mt-0.5 transition-colors duration-300 text-xs"
                      >
                        {t("contact.callUs")}
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold text-sm">Wilmington:</p>
                      <p className="text-gray-700 text-sm leading-snug">(302) 691-3048</p>
                      <a 
                        href="tel:3026913048" 
                        className="inline-flex items-center text-[#3D9C42] hover:text-[#2A6D2E] mt-0.5 transition-colors duration-300 text-xs"
                      >
                        {t("contact.callUs")}
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFF9E6] text-[#C7A500] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1.5 text-gray-800">{t("contact.hours.title")}</h4>
                    <div>
                      <p className="text-gray-700 text-sm leading-snug">{t("contact.hours.everyday")}: 8am - 9pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl lg:col-span-3 border border-gray-100 relative h-[400px] sm:h-[500px] md:h-[600px]">
            <iframe 
              src="https://maps.google.com/maps?q=1300+Capitol+Trail,+Newark,+DE+19711&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Gente Bonita Market Newark Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map overlay - removed buttons as requested */}
          </div>
        </div>
      </div>
      
      {/* Full green background extension that matches footer */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3D9C42]" style={{height: '80px', transform: 'translateY(79px)'}}></div>
    </section>
    </>
  );
};

export default Contact;
