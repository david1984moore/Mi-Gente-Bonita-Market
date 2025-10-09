import { Star, StarHalf, Quote, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

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
    <div className="bg-[#F5E6D3] p-8 rounded-2xl shadow-mercado-red hover:shadow-mercado-red-lg transition-all duration-300 relative azulejo-corner">
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
        <ScrollReveal 
          key={index} 
          direction="up" 
          delay={index * 0.2}
        >
          <Testimonial
            rating={testimonial.rating}
            text={testimonial.text}
            name={testimonial.name}
            initials={testimonial.initials}
            backgroundColor={testimonial.backgroundColor}
          />
        </ScrollReveal>
      ))}
    </div>
  );

  return (
    <>
      <section id="testimonials" className="py-10 zone-testimonials section-connector">
      
      <div className="w-full mx-auto px-0 lg:px-4 xl:px-6">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-8 md:mb-10">
            {mounted && isMobile ? (
              <>
                <button
                  onClick={() => {
                    const contentDiv = document.getElementById('testimonials-content');
                    if (contentDiv) {
                      const isCurrentlyHidden = contentDiv.style.display === 'none' || !contentDiv.style.display;
                      contentDiv.style.display = isCurrentlyHidden ? 'block' : 'none';
                    }
                  }}
                className="flex items-center justify-center gap-2 mx-auto"
                aria-expanded="false"
                aria-controls="testimonials-content"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
                  {t("testimonials.title")}
                </h2>
                <ChevronDown className="h-6 w-6 text-[#D41414]" />
              </button>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                {t("testimonials.subtitle")}
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-[#1D1D1F]">
                {t("testimonials.title")}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4">
                {t("testimonials.subtitle")}
              </p>
            </>
          )}
          </div>
        </ScrollReveal>
        
        {/* Conditionally render collapsible content on mobile */}
        {mounted && isMobile ? (
          <div className="w-full">
            <div id="testimonials-content" className="pt-6 w-full" style={{ display: 'none' }}>
              {testimonialsGrid}
            </div>
          </div>
        ) : (
          testimonialsGrid
        )}
      </div>
    </section>
    </>
  );
};

export default Testimonials;
