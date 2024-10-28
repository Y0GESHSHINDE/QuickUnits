import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';

const AcresToHectaresConversion = () => {
  const [acres, setAcres] = useState('');
  const [hectaresResult, setHectaresResult] = useState('');
  const [hectares, setHectares] = useState('');
  const [acresResult, setAcresResult] = useState('');

  const convertToHectares = () => {
    setHectaresResult((acres * 0.404686).toFixed(2));
  };

  const convertToAcres = () => {
    setAcresResult((hectares / 0.404686).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Acres ↔️ Hectares Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Acres to Hectares</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={acres}
              onChange={(e) => setAcres(e.target.value)}
              placeholder="Enter Acres"
            />
            <button className="btn btn-primary" onClick={convertToHectares}>
              Convert
            </button>
          </div>
          {hectaresResult && (
            <p className="text-center mt-2">
              Result: <strong>{hectaresResult} ha</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Hectares to Acres</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={hectares}
              onChange={(e) => setHectares(e.target.value)}
              placeholder="Enter Hectares"
            />
            <button className="btn btn-primary" onClick={convertToAcres}>
              Convert
            </button>
          </div>
          {acresResult && (
            <p className="text-center mt-2">
              Result: <strong>{acresResult} ac</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default AcresToHectaresConversion;
