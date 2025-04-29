import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { Logo } from "../assets/logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'}`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex items-center cursor-pointer"
        >
          <Logo className="h-16 w-auto" />
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[#1D3557] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link text-[#1D3557] hover:text-[#D41414] font-medium transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link text-[#1D3557] hover:text-[#D41414] font-medium transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="nav-link text-[#1D3557] hover:text-[#D41414] font-medium transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877F2] hover:text-[#3D9C42] transition duration-300"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white ${isOpen ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-4 space-y-4">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-[#1D3557] hover:text-[#D41414] font-medium p-2 cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-[#1D3557] hover:text-[#D41414] font-medium p-2 cursor-pointer"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="block text-[#1D3557] hover:text-[#D41414] font-medium p-2 cursor-pointer"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <a
            href="https://www.facebook.com/people/Mi-Gente-Bonita-Market/100078536995749/"
            className="block text-[#1877F2] hover:text-[#3D9C42] p-2 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-2 fill-current">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
