import { ShoppingBasket, Utensils, Heart, MapPin } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureProps) => {
  return (
    <div className="relative p-8 rounded-xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className={`${color} text-white p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-xl font-['Poppins'] font-bold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <ShoppingBasket className="h-8 w-8" />,
      title: "Authentic Products",
      description: "Enjoy a wide selection of authentic Latino groceries, spices, and specialty items imported directly from Latin America.",
      color: "bg-[#D41414]"
    },
    {
      icon: <Utensils className="h-8 w-8" />,
      title: "Fresh Food",
      description: "We offer fresh produce, meats, and prepared foods that taste like home. Quality and freshness guaranteed in every purchase.",
      color: "bg-[#3D9C42]"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Focus",
      description: "We're proud to serve our fellow Delawareans with products that celebrate our rich Latino culture and traditions.",
      color: "bg-[#FFB100]"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Convenient Location",
      description: "Two easily accessible locations in Newark, DE and Stanton, DE with friendly staff ready to help you find exactly what you're looking for.",
      color: "bg-[#1D3557]"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our store offers the finest selection of Latino products in Delaware.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
