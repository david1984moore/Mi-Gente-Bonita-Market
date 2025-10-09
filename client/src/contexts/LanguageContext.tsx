import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'es' | 'en';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  // Navbar
  "navbar.home": {
    es: "Inicio",
    en: "Home"
  },
  "navbar.about": {
    es: "Acerca De",
    en: "About"
  },
  "navbar.products": {
    es: "Productos",
    en: "Products"
  },
  "navbar.reviews": {
    es: "Reseñas",
    en: "Reviews"
  },
  "navbar.testimonials": {
    es: "Testimonios",
    en: "Testimonials"
  },
  "navbar.contact": {
    es: "Contacto",
    en: "Contact"
  },
  "navbar.menu": {
    es: "Menú",
    en: "Menu"
  },
  "navbar.callUs": {
    es: "Llámanos",
    en: "Call Us"
  },
  "navbar.getDirections": {
    es: "Cómo Llegar",
    en: "Get Directions"
  },
  
  // Hero
  "hero.welcome": {
    es: "Bienvenidos a",
    en: "Welcome to"
  },
  "hero.tagline": {
    es: "Tu experiencia auténtica de supermercado multicultural en Delaware",
    en: "Your authentic multi-cultural grocery experience in Delaware"
  },
  "hero.discoverMore": {
    es: "Descubre Más",
    en: "Discover More"
  },
  "hero.exploreBtn": {
    es: "Explora Nuestro Mercado",
    en: "Explore Our Market"
  },
  
  // About
  "about.title": {
    es: "Sobre Nuestro Mercado",
    en: "About Our Market"
  },
  "about.subtitle": {
    es: "",
    en: ""
  },
  "about.storyTitle": {
    es: "Nuestra Historia",
    en: "Our Story"
  },
  "about.storyPart1": {
    es: "Mi Gente Bonita Market fue fundado con una misión simple: llevar productos auténticos a nuestra comunidad en Delaware. Lo que comenzó como un pequeño negocio familiar se ha convertido en un mercado de barrio muy querido con dos ubicaciones en Newark y Wilmington.",
    en: "Mi Gente Bonita Market was founded with a simple mission: to bring authentic products to our community in Delaware. What started as a small family business has grown into a beloved neighborhood market with two locations in Newark and Wilmington."
  },
  "about.storyPart2": {
    es: "Nos enorgullecemos de ofrecer una amplia variedad de productos importados directamente de América Latina, junto con alimentos recién preparados que recuerdan a nuestros clientes su hogar. Nuestro mercado sirve tanto como tienda de comestibles como centro cultural donde nuestra comunidad puede conectarse.",
    en: "We take pride in offering a wide variety of products imported directly from Latin America, along with freshly prepared foods that remind our customers of home. Our market serves as both a grocery store and a cultural hub where our community can connect."
  },
  "about.visitUs": {
    es: "Visítanos",
    en: "Visit Us"
  },
  
  // Features
  "features.title": {
    es: "Lo Que Ofrecemos",
    en: "What We Offer"
  },
  "features.subtitle": {
    es: "Descubre nuestra selección de productos y servicios",
    en: "Discover our selection of products and services"
  },
  "features.freshProduce.title": {
    es: "Productos Frescos",
    en: "Fresh Produce"
  },
  "features.freshProduce.description": {
    es: "Frutas y verduras frescas importadas directamente de América Latina",
    en: "Fresh fruits and vegetables imported directly from Latin America"
  },
  "features.groceries.title": {
    es: "Abarrotes",
    en: "Groceries"
  },
  "features.groceries.description": {
    es: "Una amplia selección de productos alimenticios latinos auténticos",
    en: "A wide selection of authentic Latino food products"
  },
  "features.freshMeat.title": {
    es: "Carnicería",
    en: "Fresh Meat"
  },
  "features.freshMeat.description": {
    es: "Carnes frescas y cortes especiales para tus recetas favoritas",
    en: "Fresh meats and special cuts for your favorite recipes"
  },
  "features.preparedFood.title": {
    es: "Comida Preparada",
    en: "Prepared Food"
  },
  "features.preparedFood.description": {
    es: "Deliciosos platillos caseros preparados diariamente",
    en: "Delicious homemade dishes prepared daily"
  },
  
  // Gallery
  "gallery.title": {
    es: "Nuestros Productos",
    en: "Our Products"
  },
  "gallery.subtitle": {
    es: "",
    en: ""
  },
  "gallery.close": {
    es: "Cerrar",
    en: "Close"
  },
  
  // Testimonials
  "testimonials.title": {
    es: "Testimonios",
    en: "Testimonials"
  },
  "testimonials.subtitle": {
    es: "",
    en: ""
  },
  
  // Contact
  "contact.title": {
    es: "Encuéntranos",
    en: "Find Us"
  },
  "contact.subtitle": {
    es: "Visita nuestras tiendas en Delaware",
    en: "Visit our stores in Delaware"
  },
  "contact.location1.title": {
    es: "Ubicación de Wilmington",
    en: "Wilmington Location"
  },
  "contact.location2.title": {
    es: "Ubicación de Newark",
    en: "Newark Location"
  },
  "contact.location.wilmington": {
    es: "Wilmington",
    en: "Wilmington"
  },
  "contact.location.newark": {
    es: "Newark",
    en: "Newark"
  },
  "contact.hours.title": {
    es: "Horario de Atención",
    en: "Business Hours"
  },
  "contact.hours.everyday": {
    es: "Todos los días",
    en: "Everyday"
  },
  "contact.hours.weekdays": {
    es: "Lunes - Sábado",
    en: "Monday - Saturday"
  },
  "contact.hours.sunday": {
    es: "Domingo",
    en: "Sunday"
  },
  "contact.getDirections": {
    es: "Cómo Llegar",
    en: "Get Directions"
  },
  "contact.callUs": {
    es: "Llámanos",
    en: "Call Us"
  },
  "contact.followUs": {
    es: "Síguenos",
    en: "Follow Us"
  },
  
  // Footer
  "footer.rights": {
    es: "Todos los derechos reservados",
    en: "All Rights Reserved"
  },
  "footer.developed": {
    es: "Desarrollado con",
    en: "Developed with"
  },
  "footer.community": {
    es: "amor para nuestra comunidad",
    en: "love for our community"
  },
  "footer.serving": {
    es: "Sirviendo a Wilmington y Newark con orgullo desde 2023.",
    en: "Serving Wilmington and Newark with pride since 2023."
  },
  
  // Common UI elements
  "common.showContent": {
    es: "Mostrar Contenido",
    en: "Show Content"
  },
  "common.hideContent": {
    es: "Ocultar Contenido",
    en: "Hide Content"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with stored language or default to Spanish
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const storedLang = localStorage.getItem('language') as Language;
      return storedLang === 'en' ? 'en' : 'es'; // Default to Spanish if not found or invalid
    } catch (e) {
      // If localStorage is not available (e.g., SSR or permissions issue)
      return 'es';
    }
  });

  const toggleLanguage = () => {
    setLanguage(prev => {
      const newLang = prev === 'es' ? 'en' : 'es';
      // Store the language preference with error handling
      try {
        localStorage.setItem('language', newLang);
      } catch (e) {
        console.warn('Could not store language preference', e);
      }
      return newLang;
    });
  };

  const t = (key: string) => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};