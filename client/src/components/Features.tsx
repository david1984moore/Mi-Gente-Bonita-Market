import { ShoppingBasket, Utensils, Heart, MapPin, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";

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
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  
  // We need to wait for client-side hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
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
      description: "Two easily accessible locations in Wilmington, DE and Newark, DE. Our friendly staff are ready to help you find exactly what you're looking for.",
      color: "bg-[#1D3557]"
    }
  ];

  const featuresContent = (
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
  );

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {mounted && isMobile ? (
            <>
              <button
                onClick={() => {
                  const contentDiv = document.getElementById('features-content');
                  if (contentDiv) {
                    const isCurrentlyHidden = contentDiv.style.display === 'none' || !contentDiv.style.display;
                    contentDiv.style.display = isCurrentlyHidden ? 'block' : 'none';
                  }
                }}
                className="flex items-center justify-center gap-2 mx-auto"
                aria-expanded="false"
                aria-controls="features-content"
              >
                <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Why Choose Us</h2>
                <ChevronDown className="h-6 w-6 text-[#FFB100]" />
              </button>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our store offers the finest selection of Latino products in Delaware.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-3xl md:text-4xl font-['Poppins'] font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our store offers the finest selection of Latino products in Delaware.
              </p>
            </>
          )}
        </div>
        
        {mounted && isMobile ? (
          <div className="w-full">
            <div id="features-content" className="pt-6 w-full" style={{ display: 'none' }}>
              {featuresContent}
            </div>
          </div>
        ) : (
          featuresContent
        )}
      </div>
    </section>
  );
};

export default Features;
