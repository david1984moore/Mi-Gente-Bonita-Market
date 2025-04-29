import { MapPin, Phone, Clock, Globe, Facebook, ExternalLink, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

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
                  <h4 className="font-bold text-lg mb-1 text-gray-800">Locations</h4>
                  <div className="mb-3">
                    <p className="text-gray-700 font-semibold">Wilmington Location:</p>
                    <p className="text-gray-700">2125 W Newport Pike, Wilmington, DE 19804</p>
                    <a 
                      href="https://maps.google.com/?q=2125+W+Newport+Pike,+Wilmington,+DE+19804" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm font-medium"
                    >
                      Get directions <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-gray-700 font-semibold">Newark Location:</p>
                    <p className="text-gray-700">1300 Capitol Tr, Newark, DE 19711</p>
                    <a 
                      href="https://maps.google.com/?q=1300+Capitol+Tr,+Newark,+DE+19711" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#D41414] hover:text-[#891414] mt-1 transition-colors duration-300 text-sm font-medium"
                    >
                      Get directions <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
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
            <MapContainer 
              center={[39.7, -75.7]} 
              zoom={10} 
              style={{ height: "100%", width: "100%" }}
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[39.7159077, -75.6408856]}>
                <Popup>
                  <div className="text-center p-1">
                    <strong>Wilmington Location</strong><br />
                    2125 W Newport Pike<br />
                    Wilmington, DE 19804
                  </div>
                </Popup>
              </Marker>
              <Marker position={[39.7052825, -75.75975139999999]}>
                <Popup>
                  <div className="text-center p-1">
                    <strong>Newark Location</strong><br />
                    1300 Capitol Tr<br />
                    Newark, DE 19711
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
            
            {/* Map overlay with buttons for both locations */}
            <div className="absolute bottom-6 right-6 z-[1000] flex flex-col space-y-2">
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
    </section>
  );
};

export default Contact;
