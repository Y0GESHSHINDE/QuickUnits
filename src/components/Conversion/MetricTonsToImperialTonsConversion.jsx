import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const MetricTonsToImperialTonsConversion = () => {
  const [metricTons, setMetricTons] = useState('');
  const [imperialTonsResult, setImperialTonsResult] = useState('');
  const [imperialTons, setImperialTons] = useState('');
  const [metricTonsResult, setMetricTonsResult] = useState('');

  const convertToImperialTons = () => {
    setImperialTonsResult((metricTons * 0.984207).toFixed(2));
  };

  const convertToMetricTons = () => {
    setMetricTonsResult((imperialTons / 0.984207).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Metric Tons ↔️ Imperial Tons Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Metric Tons to Imperial Tons</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={metricTons}
              onChange={(e) => setMetricTons(e.target.value)}
              placeholder="Enter Metric Tons"
            />
            <button className="btn btn-primary" onClick={convertToImperialTons}>
              Convert
            </button>
          </div>
          {imperialTonsResult && (
            <p className="text-center mt-2">
              Result: <strong>{imperialTonsResult} imperial tons</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Imperial Tons to Metric Tons</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={imperialTons}
              onChange={(e) => setImperialTons(e.target.value)}
              placeholder="Enter Imperial Tons"
            />
            <button className="btn btn-primary" onClick={convertToMetricTons}>
              Convert
            </button>
          </div>
          {metricTonsResult && (
            <p className="text-center mt-2">
              Result: <strong>{metricTonsResult} metric tons</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default MetricTonsToImperialTonsConversion;
