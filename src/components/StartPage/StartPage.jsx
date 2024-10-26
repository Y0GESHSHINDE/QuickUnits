import React from 'react'
import "./StartPage.css"
import { Link } from 'react-router-dom';

function StartPage() {
   return (
      <div className="container d-flex justify-content-center align-items-center" id='maindiv'>
         <div className="row  d-flex justify-content-center align-items-center">
            <div className="col">
               <h1>Wellcome to the QuickUnits</h1>
               <div className="card m-3">
                  <div className="card-body m-3 text-center">
                     <Link to={"signup"} className=' btn btn-dark form-control mb-4'>SignUp</Link>
                     <Link to={"login"} className=' btn btn-dark form-control '>Login</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}

export default StartPage;