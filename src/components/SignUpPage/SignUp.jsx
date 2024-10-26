import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./Signup.css"
import { signup } from "/src/Firebase/auth";

function SignUp() {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const navigate = useNavigate();

   const handleSignup = async (e) => {
      e.preventDefault();
      try {
         await signup(email, password);
         navigate('/home');
         localStorage.setItem("userState", "true");
      } catch (e) {
         setError(e.code);
      }
      
   };

   return (
      <div className="container text-center" >
         <div className="row  d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-10 col-lg-8 col-xl-6 mt-5">
               <h1>Wellcome to the QuickUnits</h1>
               <div className="card m-3">
                  <div className="card-body m-3 text-center">
                     <h3> Sign up</h3>
                     {error && <p className="text-danger">{error}</p>}
                     <form onSubmit={handleSignup}>
                        <input type="email" name="UserEmail" id="email" placeholder='Enter Your email' className='form-control mt-3' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="UserPassword" id="Pass" placeholder='Enter Your password' className='form-control mt-3' onChange={(e) => setPassword(e.target.value)} />
                        <input type="submit" className='btn btn-outline-warning mt-3' value=" Sign Up" />
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SignUp;