import React, { useState } from 'react';
import './Counter.css'; // Custom styles (see below)

export default function Counter() {
  const [updateValue, setUpdateValue] = useState(0);

  const increment = () => setUpdateValue(updateValue + 1);
  const decrement = () => setUpdateValue(updateValue - 1);
  const reset = () => setUpdateValue(0);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card counter-card shadow-lg p-4">
        <h2 className="text-center mb-4 text-primary">React Counter</h2>
        <p className="text-center fs-4">
          You clicked <span className="fw-bold text-success">{updateValue}</span> times
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-3">
          <button className="btn btn-success" onClick={increment}>
            Increment
          </button>
          <button
            className="btn btn-danger"
            onClick={decrement}
            disabled={updateValue === 0}
          >
            Decrement
          </button>
          <button
            className="btn btn-secondary"
            onClick={reset}
            disabled={updateValue === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
