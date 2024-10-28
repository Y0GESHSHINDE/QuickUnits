import React, { useState } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { app } from "../../Firebase/firebase";
import Navbar from '../Navbar/Navbar';
import ConveterList from './ConveterList';
import './Home.css'
const auth = getAuth(app);

function Home() {
  return (
    <div className='background-col'>
       <Navbar/>
       <ConveterList/>
    </div>
  );
}

export default Home;
