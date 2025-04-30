import { MapPin, Calendar, ShoppingCart, Users, Star, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import storefront from "../assets/store-photos/storefront.png";
import customerTomatoes from "../assets/store-photos/customer-tomatoes.png";

const About = () => {
  return (
    <section id="about" className="pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-[#F9FBF7] to-white section-connector relative overflow-hidden">
      {/* Decorative pattern elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full border-8 border-[#3D9C42]"></div>
        <div className="absolute top-20 right-10 w-32 h-32 rounded-full border-8 border-[#D41414]"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-8 border-[#3D9C42]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Poppins'] font-bold mb-4 relative inline-block">
              About Our Market
              <div className="absolute h-3 w-full -bottom-2 bg-[#3D9C42]/10 left-0 -rotate-1 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-5 font-light">
              Serving our community with pride since 2023
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#D41414]/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3D9C42]/10 rounded-full -z-10"></div>
                <div className="absolute top-8 right-8 w-16 h-16 bg-[#FFC107]/20 rounded-full -z-10 animate-pulse"></div>
                
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
              <div className="grid grid-cols-2 gap-4 mt-10">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-[#3D9C42]/10 p-3 rounded-full mr-4">
                    <Calendar className="h-5 w-5 text-[#3D9C42]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600">Established</h4>
                    <p className="text-lg font-bold">2023</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 flex items-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-[#D41414]/10 p-3 rounded-full mr-4">
                    <ShoppingCart className="h-5 w-5 text-[#D41414]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-600">Locations</h4>
                    <p className="text-lg font-bold">2 Stores</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative">
                <div className="absolute -top-4 -right-4 bg-[#FFC107] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-[#3D9C42] relative inline-block">
                  Our Story
                  <span className="absolute left-0 right-0 bottom-[-4px] h-1 bg-[#3D9C42]/30 rounded-full"></span>
                </h3>
                
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Mi Gente Bonita Market was founded with a simple mission: to bring authentic Latino products to our community in Delaware. What started as a small family business has grown into a beloved neighborhood market with two locations in Wilmington and Newark.
                </p>
                
                <p className="mb-8 text-gray-700 leading-relaxed">
                  We take pride in offering a wide variety of products imported directly from Latin America, along with freshly prepared foods that remind our customers of home. Our market serves as both a grocery store and a cultural hub where our community can connect.
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center">
                    <div className="bg-[#3D9C42]/10 p-2 rounded-full mr-3">
                      <Globe className="h-5 w-5 text-[#3D9C42]" />
                    </div>
                    <span className="text-gray-700">Authentic Products</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-[#D41414]/10 p-2 rounded-full mr-3">
                      <Users className="h-5 w-5 text-[#D41414]" />
                    </div>
                    <span className="text-gray-700">Community Focused</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="group"
                  >
                    <Button className="bg-[#D41414] hover:bg-[#B51212] text-white py-3 px-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 inline-flex items-center group-hover:translate-y-[-2px]">
                      <MapPin className="h-5 w-5 mr-2" /> Visit Us
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
