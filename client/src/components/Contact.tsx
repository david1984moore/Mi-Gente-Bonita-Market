import { MapPin, Phone, Clock, Globe, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Visit Our Market</h2>
          <div className="w-20 h-1 bg-[#E63946] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">We'd love to see you in person!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-['Poppins'] font-bold mb-6 text-[#457B9D]">Contact Information</h3>
            
            <div className="mb-6 flex items-start">
              <div className="text-[#E63946] text-2xl mr-4 mt-1">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Address:</h4>
                <p className="text-gray-700">126 E Main St, Newark, DE 19711</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="text-[#E63946] text-2xl mr-4 mt-1">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone:</h4>
                <p className="text-gray-700">(302) 368-0157</p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="text-[#E63946] text-2xl mr-4 mt-1">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Hours:</h4>
                <p className="text-gray-700">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="text-[#E63946] text-2xl mr-4 mt-1">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Social Media:</h4>
                <a 
                  href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#457B9D] hover:text-[#E63946] transition duration-300 flex items-center"
                >
                  <Facebook className="h-4 w-4 mr-2" /> Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9114830891197!2d-75.64307432343083!3d39.71590777919882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701bc530d17ef%3A0xef3ea0bcab10e321!2sMi%20Gente%20Bonita%20Market!5e0!3m2!1sen!2sus!4v1708378293407!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mi Gente Bonita Market Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
