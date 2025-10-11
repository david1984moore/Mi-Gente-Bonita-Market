
import logoWebP from './logo.png.webp';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <img 
      src={logoWebP}
      alt="Mi Gente Bonita Market"
      className={className || ''}
      fetchpriority="high"
      decoding="async"
    />
  );
};
