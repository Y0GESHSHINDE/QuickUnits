import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const KelvinToCelsiusConversion = () => {
  const [kelvin, setKelvin] = useState('');
  const [celsiusResult, setCelsiusResult] = useState('');
  const [celsius, setCelsius] = useState('');
  const [kelvinResult, setKelvinResult] = useState('');

  const convertToCelsius = () => {
    setCelsiusResult((kelvin - 273.15).toFixed(2));
  };

  const convertToKelvin = () => {
    setKelvinResult((parseFloat(celsius) + 273.15).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Kelvin ↔️ Celsius Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Kelvin to Celsius</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={kelvin}
              onChange={(e) => setKelvin(e.target.value)}
              placeholder="Enter Kelvin"
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

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Celsius to Kelvin</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={celsius}
              onChange={(e) => setCelsius(e.target.value)}
              placeholder="Enter Celsius"
            />
            <button className="btn btn-primary" onClick={convertToKelvin}>
              Convert
            </button>
          </div>
          {kelvinResult && (
            <p className="text-center mt-2">
              Result: <strong>{kelvinResult} K</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default KelvinToCelsiusConversion;
