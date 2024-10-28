import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const CubicMetersToCubicFeetConversion = () => {
  const [cubicMeters, setCubicMeters] = useState('');
  const [cubicFeetResult, setCubicFeetResult] = useState('');
  const [cubicFeet, setCubicFeet] = useState('');
  const [cubicMetersResult, setCubicMetersResult] = useState('');

  const convertToCubicFeet = () => {
    setCubicFeetResult((cubicMeters * 35.3147).toFixed(2));
  };

  const convertToCubicMeters = () => {
    setCubicMetersResult((cubicFeet / 35.3147).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Cubic Meters ↔️ Cubic Feet Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Cubic Meters to Cubic Feet</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={cubicMeters}
              onChange={(e) => setCubicMeters(e.target.value)}
              placeholder="Enter Cubic Meters"
            />
            <button className="btn btn-primary" onClick={convertToCubicFeet}>
              Convert
            </button>
          </div>
          {cubicFeetResult && (
            <p className="text-center mt-2">
              Result: <strong>{cubicFeetResult} ft³</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Cubic Feet to Cubic Meters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={cubicFeet}
              onChange={(e) => setCubicFeet(e.target.value)}
              placeholder="Enter Cubic Feet"
            />
            <button className="btn btn-primary" onClick={convertToCubicMeters}>
              Convert
            </button>
          </div>
          {cubicMetersResult && (
            <p className="text-center mt-2">
              Result: <strong>{cubicMetersResult} m³</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default CubicMetersToCubicFeetConversion;
