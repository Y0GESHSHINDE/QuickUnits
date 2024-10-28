import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const MillimetersToInchesConversion = () => {
  const [millimeters, setMillimeters] = useState('');
  const [inchesResult, setInchesResult] = useState('');
  const [inches, setInches] = useState('');
  const [millimetersResult, setMillimetersResult] = useState('');

  const convertToInches = () => {
    setInchesResult((millimeters * 0.0393701).toFixed(2));
  };

  const convertToMillimeters = () => {
    setMillimetersResult((inches / 0.0393701).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Millimeters ↔️ Inches Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Millimeters to Inches</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={millimeters}
              onChange={(e) => setMillimeters(e.target.value)}
              placeholder="Enter Millimeters"
            />
            <button className="btn btn-primary" onClick={convertToInches}>
              Convert
            </button>
          </div>
          {inchesResult && (
            <p className="text-center mt-2">
              Result: <strong>{inchesResult} in</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Inches to Millimeters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Enter Inches"
            />
            <button className="btn btn-primary" onClick={convertToMillimeters}>
              Convert
            </button>
          </div>
          {millimetersResult && (
            <p className="text-center mt-2">
              Result: <strong>{millimetersResult} mm</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MillimetersToInchesConversion;
