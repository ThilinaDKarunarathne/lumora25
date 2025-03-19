import React, { useState, useEffect } from 'react';
import './countdown.css';
import ParticleEffect from '../ParticlesEffect/ParticleEffect';
import App1 from '../../App1';
import lumoraLogo from '../../assets/logo.png'; // Import the image

const Counter = ({ displayValue, label }) => (
  <div className="counter">
    <h2 className="counterLabel">{label}</h2>
    <div className="displayValue">{displayValue}</div>
  </div>
);

const Countdown = () => {
  const [timeDisplay, setTimeDisplay] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [showApp1, setShowApp1] = useState(false);

  useEffect(() => {
    const targetDate = new Date('March 29, ' + new Date().getFullYear() + ' 00:00:00').getTime();

    const generateTimeDisplay = () => {
      const rightJustNow = new Date().getTime();
      const runway = targetDate - rightJustNow;

      if (runway <= 0) {
        setShowApp1(true); // Switch to App1 when countdown finishes
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(runway / (1000 * 60 * 60 * 24)),
        hours: Math.floor((runway % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((runway % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((runway % (1000 * 60)) / 1000),
      };
    };

    const intervalId = setInterval(() => {
      setTimeDisplay(generateTimeDisplay());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (showApp1) {
    return <App1 />; // Render App1 when countdown is complete
  }
  return (
    <div className="app">
      <ParticleEffect />
      <section>
        <table>
          <tr><td>
          <header>
            <img src={lumoraLogo} alt="Lumora '25" className="logoImage" /> {/* Replace text with image */}
          </header>
          </td></tr>
          <tr><td align='center'>
          <div className="timer">
            <Counter displayValue={timeDisplay.days} label={'Days'} />
            <br />
            <Counter displayValue={timeDisplay.hours} label={'Hours'} />
            <br />
            <Counter displayValue={timeDisplay.minutes} label={'Minutes'} />
            <br />
            <Counter displayValue={timeDisplay.seconds} label={'Seconds'} />
          </div>
          </td></tr>
      </table>
      </section>
    </div>
  );
};

export default Countdown;
