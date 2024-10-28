import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const SquareMetersToSquareFeetConversion = () => {
  const [squareMeters, setSquareMeters] = useState('');
  const [squareFeetResult, setSquareFeetResult] = useState('');
  const [squareFeet, setSquareFeet] = useState('');
  const [squareMetersResult, setSquareMetersResult] = useState('');

  const convertToSquareFeet = () => {
    setSquareFeetResult((squareMeters * 10.7639).toFixed(2));
  };

  const convertToSquareMeters = () => {
    setSquareMetersResult((squareFeet / 10.7639).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Square Meters ↔️ Square Feet Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Square Meters to Square Feet</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={squareMeters}
              onChange={(e) => setSquareMeters(e.target.value)}
              placeholder="Enter Square Meters"
            />
            <button className="btn btn-primary" onClick={convertToSquareFeet}>
              Convert
            </button>
          </div>
          {squareFeetResult && (
            <p className="text-center mt-2">
              Result: <strong>{squareFeetResult} ft²</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Square Feet to Square Meters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={squareFeet}
              onChange={(e) => setSquareFeet(e.target.value)}
              placeholder="Enter Square Feet"
            />
            <button className="btn btn-primary" onClick={convertToSquareMeters}>
              Convert
            </button>
          </div>
          {squareMetersResult && (
            <p className="text-center mt-2">
              Result: <strong>{squareMetersResult} m²</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default SquareMetersToSquareFeetConversion;
