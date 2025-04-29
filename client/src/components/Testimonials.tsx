import { Star, StarHalf } from "lucide-react";

interface TestimonialProps {
  rating: number;
  text: string;
  name: string;
}

const Testimonial = ({ rating, text, name }: TestimonialProps) => {
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
    <div className="bg-[#F8FDF9] p-6 rounded-lg shadow-md border-l-4 border-[#D41414]">
      <div className="text-[#FFD700] mb-4 flex">
        {renderStars()}
      </div>
      <p className="italic text-gray-700 mb-4">{text}</p>
      <div className="font-bold">{name}</div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      rating: 5,
      text: "\"They have fresh produce, I could not believe they had mamoncillos ready to eat or really chew and ruda plants. Very nice crew and very helpful. They need more space indoors and in the parking area. Variable in everything. I love it....\"",
      name: "- Gloria Forero Chaves"
    },
    {
      rating: 5,
      text: "\"Buen ambiente sempre te atienden de marabilla tiene las 3 B: Bueno, Bonito, Barato\"",
      name: "- Elida Ramirez"
    },
    {
      rating: 5,
      text: "\"Son personas amables muy serviciales puedes encontrará gran variedad de productos 100%mexicanos me gusta aparte de shaver envios pagar con tarjeta\"",
      name: "- Jesus heriberto Rios ramirez"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#D41414] mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
