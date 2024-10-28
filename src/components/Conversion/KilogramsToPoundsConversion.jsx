import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const KilogramsToPoundsConversion = () => {
  const [kilograms, setKilograms] = useState('');
  const [poundsResult, setPoundsResult] = useState('');
  const [pounds, setPounds] = useState('');
  const [kilogramsResult, setKilogramsResult] = useState('');

  const convertToPounds = () => {
    setPoundsResult((kilograms * 2.20462).toFixed(2));
  };

  const convertToKilograms = () => {
    setKilogramsResult((pounds / 2.20462).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Kilograms ↔️ Pounds Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Kilograms to Pounds</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={kilograms}
              onChange={(e) => setKilograms(e.target.value)}
              placeholder="Enter Kilograms"
            />
            <button className="btn btn-primary" onClick={convertToPounds}>
              Convert
            </button>
          </div>
          {poundsResult && (
            <p className="text-center mt-2">
              Result: <strong>{poundsResult} lb</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Pounds to Kilograms</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={pounds}
              onChange={(e) => setPounds(e.target.value)}
              placeholder="Enter Pounds"
            />
            <button className="btn btn-primary" onClick={convertToKilograms}>
              Convert
            </button>
          </div>
          {kilogramsResult && (
            <p className="text-center mt-2">
              Result: <strong>{kilogramsResult} kg</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default KilogramsToPoundsConversion;
