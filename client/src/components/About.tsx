import { MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">About Our Market</h2>
            <div className="w-20 h-1 bg-[#D41414] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Serving our community with pride since 2010</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Market interior" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-['Poppins'] font-bold mb-4 text-[#3D9C42]">Our Story</h3>
              
              <p className="mb-4 text-gray-700">
                Mi Gente Bonita Market was founded with a simple mission: to bring authentic Latino products to our community in Newark. What started as a small family business has grown into a beloved neighborhood market.
              </p>
              
              <p className="mb-6 text-gray-700">
                We take pride in offering a wide variety of products imported directly from Latin America, along with freshly prepared foods that remind our customers of home. Our market serves as both a grocery store and a cultural hub where our community can connect.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <Button className="bg-[#D41414] hover:bg-[#3D9C42] text-white py-2 px-6 rounded-full transition duration-300 inline-flex items-center">
                    <MapPin className="h-4 w-4 mr-2" /> Visit Us
                  </Button>
                </Link>
                <a
                  href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#1877F2] hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 inline-flex items-center">
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
