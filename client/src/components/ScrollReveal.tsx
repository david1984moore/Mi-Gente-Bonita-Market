import { motion, useInView } from "framer-motion";
import { useRef, ReactNode, useState, useEffect } from "react";

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
  duration = 0.6,
  className = ""
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, (duration + delay) * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, duration, delay]);

  const variants = {
    up: {
      hidden: { opacity: 0, y: 50, z: 0 },
      visible: { opacity: 1, y: 0, z: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -50, z: 0 },
      visible: { opacity: 1, y: 0, z: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -50, z: 0 },
      visible: { opacity: 1, x: 0, z: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 50, z: 0 },
      visible: { opacity: 1, x: 0, z: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8, z: 0 },
      visible: { opacity: 1, scale: 1, z: 0 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ 
        willChange: !animationComplete && isInView ? 'opacity, transform' : 'auto',
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
