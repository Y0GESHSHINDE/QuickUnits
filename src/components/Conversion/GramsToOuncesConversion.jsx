import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const GramsToOuncesConversion = () => {
  const [grams, setGrams] = useState('');
  const [ouncesResult, setOuncesResult] = useState('');
  const [ounces, setOunces] = useState('');
  const [gramsResult, setGramsResult] = useState('');

  const convertToOunces = () => {
    setOuncesResult((grams * 0.035274).toFixed(2));
  };

  const convertToGrams = () => {
    setGramsResult((ounces / 0.035274).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Grams ↔️ Ounces Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Grams to Ounces</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={grams}
              onChange={(e) => setGrams(e.target.value)}
              placeholder="Enter Grams"
            />
            <button className="btn btn-primary" onClick={convertToOunces}>
              Convert
            </button>
          </div>
          {ouncesResult && (
            <p className="text-center mt-2">
              Result: <strong>{ouncesResult} oz</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Ounces to Grams</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={ounces}
              onChange={(e) => setOunces(e.target.value)}
              placeholder="Enter Ounces"
            />
            <button className="btn btn-primary" onClick={convertToGrams}>
              Convert
            </button>
          </div>
          {gramsResult && (
            <p className="text-center mt-2">
              Result: <strong>{gramsResult} g</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default GramsToOuncesConversion;
