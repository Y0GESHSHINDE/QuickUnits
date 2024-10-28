import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const MetersPerSecondToFeetPerSecondConversion = () => {
  const [metersPerSecond, setMetersPerSecond] = useState('');
  const [feetPerSecondResult, setFeetPerSecondResult] = useState('');
  const [feetPerSecond, setFeetPerSecond] = useState('');
  const [metersPerSecondResult, setMetersPerSecondResult] = useState('');

  const convertToFeetPerSecond = () => {
    setFeetPerSecondResult((metersPerSecond * 3.28084).toFixed(2));
  };

  const convertToMetersPerSecond = () => {
    setMetersPerSecondResult((feetPerSecond / 3.28084).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Meters per Second ↔️ Feet per Second Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Meters per Second to Feet per Second</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={metersPerSecond}
              onChange={(e) => setMetersPerSecond(e.target.value)}
              placeholder="Enter m/s"
            />
            <button className="btn btn-primary" onClick={convertToFeetPerSecond}>
              Convert
            </button>
          </div>
          {feetPerSecondResult && (
            <p className="text-center mt-2">
              Result: <strong>{feetPerSecondResult} ft/s</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Feet per Second to Meters per Second</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={feetPerSecond}
              onChange={(e) => setFeetPerSecond(e.target.value)}
              placeholder="Enter ft/s"
            />
            <button className="btn btn-primary" onClick={convertToMetersPerSecond}>
              Convert
            </button>
          </div>
          {metersPerSecondResult && (
            <p className="text-center mt-2">
              Result: <strong>{metersPerSecondResult} m/s</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MetersPerSecondToFeetPerSecondConversion;
