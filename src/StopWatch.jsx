import React , { useState,useEffect, useRef, use  } from 'react';   

function StopWatch() {
    const [isRunning, setIsRunning] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => {

        if (isRunning) {
           intervalRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
           }, 10);
           return () => clearInterval(intervalRef.current);
        }
        
    }, [isRunning]);
    
    function start () {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }
    function stop () {
        setIsRunning(false);

    }
    function reset () {
        setElapsedTime(0);
        setIsRunning(false);

    }
    function formatTime (time) {
        let minutes = Math.floor(time / 60000);
        let seconds = Math.floor((time % 60000) / 1000);
        let milliseconds = Math.floor((time % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
    }


  return (
    <div className="stopwatch">
        <div className="display">
            {formatTime(elapsedTime)}
        </div>
        <div className='controls'>
            <button onClick={start} className='start-button'>Start</button>
            <button onClick={stop} className='stop-button'>Stop</button>
            <button onClick={reset} className='reset-button'>Reset</button>
        </div>
      
    </div>
  );
}
export default StopWatch;