import React, { useState, useEffect } from 'react';
import TimerDisplay from '../components/TimerDisplay';
import TimerControls from '../components/TimerControls';
import WaterWaveBack from '../components/WaterWaveBack';
import '../Styles/TimerPage.css';

const TimerPage = () => {
  const [secondsLeft, setSecondsLeft] = useState(1500); // 25 minutos
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(1500);
  };

  return (
    <div className="timer-container">
      <WaterWaveBack />
      <TimerDisplay secondsLeft={secondsLeft} />
      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
};

export default TimerPage;