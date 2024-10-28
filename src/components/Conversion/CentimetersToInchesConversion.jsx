import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const CentimetersToInchesConversion = () => {
  const [centimeters, setCentimeters] = useState('');
  const [inchesResult, setInchesResult] = useState('');
  const [inches, setInches] = useState('');
  const [centimetersResult, setCentimetersResult] = useState('');

  const convertToInches = () => {
    setInchesResult((centimeters * 0.393701).toFixed(2));
  };

  const convertToCentimeters = () => {
    setCentimetersResult((inches / 0.393701).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Centimeters ↔️ Inches Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Centimeters to Inches</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={centimeters}
              onChange={(e) => setCentimeters(e.target.value)}
              placeholder="Enter Centimeters"
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
          <h5 className="text-center">Convert Inches to Centimeters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={inches}
              onChange={(e) => setInches(e.target.value)}
              placeholder="Enter Inches"
            />
            <button className="btn btn-primary" onClick={convertToCentimeters}>
              Convert
            </button>
          </div>
          {centimetersResult && (
            <p className="text-center mt-2">
              Result: <strong>{centimetersResult} cm</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default CentimetersToInchesConversion;
