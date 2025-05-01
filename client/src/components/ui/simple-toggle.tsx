import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SimpleToggleProps {
  title: string;
  children: React.ReactNode;
}

export default function SimpleToggle({ title, children }: SimpleToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full mb-4">
      <Button 
        onClick={toggleContent}
        variant="outline"
        className="w-full py-3 flex justify-center items-center bg-gray-100"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
      </Button>
      
      {isOpen && (
        <div className="mt-4 w-full border-t border-gray-200 pt-4">
          {children}
        </div>
      )}
    </div>
  );
}