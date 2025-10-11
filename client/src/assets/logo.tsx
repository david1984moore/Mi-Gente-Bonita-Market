
import logoImage from './logo.png';

export const Logo = ({ className }: { className?: string }) => {
  return (
    <img 
      src={logoImage} 
      alt="Mi Gente Bonita Market"
      className={className || ''}
    />
  );
};
