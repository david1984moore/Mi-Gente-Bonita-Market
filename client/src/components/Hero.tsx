import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import limesBackground from "@assets/limes_1759971097571.jpeg";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image - overflow-hidden only on background layers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: `url(${limesBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Mercado Vivo gradient overlay */}
      <div className="absolute inset-0 opacity-80 zone-hero overflow-hidden" />
      
      {/* Content */}
      <section id="home" className="relative z-10 flex items-center justify-center min-h-screen pt-40">
        <motion.div 
          className="text-center w-full px-2 lg:px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading */}
          <div className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-4" 
              style={{ letterSpacing: '-0.04em' }}
              variants={itemVariants}
            >
              <span className="text-white opacity-90">Mi</span>{' '}
              <span className="text-white text-[1.15em]">GENTE</span>{' '}
              <span className="text-white">Bonita</span>
              <span className="block text-gradient-market tracking-wider mt-2">
                MARKET
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed" 
              style={{ letterSpacing: '0.01em' }}
              variants={itemVariants}
            >
              {t("hero.tagline")}
            </motion.p>
          </div>
          

          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.div variants={buttonVariants}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="inline-block"
              >
                <button className="relative bg-[#D41414] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-mercado-red-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {t("contact.hours.title")}
                </button>
              </Link>
            </motion.div>
            
            <motion.div variants={buttonVariants}>
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                className="inline-block"
              >
                <button className="relative bg-[#D41414] hover:bg-[#B91C1C] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-mercado-red-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  {t("gallery.title")}
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      

    </div>
  );
};

export default Hero;