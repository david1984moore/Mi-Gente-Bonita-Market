
import logoImage from './logo.png';
import logoWebP from './logo.png.webp';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <picture>
      <source srcSet={logoWebP} type="image/webp" />
      <img 
        src={logoImage} 
        alt="Mi Gente Bonita Market"
        className={className || ''}
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
};
