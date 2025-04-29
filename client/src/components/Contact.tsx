import { MapPin, Phone, Clock, Globe, Facebook, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-100">
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
          <div className="bg-white rounded-2xl shadow-xl lg:col-span-2 overflow-hidden transform transition-all duration-300 hover:shadow-2xl border border-gray-100">
            <div className="bg-gradient-to-r from-[#D41414] to-[#891414] text-white p-6">
              <h3 className="text-2xl font-['Poppins'] font-bold">Contact Information</h3>
              <p className="text-white/80 mt-2">Visit us today or reach out with any questions</p>
            </div>
            
            <div className="p-8">
              <div className="mb-8 flex items-start group">
                <div className="bg-[#D41414]/10 text-[#D41414] p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-800">Address</h4>
                  <p className="text-gray-700">2125 W Newport Pike, Wilmington, DE 19804</p>
                  <a 
                    href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-2 transition-colors duration-300 text-sm font-medium"
                  >
                    Get directions <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
              
              <div className="mb-8 flex items-start group">
                <div className="bg-[#3D9C42]/10 text-[#3D9C42] p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-800">Phone</h4>
                  <p className="text-gray-700">(302) 691-3048</p>
                  <a 
                    href="tel:3026913048" 
                    className="inline-flex items-center text-[#3D9C42] hover:text-[#2A6D2E] mt-2 transition-colors duration-300 text-sm font-medium"
                  >
                    Call now
                  </a>
                </div>
              </div>
              
              <div className="mb-8 flex items-start group">
                <div className="bg-[#FFD700]/10 text-[#C7A500] p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-800">Hours</h4>
                  <div className="text-gray-700 grid grid-cols-3 gap-2">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span className="col-span-2">8:00 AM - 8:00 PM</span>
                    <span className="font-medium">Sunday:</span>
                    <span className="col-span-2">9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="bg-[#1877F2]/10 text-[#1877F2] p-3 rounded-lg mr-4">
                  <Facebook className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-gray-800">Social Media</h4>
                  <a 
                    href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#1877F2] hover:text-[#0A59C0] transition-colors duration-300"
                  >
                    <span className="font-medium">Follow us on Facebook</span> <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl lg:col-span-3 border border-gray-100 relative h-[500px] md:h-[600px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9114830891197!2d-75.64307432343083!3d39.71590777919882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701bc530d17ef%3A0xef3ea0bcab10e321!2sMi%20Gente%20Bonita%20Market!5e0!3m2!1sen!2sus!4v1708378293407!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Gente Bonita Market Location"
              className="absolute inset-0"
            ></iframe>
            
            {/* Map overlay with a call-to-action button */}
            <div className="absolute bottom-6 right-6 z-10">
              <a href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-[#1D3557] hover:bg-[#D41414] hover:text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  Get Directions
                  <MapPin className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
