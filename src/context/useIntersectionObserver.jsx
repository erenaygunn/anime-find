import { useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.anime-card'); // Use a class to select your target elements

    targets.forEach((target) => {
      observer.observe(target);

      return () => {
        observer.unobserve(target);
      };
    });
  }, []);
};

export default useIntersectionObserver;