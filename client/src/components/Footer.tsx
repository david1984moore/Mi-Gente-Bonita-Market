import { Link } from "react-scroll";
import { Facebook } from "lucide-react";
import { Logo } from "../assets/logo";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-[#3D9C42] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="font-['Poppins'] font-bold text-2xl mb-2 flex justify-center md:justify-start">
              <Logo className="h-12 w-auto bg-white rounded-lg p-1" />
            </div>
            <p className="text-white">Your authentic Latino market in Newark, DE</p>
          </div>
          
          <div className="flex space-x-6">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#FFD700] transition duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#FFD700] transition duration-300 cursor-pointer"
            >
              About
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white hover:text-[#FFD700] transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
            <a
              href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#2a7a2e] mt-8 pt-8 text-center text-white text-sm">
          <p>&copy; {year} Mi Gente Bonita Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
