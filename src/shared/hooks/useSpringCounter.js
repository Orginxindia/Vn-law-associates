import { useState, useEffect } from 'react';
import { useSpring } from '@react-spring/web';

export const useSpringCounter = (targetValue, isVisible) => {
  const [value, setValue] = useState(0);

  const { number } = useSpring({
    from: { number: 0 },
    number: isVisible ? targetValue : 0,
    delay: 300,
    config: { mass: 1, tension: 20, friction: 10 },
    onChange: (result) => {
      setValue(Math.floor(result.value.number));
    },
  });

  return value;
};
