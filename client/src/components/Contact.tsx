import { MapPin, Phone, Clock, Globe, Facebook, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="pt-24 pb-24 bg-gradient-to-b from-white to-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4 relative inline-block">
            Visit Our Market
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            We'd love to see you in person! Stop by and discover our wide selection of authentic products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="bg-white rounded-2xl shadow-xl lg:col-span-2 overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col h-[500px] md:h-[600px]">
            <div className="bg-gradient-to-r from-[#E24949] to-[#B83434] text-white p-6 flex justify-center items-center">
              <img 
                src="/src/assets/logo.png"
                alt="Mi Gente Bonita Market"
                className="h-20 w-auto"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#FEE8E8] text-[#D41414] p-2 rounded-lg mr-4 flex-shrink-0 w-14 h-14 flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-800">Locations</h4>
                    <div className="mb-5">
                      <p className="text-gray-700 font-semibold text-base">Wilmington:</p>
                      <p className="text-gray-700 text-base leading-relaxed">2125 W Newport Pike, Wilmington, DE 19804</p>
                      <a 
                        href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm"
                      >
                        Get directions <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-gray-700 font-semibold text-base">Newark:</p>
                      <p className="text-gray-700 text-base leading-relaxed">1300 Capitol Trail, Newark, DE 19711</p>
                      <a 
                        href="https://maps.google.com/?q=1300+Capitol+Tr,+Newark,+DE+19711" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm"
                      >
                        Get directions <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#EDF9EE] text-[#3D9C42] p-2 rounded-lg mr-4 flex-shrink-0 w-14 h-14 flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-800">Phone</h4>
                    <p className="text-gray-700 text-base">(302) 691-3048</p>
                    <a 
                      href="tel:3026913048" 
                      className="inline-flex items-center text-[#3D9C42] hover:text-[#2A6D2E] mt-2 transition-colors duration-300 text-sm"
                    >
                      Call now
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#FFF9E6] text-[#C7A500] p-2 rounded-lg mr-4 flex-shrink-0 w-14 h-14 flex items-center justify-center">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-800">Hours</h4>
                    <div>
                      <p className="text-gray-700 text-base mb-1">Monday - Saturday: 8:30 AM - 9:00 PM</p>
                      <p className="text-gray-700 text-base">Sunday: 8:30 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E7F3FF] text-[#1877F2] p-2 rounded-lg mr-4 flex-shrink-0 w-14 h-14 flex items-center justify-center">
                    <Facebook className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-3 text-gray-800">Social Media</h4>
                    <a 
                      href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#1877F2] hover:text-[#0A59C0] transition-colors duration-300 text-base"
                    >
                      Follow us on Facebook <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl lg:col-span-3 border border-gray-100 relative h-[500px] md:h-[600px]">
            <iframe 
              src="https://maps.google.com/maps?q=2125+W+Newport+Pike,+Wilmington,+DE+19804&t=&z=11&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Gente Bonita Market Wilmington Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map overlay with buttons for both locations */}
            <div className="absolute bottom-6 right-6 z-10 flex flex-col space-y-2">
              <a href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#1D3557] hover:bg-[#D41414] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full">
                  Wilmington Location
                  <MapPin className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </a>
              <a href="https://maps.google.com/?q=1300+Capitol+Tr,+Newark,+DE+19711" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#1D3557] hover:bg-[#D41414] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 group w-full">
                  Newark Location
                  <MapPin className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Full green background extension that matches footer */}
      <div className="absolute bottom-0 left-0 w-full bg-[#3D9C42]" style={{height: '80px', transform: 'translateY(80px)'}}></div>
    </section>
  );
};

export default Contact;
