import { Link } from "react-scroll";
import { useLanguage } from "@/contexts/LanguageContext";
import { ShoppingBag, MapPin, Clock } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_80%_80%,#d41414,transparent)]"></div>
      </div>
      
      {/* Content */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              Mi Gente Bonita
              <span className="block text-[#FFE970] bg-gradient-to-r from-[#FFE970] via-[#FFDE59] to-[#FFE970] bg-clip-text text-transparent">
                Market
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
              {t("hero.welcome")} - Your authentic Latin grocery experience in Delaware
            </p>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#D41414] rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fresh Products</h3>
              <p className="text-slate-400 text-sm text-center">Authentic Latin ingredients & fresh produce daily</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#D41414] rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Multiple Locations</h3>
              <p className="text-slate-400 text-sm text-center">Convenient stores across Delaware</p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-[#D41414] rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-2">Extended Hours</h3>
              <p className="text-slate-400 text-sm text-center">Open daily to serve our community</p>
            </div>
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
              <button className="bg-[#D41414] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Find Store Hours
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
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Clean bottom divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-white" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;