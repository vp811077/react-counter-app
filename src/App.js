import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Load counter value from localStorage or default to 0
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? Number(saved) : 0;
  });

  const [step, setStep] = useState(1);
  const [allowNegative, setAllowNegative] = useState(true);

  const upperBound = 50;
  const lowerBound = allowNegative ? -50 : 0;

  // Save counter value to localStorage
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => {
    if (count + step <= upperBound) setCount(count + step);
  };

  const decrement = () => {
    if (count - step >= lowerBound) setCount(count - step);
  };

  const reset = () => setCount(0);

  return (
    <div className="app">
      <h1 className="title"> Counter App</h1>
      <p
        className="count-value"
        style={{
          color:
            count === upperBound
              ? "red"
              : count === lowerBound
              ? "orange"
              : "black",
        }}
      >
        {count}
      </p>

      <div className="buttons">
        <button onClick={increment} disabled={count + step > upperBound}>
          +
        </button>
        <button onClick={decrement} disabled={count - step < lowerBound}>
          -
        </button>
        <button onClick={reset}>Reset</button>
      </div>

      <div className="step-control">
        <label>Step Size:</label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          min="1"
          max="10"
        />
      </div>

      <div className="toggle-control">
        <label>
          <input
            type="checkbox"
            checked={allowNegative}
            onChange={() => setAllowNegative(!allowNegative)}
          />
          Allow Negative Values
        </label>
      </div>
    </div>
  );
}

export default App;