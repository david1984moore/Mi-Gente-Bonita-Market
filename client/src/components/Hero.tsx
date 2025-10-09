import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import limesBackground from "@assets/limes_1759971097571.jpeg";

const Hero = () => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-100"
        style={{ 
          backgroundImage: `url(${limesBackground})`,
          transform: `translateY(${scrollY * -0.3}px)`
        }}
      />
      
      {/* Mercado Vivo gradient overlay */}
      <div className="absolute inset-0 opacity-80 zone-hero" />
      
      {/* Content */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4" style={{ letterSpacing: '-0.04em' }}>
              <span className="text-white opacity-90">Mi</span>{' '}
              <span className="text-white text-[1.15em]">GENTE</span>{' '}
              <span className="text-white">Bonita</span>
              <span className="block text-gradient-market tracking-wider mt-2">
                MARKET
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '0.01em' }}>
              {t("hero.tagline")}
            </p>
          </div>
          

          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="inline-block"
            >
              <button className="relative bg-[#D41414] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-mercado-red-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cta-glow">
                {t("contact.hours.title")}
              </button>
            </Link>
            
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              className="inline-block"
            >
              <button className="relative bg-[#D41414] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-mercado-red-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cta-glow">
                {t("gallery.title")}
              </button>
            </Link>
          </div>
        </div>
      </section>
      

    </div>
  );
};

export default Hero;