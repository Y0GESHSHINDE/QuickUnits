import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const CelsiusToFahrenheitConversion = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheitResult, setFahrenheitResult] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsiusResult, setCelsiusResult] = useState('');

  const convertToFahrenheit = () => {
    setFahrenheitResult(((celsius * 9) / 5 + 32).toFixed(2));
  };

  const convertToCelsius = () => {
    setCelsiusResult(((fahrenheit - 32) * 5) / 9).toFixed(2);
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Celsius ↔️ Fahrenheit Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Celsius to Fahrenheit</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              placeholder="Enter Celsius"
            />
            <button className="btn btn-primary" onClick={convertToFahrenheit}>
              Convert
            </button>
          </div>
          {fahrenheitResult && (
            <p className="text-center mt-2">
              Result: <strong>{fahrenheitResult} °F</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Fahrenheit to Celsius</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={fahrenheit}
              onChange={(e) => setFahrenheit(e.target.value)}
              placeholder="Enter Fahrenheit"
            />
            <button className="btn btn-primary" onClick={convertToCelsius}>
              Convert
            </button>
          </div>
          {celsiusResult && (
            <p className="text-center mt-2">
              Result: <strong>{celsiusResult} °C</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default CelsiusToFahrenheitConversion;
