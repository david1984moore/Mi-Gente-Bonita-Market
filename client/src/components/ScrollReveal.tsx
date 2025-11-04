import { useRef, useEffect, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 0.4,
  className = ""
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      console.log('[ScrollReveal] No element ref');
      return;
    }

    console.log('[ScrollReveal] Setting up observer for', direction, 'direction');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('[ScrollReveal] Element intersecting, adding visible class');
            element.classList.add('scroll-reveal-visible');
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "-50px"
      }
    );

    observer.observe(element);
    console.log('[ScrollReveal] Observer set up, current classes:', element.className);

    return () => observer.disconnect();
  }, [direction]);

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal-${direction} ${className}`}
      style={{
        transitionDelay: `${delay}s`,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
