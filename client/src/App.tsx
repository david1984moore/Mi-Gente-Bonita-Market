import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <div className="font-['Open_Sans'] bg-[#F8FDF9] text-[#1D3557]">
        <Navbar />
        <Hero />
        <Features />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
}

export default App;
