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
         // localStorage.setItem("userState", "true");
      } catch (e) {
         setError(e.code);
      }

   };

   return (
      <div className="container-fluid text-center " >
         <div className="row d-flex justify-content-center align-items-center" id='ok'>
            <div className="col-12 col-sm-8 col-lg-6 col-xl-6 col-xxl-4 ">
                  <div className="row">
                     <div className="col-12">
                     <div className="card m-3" id='cardBd'>
                     <div className="card-body m-3 text-center">
                        <h3> Sign up</h3>
                        {error && <p className="text-danger">{error}</p>}
                        <form onSubmit={handleSignup}>
                           <input type="email" name="UserEmail" id="email" placeholder='Enter Your email' className='form-control mt-3' onChange={(e) => setEmail(e.target.value)} />
                           <input type="password" name="UserPassword" id="Pass" placeholder='Enter Your password' className='form-control mt-3' onChange={(e) => setPassword(e.target.value)} />
                           <input type="submit" className='btn btn-dark mt-3' value=" Sign Up" />
                        </form>
                        <div><Link to={"/login"} className='text-dark'>Allready have account ? login</Link></div>
                     </div>
                  </div>
                     </div>
                  </div>
            </div>
         </div>
      </div>
   )
}

export default SignUp;