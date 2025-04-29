export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="font-['Poppins'] font-bold text-2xl">
        Mi Gente <span className="text-[#E63946]">Bonita</span>
      </div>
    </div>
  );
};
