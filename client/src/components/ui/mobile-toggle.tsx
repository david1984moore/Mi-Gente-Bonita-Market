import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface MobileToggleProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function MobileToggle({ title, children, defaultOpen = false }: MobileToggleProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 flex items-center justify-center gap-1 text-base font-semibold bg-[#F8F8F8] hover:bg-[#F0F0F0] rounded-md text-[#1D1D1F]"
      >
        <span>{title}</span>
        {isOpen ? 
          <ChevronUp className="h-4 w-4 transition-transform" /> : 
          <ChevronDown className="h-4 w-4 transition-transform" />
        }
      </button>
      
      {isOpen && (
        <div className="pt-6 w-full">
          {children}
        </div>
      )}
    </div>
  );
}