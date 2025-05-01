import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <LanguageProvider>
        <div className="font-['Inter'] bg-white text-[#1D1D1F]">
          <Navbar />
          <Hero />
          <About />
          <Gallery />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </LanguageProvider>
    </TooltipProvider>
  );
}

export default App;
