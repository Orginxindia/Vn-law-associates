import { useEffect, useState } from 'react';

export const useCounter = (targetValue, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (duration === 0) {
      setCount(targetValue);
      return;
    }

    let startTime = null;
    const startValue = 0;
    let frameId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function: ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (targetValue - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [targetValue, duration]);

  return count;
};
