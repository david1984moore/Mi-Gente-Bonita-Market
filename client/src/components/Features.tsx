import { Store, Utensils, Heart } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureProps) => {
  return (
    <div className="text-center p-6 transition-transform hover:scale-105">
      <div className="text-[#D41414] text-4xl mb-4 flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-['Poppins'] font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Store className="h-10 w-10" />,
      title: "Authentic Products",
      description: "Enjoy a wide selection of authentic Latino groceries, spices, and specialty items."
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Fresh Food",
      description: "We offer fresh produce, meats, and prepared foods that taste like home."
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Community Focus",
      description: "We're proud to serve our local community with products that celebrate our culture."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
