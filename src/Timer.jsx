import { useState, useEffect } from 'react';

function Timer() {
  const [seconde, setSeconde] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconde(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Temps écoulé : {seconde}s</p>;
}

export default Timer;