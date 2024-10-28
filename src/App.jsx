import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import SignUp from './components/SignUpPage/SignUp';
import Login from './components/LoginPage/Login';
import Home from './components/Home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar/Navbar';
import MetersToFeetConversion from './components/Conversion/MetersToFeetConversion';
import KilometersToMilesConversion from './components/Conversion/KilometersToMilesConversion';
import CentimetersToInchesConversion from './components/Conversion/CentimetersToInchesConversion';
import MillimetersToInchesConversion from './components/Conversion/MillimetersToInchesConversion';
import KilogramsToPoundsConversion from './components/Conversion/KilogramsToPoundsConversion';
import GramsToOuncesConversion from './components/Conversion/GramsToOuncesConversion';
import MetricTonsToImperialTonsConversion from './components/Conversion/MetricTonsToImperialTonsConversion';
import CelsiusToFahrenheitConversion from './components/Conversion/CelsiusToFahrenheitConversion';
import KelvinToCelsiusConversion from './components/Conversion/KelvinToCelsiusConversion';
import LitersToGallonsConversion from './components/Conversion/LitersToGallonsConversion';
import MillilitersToFluidOuncesConversion from './components/Conversion/MillilitersToFluidOuncesConversion';
import CubicMetersToCubicFeetConversion from './components/Conversion/CubicMetersToCubicFeetConversion';
import KilometersPerHourToMilesPerHourConversion from './components/Conversion/KilometersPerHourToMilesPerHourConversion';
import MetersPerSecondToFeetPerSecondConversion from './components/Conversion/MetersPerSecondToFeetPerSecondConversion';
import SquareMetersToSquareFeetConversion from './components/Conversion/SquareMetersToSquareFeetConversion';
import AcresToHectaresConversion from './components/Conversion/AcresToHectaresConversion';
import JoulesToCaloriesConversion from './components/Conversion/JoulesToCaloriesConversion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/MetersToFeetConversion' element={<MetersToFeetConversion />} />
        <Route path='/KilometersToMilesConversion' element={<KilometersToMilesConversion />} />
        <Route path='/CentimetersToInchesConversion' element={<CentimetersToInchesConversion />} />
        <Route path='/MillimetersToInchesConversion' element={<MillimetersToInchesConversion />} />
        <Route path='/KilogramsToPoundsConversion' element={<KilogramsToPoundsConversion />} />
        <Route path='/GramsToOuncesConversion' element={<GramsToOuncesConversion />} />
        <Route path='/MetricTonsToImperialTonsConversion' element={<MetricTonsToImperialTonsConversion />} />
        <Route path='/CelsiusToFahrenheitConversion' element={<CelsiusToFahrenheitConversion />} />
        <Route path='/KelvinToCelsiusConversion' element={<KelvinToCelsiusConversion />} />
        <Route path='/LitersToGallonsConversion' element={<LitersToGallonsConversion />} />
        <Route path='/MillilitersToFluidOuncesConversion' element={<MillilitersToFluidOuncesConversion />} />
        <Route path='/CubicMetersToCubicFeetConversion' element={<CubicMetersToCubicFeetConversion />} />
        <Route path='/KilometersPerHourToMilesPerHourConversion' element={<KilometersPerHourToMilesPerHourConversion />} />
        <Route path='/MetersPerSecondToFeetPerSecondConversion' element={<MetersPerSecondToFeetPerSecondConversion />} />
        <Route path='/SquareMetersToSquareFeetConversion' element={<SquareMetersToSquareFeetConversion />} />
        <Route path='/AcresToHectaresConversion' element={<AcresToHectaresConversion />} />
        <Route path='/JoulesToCaloriesConversion' element={<JoulesToCaloriesConversion />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
