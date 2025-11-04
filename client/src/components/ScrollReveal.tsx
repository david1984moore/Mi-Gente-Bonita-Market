import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Simplified variants with ONLY transform, no opacity
  // This dramatically reduces animation complexity on mobile
  const variants = {
    up: {
      hidden: { y: 20, z: 0 },
      visible: { y: 0, z: 0 }
    },
    down: {
      hidden: { y: -20, z: 0 },
      visible: { y: 0, z: 0 }
    },
    left: {
      hidden: { x: -20, z: 0 },
      visible: { x: 0, z: 0 }
    },
    right: {
      hidden: { x: 20, z: 0 },
      visible: { x: 0, z: 0 }
    },
    scale: {
      hidden: { scale: 0.95, z: 0 },
      visible: { scale: 1, z: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1], // Simplified cubic-bezier easing
        type: "tween" // Force tween instead of spring
      }}
      style={{ 
        willChange: isInView ? 'transform' : 'auto',
        transform: 'translateZ(0)', // Force GPU layer
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
