const TimerControls = ({ isRunning, onStart, onPause, onReset }) => {
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {isRunning ? (
        <button onClick={onPause}>Pausar</button>
      ) : (
        <button onClick={onStart}>Iniciar</button>
      )}
      <button onClick={onReset}>Resetar</button>
    </div>
  );
};

export default TimerControls;
