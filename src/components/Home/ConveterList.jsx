import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../components/Home/Home.css';

function ConveterList() {
   const unitConversions = [
      { from: "Kilometers (km)", to: "Miles (mi)", route: "/KilometersToMilesConversion" },
      { from: "Meters (m)", to: "Feet (ft)", route: "/MetersToFeetConversion" },
      { from: "Centimeters (cm)", to: "Inches (in)", route: "/CentimetersToInchesConversion" },
      { from: "Millimeters (mm)", to: "Inches (in)", route: "/MillimetersToInchesConversion" },
      { from: "Kilograms (kg)", to: "Pounds (lb)", route: "/KilogramsToPoundsConversion" },
      { from: "Grams (g)", to: "Ounces (oz)", route: "/GramsToOuncesConversion" },
      { from: "Tons (metric)", to: "Tons (imperial)", route: "/MetricTonsToImperialTonsConversion" },
      { from: "Celsius (°C)", to: "Fahrenheit (°F)", route: "/CelsiusToFahrenheitConversion" },
      { from: "Kelvin (K)", to: "Celsius (°C)", route: "/KelvinToCelsiusConversion" },
      { from: "Liters (L)", to: "Gallons (gal)", route: "/LitersToGallonsConversion" },
      { from: "Milliliters (mL)", to: "Fluid Ounces (fl oz)", route: "/MillilitersToFluidOuncesConversion" },
      { from: "Cubic meters (m³)", to: "Cubic feet (ft³)", route: "/CubicMetersToCubicFeetConversion" },
      { from: "Kilometers per hour (km/h)", to: "Miles per hour (mph)", route: "/KilometersPerHourToMilesPerHourConversion" },
      { from: "Meters per second (m/s)", to: "Feet per second (ft/s)", route: "/MetersPerSecondToFeetPerSecondConversion" },
      { from: "Square meters (m²)", to: "Square feet (ft²)", route: "/SquareMetersToSquareFeetConversion" },
      { from: "Acres", to: "Hectares", route: "/AcresToHectaresConversion" },
      { from: "Joules (J)", to: "Calories (cal)", route: "/JoulesToCaloriesConversion" }
   ];

   return (
      <div>
         <div className="container-fluid">
            <div className="row d-flex justify-content-center">
               {
                  unitConversions.map((conversion, key) => (
                     <div className='card col-10 col-sm-5 col-lg-5 col-xl-3 m-1 text-center p-4' id='cardbd' key={key}>
                        <div className='card-body'>
                           <h4>{conversion.from} to {conversion.to}</h4>
                           <div>
                              <Link to={conversion.route} className='btn btn-dark'>Convert</Link>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default ConveterList;
