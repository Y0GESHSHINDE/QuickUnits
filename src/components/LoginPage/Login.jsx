import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '/src/Firebase/auth'; // Make sure the path to auth is correct

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();



  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      localStorage.setItem('isAuthenticated', 'true');
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="container-fluid text-center">
      <div className="row d-flex justify-content-center align-items-center" id='ok'>
        <div className="col-12 col-sm-8 col-lg-6 col-xl-6 col-xxl-4 ">
          <div className="card m-3" id='cardBd'>
            <div className="card-body m-3 text-center">
              <h3>Login</h3>
              {error && <p className="text-danger">{error}</p>}
              <form onSubmit={handleLogin}>
                <input
                  type="email"
                  name="UserEmail"
                  id="email"
                  placeholder='Enter Your email'
                  className='form-control mt-3'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="UserPassword"
                  id="Pass"
                  placeholder='Enter Your password'
                  className='form-control mt-3'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="submit"
                  className='btn btn-dark mt-3'
                  value="Log In"
                />
                <div ><Link to={"/signup"} className=' text-dark'>Create account</Link></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
