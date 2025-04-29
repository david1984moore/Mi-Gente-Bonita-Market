import { MapPin, Phone, Clock, Globe, Facebook, Navigation, CalendarClock, Car } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Hours data for better organization
  const hours = [
    { day: "Monday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "8:00 PM" },
    { day: "Sunday", open: "9:00 AM", close: "6:00 PM" },
  ];
  
  // Get today's day and check if the market is open now
  const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
  const todayIndex = today === 0 ? 6 : today - 1; // Adjust to our array index
  const todayHours = hours[todayIndex];
  
  // Quick info cards
  const quickInfoCards = [
    {
      icon: <Navigation className="h-6 w-6" />,
      title: "Directions",
      info: "Easy to find in Stanton, DE",
      color: "bg-[#D41414]/10",
      textColor: "text-[#D41414]",
      iconColor: "text-[#D41414]"
    },
    {
      icon: <CalendarClock className="h-6 w-6" />,
      title: "Open Today",
      info: `${todayHours.open} - ${todayHours.close}`,
      color: "bg-[#3D9C42]/10",
      textColor: "text-[#3D9C42]",
      iconColor: "text-[#3D9C42]"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Parking",
      info: "Available on-site",
      color: "bg-[#FFD700]/10",
      textColor: "text-[#1D3557]",
      iconColor: "text-amber-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#D41414]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-[#3D9C42]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold mb-6 relative inline-block">
            Visit Our Market
            <div className="absolute w-full h-1 left-0 bottom-0 bg-gradient-to-r from-[#D41414] via-[#3D9C42] to-[#FFD700] rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            We'd love to see you in person and help you find your favorite products!
          </p>
        </div>
        
        {/* Quick info cards - mobile only */}
        <div className="grid grid-cols-3 gap-4 mb-10 md:hidden">
          {quickInfoCards.map((card, index) => (
            <div 
              key={index} 
              className={`${card.color} rounded-xl p-4 text-center shadow-sm`}
            >
              <div className={`${card.iconColor} flex justify-center mb-2`}>
                {card.icon}
              </div>
              <h4 className={`${card.textColor} font-bold text-sm mb-1`}>{card.title}</h4>
              <p className="text-xs text-gray-600">{card.info}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 order-2 md:order-1">
            <h3 className="text-2xl font-['Poppins'] font-bold mb-6 text-[#3D9C42] flex items-center">
              <div className="w-10 h-10 rounded-full bg-[#3D9C42]/10 flex items-center justify-center mr-3">
                <Phone className="h-5 w-5 text-[#3D9C42]" />
              </div>
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#D41414]/10 p-3 rounded-lg text-[#D41414] mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#1D3557]">Address:</h4>
                  <p className="text-gray-700">2125 W Newport Pike, Wilmington, DE 19804</p>
                  <a 
                    href="https://maps.google.com/?q=Mi+Gente+Bonita+Market+Wilmington+DE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#D41414] text-sm hover:underline mt-1 inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#D41414]/10 p-3 rounded-lg text-[#D41414] mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#1D3557]">Phone:</h4>
                  <p className="text-gray-700">
                    <a 
                      href="tel:+13026913048" 
                      className="hover:text-[#D41414] transition-colors"
                    >
                      (302) 691-3048
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#D41414]/10 p-3 rounded-lg text-[#D41414] mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#1D3557]">Hours:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {/* Weekday hours */}
                    <div>
                      <p className="text-gray-700 font-medium">Monday - Saturday:</p>
                      <p className="text-gray-600">8:00 AM - 8:00 PM</p>
                    </div>
                    {/* Weekend hours */}
                    <div>
                      <p className="text-gray-700 font-medium">Sunday:</p>
                      <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1877F2]/10 p-3 rounded-lg text-[#1877F2] mr-4">
                  <Facebook className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-[#1D3557]">Social Media:</h4>
                  <a 
                    href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#1877F2] hover:text-[#D41414] transition duration-300 flex items-center"
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-[450px] border border-gray-200">
              {!mapLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-500">Loading map...</div>
                </div>
              )}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.9114830891197!2d-75.64307432343083!3d39.71590777919882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c701bc530d17ef%3A0xef3ea0bcab10e321!2sMi%20Gente%20Bonita%20Market!5e0!3m2!1sen!2sus!4v1708378293407!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mi Gente Bonita Market Location"
                onLoad={() => setMapLoaded(true)}
                className={mapLoaded ? 'opacity-100' : 'opacity-0'}
              ></iframe>
            </div>
            
            {/* Quick info cards - desktop only */}
            <div className="hidden md:grid grid-cols-3 gap-6 mt-6">
              {quickInfoCards.map((card, index) => (
                <div 
                  key={index} 
                  className={`${card.color} rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <div className={`${card.iconColor} flex justify-center mb-3`}>
                    {card.icon}
                  </div>
                  <h4 className={`${card.textColor} font-bold mb-1`}>{card.title}</h4>
                  <p className="text-sm text-gray-600">{card.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
