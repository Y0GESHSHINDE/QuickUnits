import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartPage from './components/StartPage/StartPage';
import SignUp from './components/SignUpPage/SignUp';
import Login from './components/LoginPage/Login';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartPage/>} ></Route>
        <Route path='/signup' element={<SignUp/>} ></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
      </Routes>
    </Router>
  )
}

export default App