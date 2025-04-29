import { Star, StarHalf, Quote } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface TestimonialProps {
  rating: number;
  text: string;
  name: string;
  isActive?: boolean;
}

const Testimonial = ({ rating, text, name, isActive = false }: TestimonialProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isActive && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [isActive]);
  
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="fill-[#FFD700] text-[#FFD700] inline" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#FFD700] text-[#FFD700] inline" />);
    }

    return stars;
  };

  return (
    <div 
      ref={cardRef}
      className={`bg-white p-8 rounded-xl shadow-lg border-t-4 ${isActive ? 'border-[#D41414]' : 'border-[#FFD700]'} 
      transition-all duration-500 transform hover:shadow-xl
      ${isActive ? 'scale-105 relative z-10' : 'scale-100'}`}
    >
      <div className="absolute -top-5 left-4 bg-white p-2 rounded-full shadow-md text-[#D41414]">
        <Quote className="h-6 w-6 fill-current" />
      </div>
      
      <div className="text-[#FFD700] mb-5 flex">
        {renderStars()}
      </div>
      
      <p className="italic text-gray-700 mb-6 leading-relaxed">{text}</p>
      
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D41414]/60 to-[#3D9C42]/60 flex items-center justify-center text-white font-bold text-lg">
          {name.split(" ")[0][0]}
        </div>
        <div className="ml-3">
          <div className="font-bold text-[#1D3557]">{name}</div>
          <div className="text-sm text-gray-500">Customer</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      rating: 5,
      text: "\"They have fresh produce, I could not believe they had mamoncillos ready to eat or really chew and ruda plants. Very nice crew and very helpful. They need more space indoors and in the parking area. Variable in everything. I love it....\"",
      name: "Gloria Forero Chaves"
    },
    {
      rating: 5,
      text: "\"Buen ambiente sempre te atienden de marabilla tiene las 3 B: Bueno, Bonito, Barato\"",
      name: "Elida Ramirez"
    },
    {
      rating: 5,
      text: "\"Son personas amables muy serviciales puedes encontrará gran variedad de productos 100%mexicanos me gusta aparte de shaver envios pagar con tarjeta\"",
      name: "Jesus Heriberto Rios Ramirez"
    },
    {
      rating: 5,
      text: "\"Fantastic selection of authentic products that remind me of home. The staff is always friendly and helpful!\"",
      name: "Maria Rodriguez"
    }
  ];
  
  // Auto-scroll through testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);
  
  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute left-0 top-1/4 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-[#D41414]/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-['Poppins'] font-bold mb-6 text-[#1D3557]">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#D41414] via-[#3D9C42] to-[#FFD700] rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our community has to say about Mi Gente Bonita Market.
          </p>
        </div>
        
        {/* Testimonials - Desktop View */}
        <div className="hidden md:block">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Testimonial
                key={index}
                rating={testimonial.rating}
                text={testimonial.text}
                name={testimonial.name}
                isActive={index === activeIndex}
              />
            ))}
          </div>
          
          {/* Testimonial navigation dots */}
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.slice(0, 3).map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                ${index === activeIndex ? 'bg-[#D41414] w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Testimonials - Mobile View (Carousel) */}
        <div className="md:hidden relative">
          <div className="overflow-x-auto pb-10 hide-scrollbar" style={{ scrollSnapType: 'x mandatory' }}>
            <div className="flex space-x-4">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-full px-4"
                  style={{ scrollSnapAlign: 'center' }}
                >
                  <Testimonial
                    rating={testimonial.rating}
                    text={testimonial.text}
                    name={testimonial.name}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none
                ${index === activeIndex ? 'bg-[#D41414] w-5' : 'bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
