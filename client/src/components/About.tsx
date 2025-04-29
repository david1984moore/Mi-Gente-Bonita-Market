import { MapPin, Facebook, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";
import interior1 from "../assets/store-photos/interior1.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold mb-6 relative inline-block">
              About Our Market
              <div className="absolute w-full h-1 left-0 bottom-0 bg-gradient-to-r from-[#D41414] via-[#3D9C42] to-[#FFD700] rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Serving our community with pride since 2020
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFD700]/10 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#3D9C42]/10 rounded-full -z-10"></div>
                
                {/* Image with enhancements */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#D41414]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
                  <img 
                    src={interior1} 
                    alt="Market interior with colorful products and piñatas" 
                    className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Stats below image - mobile only */}
              <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <Calendar className="h-5 w-5 text-[#D41414]" />
                  </div>
                  <h4 className="text-center font-bold">Since 2020</h4>
                  <p className="text-center text-sm text-gray-500">Proudly Serving</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-5 w-5 text-[#3D9C42]" />
                  </div>
                  <h4 className="text-center font-bold">Family Owned</h4>
                  <p className="text-center text-sm text-gray-500">Local Business</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl font-['Poppins'] font-bold mb-6 text-[#3D9C42]">Our Story</h3>
              
              {/* Stats above content - desktop only */}
              <div className="hidden md:grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-[#D41414] mr-3" />
                    <h4 className="font-bold text-lg">Since 2020</h4>
                  </div>
                  <p className="text-sm text-gray-600">Proudly serving the Delaware community</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <Users className="h-5 w-5 text-[#3D9C42] mr-3" />
                    <h4 className="font-bold text-lg">Family Owned</h4>
                  </div>
                  <p className="text-sm text-gray-600">A local business with heart and passion</p>
                </div>
              </div>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Mi Gente Bonita Market was founded with a simple mission: to bring authentic Latino products to our community in Stanton, Delaware. What started as a small family business has grown into a beloved neighborhood market that brings a taste of home to many families.
              </p>
              
              <p className="mb-8 text-gray-700 leading-relaxed">
                We take pride in offering a wide variety of products imported directly from Latin America, along with freshly prepared foods that remind our customers of home. Our market serves as both a grocery store and a cultural hub where our community can connect and celebrate our shared heritage.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button className="bg-[#D41414] hover:bg-[#3D9C42] text-white shadow-md hover:shadow-lg py-2.5 px-6 rounded-lg transition-all duration-300 inline-flex items-center hover:translate-y-[-2px]">
                    <MapPin className="h-4 w-4 mr-2" /> Visit Us
                  </Button>
                </Link>
                <a
                  href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#1877F2] hover:bg-blue-600 text-white shadow-md hover:shadow-lg py-2.5 px-6 rounded-lg transition-all duration-300 inline-flex items-center hover:translate-y-[-2px]">
                    <Facebook className="h-4 w-4 mr-2" /> Follow Us
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
