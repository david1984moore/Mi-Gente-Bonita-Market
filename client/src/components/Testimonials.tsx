import { Star, StarHalf, Quote, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

interface TestimonialProps {
  rating: number;
  text: string;
  name: string;
  initials: string;
  backgroundColor: string;
}

const Testimonial = ({ rating, text, name, initials, backgroundColor }: TestimonialProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#FFD700] text-[#FFD700] inline h-5 w-5" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#FFD700] text-[#FFD700] inline h-5 w-5" />);
    }

    return stars;
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative">
      {/* Decorative quote icon */}
      <div className="absolute top-0 right-0 transform translate-x-[-20px] translate-y-[-15px]">
        <Quote className="h-14 w-14 text-gray-100 transform rotate-180" />
      </div>
      
      <div className="flex items-center mb-6">
        <Avatar className={`h-14 w-14 ${backgroundColor} mr-4 border-2 border-white shadow`}>
          <AvatarFallback className="text-white font-medium">{initials}</AvatarFallback>
        </Avatar>
        <div>
          <div className="font-bold text-[#1D3557]">{name}</div>
          <div className="flex mt-1">
            {renderStars()}
          </div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-3 relative z-10 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

const Testimonials = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // We need to wait for client-side hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const testimonials = [
    {
      rating: 5,
      text: "They have fresh produce, I could not believe they had mamoncillos ready to eat or really chew and ruda plants. Very nice crew and very helpful. They need more space indoors and in the parking area. Variable in everything. I love it....",
      name: "Gloria Forero Chaves",
      initials: "GF",
      backgroundColor: "bg-[#D41414]"
    },
    {
      rating: 5,
      text: "Buen ambiente sempre te atienden de marabilla tiene las 3 B: Bueno, Bonito, Barato",
      name: "Elida Ramirez",
      initials: "ER",
      backgroundColor: "bg-[#3D9C42]"
    },
    {
      rating: 5,
      text: "Son personas amables muy serviciales puedes encontrará gran variedad de productos 100%mexicanos me gusta aparte de shaver envios pagar con tarjeta",
      name: "Jesus Heriberto Rios",
      initials: "JH",
      backgroundColor: "bg-[#1D3557]"
    }
  ];

  // Testimonials grid component
  const testimonialsGrid = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          rating={testimonial.rating}
          text={testimonial.text}
          name={testimonial.name}
          initials={testimonial.initials}
          backgroundColor={testimonial.backgroundColor}
        />
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-10 bg-gray-50 section-connector">
      {/* Add a visual divider at the top of the section */}
      <div className="w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" 
             className="text-white relative block h-8 w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                fill="currentColor"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-3 relative inline-block">
            {t("testimonials.title")}
            <span className="absolute left-0 right-0 bottom-[-4px] h-0.5 bg-[#3D9C42]/30"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
            {t("testimonials.subtitle")}
          </p>
        </div>
        
        {/* Conditionally render collapsible content on mobile */}
        {mounted && isMobile ? (
          <div className="w-full">
            <button
              onClick={() => {
                const contentDiv = document.getElementById('testimonials-content');
                if (contentDiv) {
                  contentDiv.style.display = contentDiv.style.display === 'none' ? 'block' : 'none';
                }
              }}
              className="w-full py-3 flex items-center justify-center gap-1 text-base font-semibold bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-md text-[#1D1D1F]"
            >
              <span>{t("common.showContent")}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div id="testimonials-content" className="pt-6 w-full" style={{ display: 'none' }}>
              {testimonialsGrid}
            </div>
          </div>
        ) : (
          testimonialsGrid
        )}
      </div>
    </section>
  );
};

export default Testimonials;
