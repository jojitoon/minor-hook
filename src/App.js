import logo from './logo.svg';
import './App.css';
import {
  useClipboard,
  useCounter,
  useIntervalCounter,
  useTimeValue,
  useWeather,
} from './hooks';
import { useEffect, useState } from 'react';

function App() {
  const counter = useIntervalCounter({
    step: 2,
  });

  // const { count, increment, decrement } = useCounter(1000, 100, 1000);
  // const [step, setStep] = useState(1);
  // const { copied, copyToClipboard } = useClipboard('Hello World');
  const { weather } = useWeather('Lagos');
  const time = useTimeValue('2021-12-04T12:50:21.580Z');
  return (
    <div className='App'>
      <header className='App-header'>
        {weather.temp_c && (
          <h2>
            {weather.location}, {weather.feels_like_c}&deg;
          </h2>
        )}
        <img src={logo} className='App-logo' alt='logo' />
        <p>time: {time} </p>
        {/* <p>counter: {counter} </p> */}
        {/* <input
          type='text'
          value={step}
          onChange={(e) => setStep(e.target.value)}
        />
        <div>
          <button onClick={() => decrement(step)}>-</button>
          <span>{count}</span>
          <button onClick={() => increment(step)}>+</button>
        </div> */}

        {/* <button onClick={() => copyToClipboard('Hellow word')}>
          copy Hellow word{' '}
          {copied['Hellow word'] && (
            <span style={{ color: 'green' }}>copied</span>
          )}
        </button>
        <button onClick={() => copyToClipboard('anything else')}>
          copy anything else{' '}
          {copied['anything else'] && (
            <span style={{ color: 'green' }}>copied</span>
          )}
        </button> */}
      </header>
    </div>
  );
}

export default App;
