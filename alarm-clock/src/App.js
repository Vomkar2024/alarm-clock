import React, { useState, useEffect } from 'react';
import './styles.css';

function AlarmClock() {
  const [alarmTime, setAlarmTime] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }));
  const [message, setMessage] = useState('');

  const alarmAudio = new Audio('custom-audio.mp3');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().toLocaleTimeString('en-US', { hour12: false });
      setCurrentTime(now);

      if (alarmTime && now === alarmTime) {
        setMessage('Alarm ringing!');
        alarmAudio.play('./NachungaAise.mp3');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [alarmTime, alarmAudio]);

  return (
    <div className="container">
      <h1>Alarm Clock</h1>
      <p>Current Time: {currentTime}</p>
      <input
        type="time"
        onChange={(e) => setAlarmTime(e.target.value + ":00")}
      />
      <button onClick={() => setMessage('Alarm set for ' + alarmTime)}>Set Alarm</button>
      <div className="message">{message}</div>
    </div>
  );
}

export default AlarmClock;