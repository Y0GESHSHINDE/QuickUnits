import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const LitersToGallonsConversion = () => {
  const [liters, setLiters] = useState('');
  const [gallonsResult, setGallonsResult] = useState('');
  const [gallons, setGallons] = useState('');
  const [litersResult, setLitersResult] = useState('');

  const convertToGallons = () => {
    setGallonsResult((liters * 0.264172).toFixed(2));
  };

  const convertToLiters = () => {
    setLitersResult((gallons / 0.264172).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Liters ↔️ Gallons Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Liters to Gallons</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={liters}
              onChange={(e) => setLiters(e.target.value)}
              placeholder="Enter Liters"
            />
            <button className="btn btn-primary" onClick={convertToGallons}>
              Convert
            </button>
          </div>
          {gallonsResult && (
            <p className="text-center mt-2">
              Result: <strong>{gallonsResult} gal</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Gallons to Liters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={gallons}
              onChange={(e) => setGallons(e.target.value)}
              placeholder="Enter Gallons"
            />
            <button className="btn btn-primary" onClick={convertToLiters}>
              Convert
            </button>
          </div>
          {litersResult && (
            <p className="text-center mt-2">
              Result: <strong>{litersResult} L</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default LitersToGallonsConversion;
