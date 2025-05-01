import { MapPin, Phone, Clock, Globe, Facebook, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="pt-8 pb-24 md:pb-16 md:pt-10 bg-gradient-to-b from-gray-50 to-gray-100 relative section-connector">
      {/* Add a wave divider at the top of the section */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
             className="text-gray-50 relative block h-8 w-full" style={{transform: 'rotateY(180deg)'}}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 tracking-tight text-[#1D1D1F]">
            {t("contact.title")}
          </h2>
          <div className="h-1 w-16 bg-[#D41414] mx-auto my-4 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="bg-white rounded-2xl shadow-xl lg:col-span-2 overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col h-auto min-h-[500px] md:h-[600px]">
            <div className="bg-gradient-to-r from-[#E24949] to-[#B83434] text-white p-4 flex justify-center items-center">
              <img 
                src="/src/assets/logo.png"
                alt="Mi Gente Bonita Market"
                className="h-16 w-auto"
              />
            </div>
            
            <div className="px-6 py-6 flex-1">
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-[#FEE8E8] text-[#D41414] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{t("contact.location1.title")}</h4>
                    <div className="mb-3">
                      <p className="text-gray-700 font-semibold text-base">Wilmington:</p>
                      <p className="text-gray-700 text-base leading-tight">2125 W Newport Pike, Wilmington, DE 19804</p>
                      <a 
                        href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm"
                      >
                        {t("contact.getDirections")} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold text-base">Newark:</p>
                      <p className="text-gray-700 text-base leading-tight">1300 Capitol Trail, Newark, DE 19711</p>
                      <a 
                        href="https://maps.google.com/?q=1300+Capitol+Tr,+Newark,+DE+19711" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm"
                      >
                        {t("contact.getDirections")} <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="bg-[#EDF9EE] text-[#3D9C42] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{t("contact.callUs")}</h4>
                    <p className="text-gray-700 text-base">(302) 691-3048</p>
                    <a 
                      href="tel:3026913048" 
                      className="inline-flex items-center text-[#3D9C42] hover:text-[#2A6D2E] mt-1 transition-colors duration-300 text-sm"
                    >
                      {t("contact.callUs")}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start mt-4">
                  <div className="bg-[#FFF9E6] text-[#C7A500] p-2 rounded-lg mr-3 flex-shrink-0 w-10 h-10 flex items-center justify-center">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-800">{t("contact.hours.title")}</h4>
                    <div>
                      <p className="text-gray-700 text-base leading-tight">{t("contact.hours.weekdays")}: 8:30 AM - 9:00 PM</p>
                      <p className="text-gray-700 text-base leading-tight">{t("contact.hours.sunday")}: 8:30 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl lg:col-span-3 border border-gray-100 relative h-[400px] sm:h-[500px] md:h-[600px]">
            <iframe 
              src="https://maps.google.com/maps?q=2125+W+Newport+Pike,+Wilmington,+DE+19804&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Gente Bonita Market Wilmington Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map overlay - removed buttons as requested */}
          </div>
        </div>
      </div>
      
      {/* Full green background extension that matches footer */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3D9C42]" style={{height: '80px', transform: 'translateY(79px)'}}></div>
    </section>
  );
};

export default Contact;
