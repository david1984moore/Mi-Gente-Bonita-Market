
import logoImage from './logo.png';

export const Logo = ({ className }: { className?: string }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <img 
      src={logoImage} 
      alt="Mi Gente Bonita Market"
      className={`cursor-pointer ${className || ''}`}
      onClick={scrollToTop}
    />
  );
};
