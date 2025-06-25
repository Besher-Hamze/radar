
import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    elementsRef.current = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => elementsRef.current?.observe(el));

    return () => {
      if (elementsRef.current) {
        elements.forEach((el) => elementsRef.current?.unobserve(el));
        elementsRef.current.disconnect();
      }
    };
  }, []);

  return elementsRef;
};
