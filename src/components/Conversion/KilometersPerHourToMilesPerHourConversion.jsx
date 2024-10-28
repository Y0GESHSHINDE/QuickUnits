import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const KilometersPerHourToMilesPerHourConversion = () => {
  const [kmh, setKmh] = useState('');
  const [mphResult, setMphResult] = useState('');
  const [mph, setMph] = useState('');
  const [kmhResult, setKmhResult] = useState('');

  const convertToMph = () => {
    setMphResult((kmh * 0.621371).toFixed(2));
  };

  const convertToKmh = () => {
    setKmhResult((mph / 0.621371).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Kilometers per Hour ↔️ Miles per Hour Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Kilometers per Hour to Miles per Hour</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={kmh}
              onChange={(e) => setKmh(e.target.value)}
              placeholder="Enter km/h"
            />
            <button className="btn btn-primary" onClick={convertToMph}>
              Convert
            </button>
          </div>
          {mphResult && (
            <p className="text-center mt-2">
              Result: <strong>{mphResult} mph</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Miles per Hour to Kilometers per Hour</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={mph}
              onChange={(e) => setMph(e.target.value)}
              placeholder="Enter mph"
            />
            <button className="btn btn-primary" onClick={convertToKmh}>
              Convert
            </button>
          </div>
          {kmhResult && (
            <p className="text-center mt-2">
              Result: <strong>{kmhResult} km/h</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default KilometersPerHourToMilesPerHourConversion;
