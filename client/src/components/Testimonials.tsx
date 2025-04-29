import { Star, StarHalf, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

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

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4 relative inline-block">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            Our customers love shopping with us. Here's what they have to say about their experiences.
          </p>
        </div>
        
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
      </div>
    </section>
  );
};

export default Testimonials;
