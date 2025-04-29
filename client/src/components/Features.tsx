import { Store, Utensils, Heart, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureProps) => {
  return (
    <div className="relative group">
      {/* Background decorative element */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 
        bg-gradient-to-br ${color} blur-xl`}></div>
      
      <div className="bg-white h-full rounded-xl p-8 transition-all duration-500 border border-gray-100 shadow-sm hover:shadow-xl group-hover:translate-y-[-5px] relative z-10">
        <div className={`${color.includes('from-[#D41414]') ? 'text-[#D41414]' : 
                         color.includes('from-[#3D9C42]') ? 'text-[#3D9C42]' : 
                         'text-[#FFD700]'} 
                         mb-6 flex justify-center items-center`}>
          <div className="relative">
            <div className={`absolute inset-0 ${color} rounded-full blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
            <div className="relative p-4 bg-white rounded-full shadow-md">
              {icon}
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-['Poppins'] font-bold mb-4 text-center">{title}</h3>
        
        <p className="text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Store className="h-10 w-10" />,
      title: "Authentic Products",
      description: "Enjoy a wide selection of authentic Latino groceries, spices, and specialty items imported directly from Latin America.",
      color: "from-[#D41414]/20 to-red-400/5"
    },
    {
      icon: <Utensils className="h-10 w-10" />,
      title: "Fresh Food",
      description: "We offer fresh produce, meats, and prepared foods that taste like home, sourced locally whenever possible.",
      color: "from-[#3D9C42]/20 to-green-400/5"
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Community Focus",
      description: "We're proud to serve our local community with products that celebrate our shared heritage and culture.",
      color: "from-[#FFD700]/20 to-yellow-400/5"
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Cultural Hub",
      description: "More than just a market, we're a place where the community can connect and find a taste of home.",
      color: "from-[#D41414]/20 to-red-400/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">What Makes Us Special</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-[#D41414] via-[#3D9C42] to-[#FFD700] rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We pride ourselves on offering the best authentic Latino products and experience in Delaware
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
      
      {/* Decorative wave divider */}
      <div className="w-full h-24 mt-16 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
          <path 
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
            className="fill-gray-50 stroke-none"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Features;
