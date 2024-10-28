import React from 'react'
import { app } from '../../Firebase/firebase'
import { getAuth } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
const auth = getAuth(app);

function Navbar() {
   const [isLoggedOut, setIsLoggedOut] = useState(false);

   const handleLogout = async () => {
      try {
         await signOut(auth); // Call Firebase signOut directly
         localStorage.removeItem('isAuthenticated');
         setIsLoggedOut(true); // Update state to trigger redirect
      } catch (error) {
         console.error("Logout failed:", error); // Handle error if needed
      }
   };

   if (isLoggedOut) {
      return <Navigate to="/login" />; // Conditionally render Navigate for redirection
   }
   return (
      <div  >
         <nav class="navbar navbar-expand-lg bg-light  ">
            <div class="container-fluid ">
               <a class="navbar-brand " href="#">Quickunits</a>
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                     <li class="nav-item ">
                        <a class="nav-link active " aria-current="page" href="#">Home</a>
                     </li>

                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Length/Distance
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Meters (m) ↔️ Feet (ft)</a></li>
                           <li><a class="dropdown-item" href="#">Kilometers (km) ↔️ Miles (mi)
                           </a></li>
                           <li><a class="dropdown-item" href="#">Centimeters (cm) ↔️ Inches (in)</a></li>
                           <li><a class="dropdown-item" href="#">Millimeters (mm) ↔️ Inches (in)</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Length/Weight/Mass
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Kilograms (kg) ↔️ Pounds (lb)</a></li>
                           <li><a class="dropdown-item" href="#">Grams (g) ↔️ Ounces (oz)</a></li>
                           <li><a class="dropdown-item" href="#">Tons (metric) ↔️ Tons (imperial)</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Temperature
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Celsius (°C) ↔️ Fahrenheit (°F))</a></li>
                           <li><a class="dropdown-item" href="#">Kelvin (K) ↔️ Celsius (°C)</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Volume
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Liters (L) ↔️ Gallons (gal)</a></li>
                           <li><a class="dropdown-item" href="#">Milliliters (mL) ↔️ Fluid Ounces (fl oz)</a></li>
                           <li><a class="dropdown-item" href="#">Cubic meters (m³) ↔️ Cubic feet (ft³)</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Speed
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Kilometers per hour (km/h) ↔️ Miles per hour (mph)</a></li>
                           <li><a class="dropdown-item" href="#">Meters per second (m/s) ↔️ Feet per second (ft/s)</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Area
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Square meters (m²) ↔️ Square feet (ft²)</a></li>
                           <li><a class="dropdown-item" href="#">Acres ↔️ Hectares</a></li>
                        </ul>
                     </li>
                     <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Energy
                        </a>
                        <ul class="dropdown-menu">
                           <li><a class="dropdown-item" href="#">Joules (J) ↔️ Calories (cal)</a></li>
                           <li><a class="dropdown-item" href="#">Kilowatt-hours (kWh) ↔️ BTU (British Thermal Unit)</a></li>
                        </ul>
                     </li>


                     <li className='nav-item '>
                        <Link className='nav-link' onClick={handleLogout} >Sign out</Link>
                     </li>
                  </ul>
               </div>
            </div>

         </nav>
      </div>
   )
}

export default Navbar