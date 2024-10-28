import React, { useState } from 'react';
import { app } from '../../Firebase/firebase';
import { getAuth } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const auth = getAuth(app);

function Navbar() {
   const [isLoggedOut, setIsLoggedOut] = useState(false);

   const handleLogout = async () => {
      try {
         await signOut(auth);
         localStorage.removeItem('isAuthenticated');
         setIsLoggedOut(true);
      } catch (error) {
         console.error("Logout failed:", error);
      }
   };

   if (isLoggedOut) {
      return <Navigate to="/login" />;
   }

   return (
      <div>
         <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="#">Quickunits</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Length/Distance
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/MetersToFeetConversion">Meters (m) ↔️ Feet (ft)</Link></li>
                           <li><Link className="dropdown-item" to="/KilometersToMilesConversion">Kilometers (km) ↔️ Miles (mi)</Link></li>
                           <li><Link className="dropdown-item" to="/CentimetersToInchesConversion">Centimeters (cm) ↔️ Inches (in)</Link></li>
                           <li><Link className="dropdown-item" to="/MillimetersToInchesConversion">Millimeters (mm) ↔️ Inches (in)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Length/Weight/Mass
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/KilogramsToPoundsConversion">Kilograms (kg) ↔️ Pounds (lb)</Link></li>
                           <li><Link className="dropdown-item" to="/GramsToOuncesConversion">Grams (g) ↔️ Ounces (oz)</Link></li>
                           <li><Link className="dropdown-item" to="/MetricTonsToImperialTonsConversion">Tons (metric) ↔️ Tons (imperial)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Temperature
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/CelsiusToFahrenheitConversion">Celsius (°C) ↔️ Fahrenheit (°F)</Link></li>
                           <li><Link className="dropdown-item" to="/KelvinToCelsiusConversion">Kelvin (K) ↔️ Celsius (°C)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Volume
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/LitersToGallonsConversion">Liters (L) ↔️ Gallons (gal)</Link></li>
                           <li><Link className="dropdown-item" to="/MillilitersToFluidOuncesConversion">Milliliters (mL) ↔️ Fluid Ounces (fl oz)</Link></li>
                           <li><Link className="dropdown-item" to="/CubicMetersToCubicFeetConversion">Cubic meters (m³) ↔️ Cubic feet (ft³)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Speed
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/KilometersPerHourToMilesPerHourConversion">Kilometers per hour (km/h) ↔️ Miles per hour (mph)</Link></li>
                           <li><Link className="dropdown-item" to="/MetersPerSecondToFeetPerSecondConversion">Meters per second (m/s) ↔️ Feet per second (ft/s)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Area
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/SquareMetersToSquareFeetConversion">Square meters (m²) ↔️ Square feet (ft²)</Link></li>
                           <li><Link className="dropdown-item" to="/AcresToHectaresConversion">Acres ↔️ Hectares</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Energy
                        </a>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="/JoulesToCaloriesConversion">Joules (J) ↔️ Calories (cal)</Link></li>
                           <li><Link className="dropdown-item" to="#">Kilowatt-hours (kWh) ↔️ BTU (British Thermal Unit)</Link></li>
                        </ul>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link" onClick={handleLogout}>Sign out</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
