import React, { useState } from 'react';
import Navbar from './../Navbar/Navbar';
const JoulesToCaloriesConversion = () => {
  const [joules, setJoules] = useState('');
  const [caloriesResult, setCaloriesResult] = useState('');
  const [calories, setCalories] = useState('');
  const [joulesResult, setJoulesResult] = useState('');

  const convertToCalories = () => {
    setCaloriesResult((joules / 4.184).toFixed(2));
  };

  const convertToJoules = () => {
    setJoulesResult((calories * 4.184).toFixed(2));
  };

  return (
    <>
    <Navbar/>
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Joules ↔️ Calories Converter</h2>

        <div className="mb-4">
          <h5 className="text-center">Convert Joules to Calories</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={joules}
              onChange={(e) => setJoules(e.target.value)}
              placeholder="Enter Joules"
            />
            <button className="btn btn-primary" onClick={convertToCalories}>
              Convert
            </button>
          </div>
          {caloriesResult && (
            <p className="text-center mt-2">
              Result: <strong>{caloriesResult} cal</strong>
            </p>
          )}
        </div>

        <hr />

        <div className="mb-4">
          <h5 className="text-center">Convert Calories to Joules</h5>
          <div className="input-group mb-2">
            <input
              type="number"
              className="form-control"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="Enter Calories"
            />
            <button className="btn btn-primary" onClick={convertToJoules}>
              Convert
            </button>
          </div>
          {joulesResult && (
            <p className="text-center mt-2">
              Result: <strong>{joulesResult} J</strong>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default JoulesToCaloriesConversion;
