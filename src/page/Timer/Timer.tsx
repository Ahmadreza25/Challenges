import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(100);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <div>
      <h1>Timer: {seconds} seconds</h1>
    </div>
  );
};

export default Timer;
