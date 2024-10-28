import React from 'react'
import '../../components/Home/Home.css'
function ConveterList() {
   const unitConversions = [
      { from: "Kilometers (km)", to: "Miles (mi)" },
      { from: "Meters (m)", to: "Feet (ft)" },
      { from: "Centimeters (cm)", to: "Inches (in)" },
      { from: "Millimeters (mm)", to: "Inches (in)" },
      { from: "Kilograms (kg)", to: "Pounds (lb)" },
      { from: "Grams (g)", to: "Ounces (oz)" },
      { from: "Tons (metric)", to: "Tons (imperial)" },
      { from: "Celsius (°C)", to: "Fahrenheit (°F)" },
      { from: "Kelvin (K)", to: "Celsius (°C)" },
      { from: "Liters (L)", to: "Gallons (gal)" },
      { from: "Milliliters (mL)", to: "Fluid Ounces (fl oz)" },
      { from: "Cubic meters (m³)", to: "Cubic feet (ft³)" },
      { from: "Kilometers per hour (km/h)", to: "Miles per hour (mph)" },
      { from: "Meters per second (m/s)", to: "Feet per second (ft/s)" },
      { from: "Square meters (m²)", to: "Square feet (ft²)" },
      { from: "Acres", to: "Hectares" },
      { from: "Joules (J)", to: "Calories (cal)" }
   ];

   return (
      <div>
         <div className="container-fluid">
            <div className="row d-flex justify-content-center ">
               {
                  unitConversions.map((index, key) => (
                     <div className='card col-10 col-sm-5 col-lg-5 col-xl-3 m-1 text-center p-4' id='cardbd'>
                        <div className='card-body '>
                           <h4>{index.from} to {index.to}</h4>
                           <div>
                              <button className='btn btn-dark'>Convert</button>
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

export default ConveterList