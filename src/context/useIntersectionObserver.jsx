import { useEffect } from 'react';

const useIntersectionObserver = (callback, options) => {
    useEffect(() => {
      const observer = new IntersectionObserver(callback, options);
      const targets = document.querySelectorAll('.anime-card');
  
      targets.forEach((target) => {
        observer.observe(target);
      });
  
      return () => {
        targets.forEach((target) => {
          observer.unobserve(target);
        });
      };
    });
  };

export default useIntersectionObserver;