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
      stars.push(<Star key={`star-${i}`} className="fill-[#FFB703] text-[#FFB703] inline" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="fill-[#FFB703] text-[#FFB703] inline" />);
    }

    return stars;
  };

  return (
    <div className="bg-[#F1FAEE] p-6 rounded-lg shadow-md border-l-4 border-[#E63946]">
      <div className="text-[#FFB703] mb-4 flex">
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
      text: "\"I finally found a place that has all the ingredients I need for my traditional recipes. The staff is always friendly and helpful!\"",
      name: "- Maria G."
    },
    {
      rating: 5,
      text: "\"Their fresh bread and pastries are amazing! It's like having a piece of home. This market is a treasure in our neighborhood.\"",
      name: "- Carlos R."
    },
    {
      rating: 4.5,
      text: "\"Great selection of products from all over Latin America. The prepared foods are delicious and authentic. Highly recommend!\"",
      name: "- Elena T."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-[#E63946] mx-auto mb-6"></div>
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
