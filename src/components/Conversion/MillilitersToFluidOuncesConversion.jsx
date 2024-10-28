import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const MillilitersToFluidOuncesConversion = () => {
  const [milliliters, setMilliliters] = useState('');
  const [fluidOuncesResult, setFluidOuncesResult] = useState('');
  const [fluidOunces, setFluidOunces] = useState('');
  const [millilitersResult, setMillilitersResult] = useState('');

  const convertToFluidOunces = () => {
    setFluidOuncesResult((milliliters * 0.033814).toFixed(2));
  };

  const convertToMilliliters = () => {
    setMillilitersResult((fluidOunces / 0.033814).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Milliliters ↔️ Fluid Ounces Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Milliliters to Fluid Ounces</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={milliliters}
              onChange={(e) => setMilliliters(e.target.value)}
              placeholder="Enter Milliliters"
            />
            <button className="btn btn-primary" onClick={convertToFluidOunces}>
              Convert
            </button>
          </div>
          {fluidOuncesResult && (
            <p className="text-center mt-2">
              Result: <strong>{fluidOuncesResult} fl oz</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Fluid Ounces to Milliliters</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={fluidOunces}
              onChange={(e) => setFluidOunces(e.target.value)}
              placeholder="Enter Fluid Ounces"
            />
            <button className="btn btn-primary" onClick={convertToMilliliters}>
              Convert
            </button>
          </div>
          {millilitersResult && (
            <p className="text-center mt-2">
              Result: <strong>{millilitersResult} mL</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MillilitersToFluidOuncesConversion;
