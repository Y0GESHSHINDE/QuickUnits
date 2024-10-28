import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const MetersToFeetConversion = () => {
  const [meters, setMeters] = useState('');
  const [feetResult, setFeetResult] = useState('');
  
  const [feet, setFeet] = useState('');
  const [metersResult, setMetersResult] = useState('');

  const convertToFeet = () => {
    const feetValue = parseFloat(meters) * 3.28084;
    setFeetResult(feetValue.toFixed(2));
  };

  const convertToMeters = () => {
    const metersValue = parseFloat(feet) / 3.28084;
    setMetersResult(metersValue.toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Meters ↔️ Feet Converter</h2>
        
        <div className="mb-4">
          <h5 className="text-center">Convert Meters to Feet</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={meters}
              onChange={(e) => setMeters(e.target.value)}
              placeholder="Enter Meters"
            />
            <button className="btn btn-primary" onClick={convertToFeet}>
              Convert
            </button>
          </div>
          {feetResult && (
            <p className="text-center mt-2">
              Result: <strong>{feetResult} ft</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Feet to Meters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={feet}
              onChange={(e) => setFeet(e.target.value)}
              placeholder="Enter Feet"
            />
            <button className="btn btn-primary" onClick={convertToMeters}>
              Convert
            </button>
          </div>
          {metersResult && (
            <p className="text-center mt-2">
              Result: <strong>{metersResult} m</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MetersToFeetConversion;
