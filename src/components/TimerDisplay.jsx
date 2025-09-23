const TimerDisplay = ({ secondsLeft }) => {
  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <h1 style={{ fontSize: '4rem' }}>
      {minutes}:{seconds}
    </h1>
  );
};

export default TimerDisplay;

