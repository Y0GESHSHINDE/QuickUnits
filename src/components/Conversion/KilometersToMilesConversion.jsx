import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const KilometersToMilesConversion = () => {
  const [kilometers, setKilometers] = useState('');
  const [milesResult, setMilesResult] = useState('');
  const [miles, setMiles] = useState('');
  const [kilometersResult, setKilometersResult] = useState('');

  const convertToMiles = () => {
    const milesValue = parseFloat(kilometers) * 0.621371;
    setMilesResult(milesValue.toFixed(2));
  };

  const convertToKilometers = () => {
    const kilometersValue = parseFloat(miles) / 0.621371;
    setKilometersResult(kilometersValue.toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Kilometers ↔️ Miles Converter</h2>
        
        <div className="mb-4">
          <h5 className="text-center">Convert Kilometers to Miles</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
              placeholder="Enter Kilometers"
            />
            <button className="btn btn-primary" onClick={convertToMiles}>
              Convert
            </button>
          </div>
          {milesResult && (
            <p className="text-center mt-2">
              Result: <strong>{milesResult} mi</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Miles to Kilometers</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={miles}
              onChange={(e) => setMiles(e.target.value)}
              placeholder="Enter Miles"
            />
            <button className="btn btn-primary" onClick={convertToKilometers}>
              Convert
            </button>
          </div>
          {kilometersResult && (
            <p className="text-center mt-2">
              Result: <strong>{kilometersResult} km</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default KilometersToMilesConversion;
