import { Link } from "react-scroll";
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
            <p className="text-white">Your authentic Latino market in Stanton, DE</p>
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
              className="text-[#1877F2] hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
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
