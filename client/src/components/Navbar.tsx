import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X, Facebook } from "lucide-react";
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
            className="text-[#D41414] hover:text-[#3D9C42] transition duration-300"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
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
            className="block text-[#D41414] hover:text-[#3D9C42] p-2 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggleMenu}
          >
            <Facebook className="h-5 w-5 mr-2" /> Facebook
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
