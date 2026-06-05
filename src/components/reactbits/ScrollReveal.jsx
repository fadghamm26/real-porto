import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 60,
  duration = 800,
  once = false,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!once || !hasTriggered.current) {
            setTimeout(() => setVisible(true), delay);
            if (once) hasTriggered.current = true;
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, once]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all ease-out`}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : `translateY(${direction === 'up' ? distance : direction === 'down' ? -distance : 0}px) scale(0.95)`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
