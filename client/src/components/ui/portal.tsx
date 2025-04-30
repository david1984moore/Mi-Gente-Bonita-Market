import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  children: React.ReactNode;
};

// Portal component that renders children into a portal at the end of the document body
export const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};

export default Portal;