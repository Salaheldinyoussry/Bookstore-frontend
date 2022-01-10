import React, { Component } from 'react'; 
import { Route, Navigate, Routes } from "react-router-dom"; 
import App from '../App';  
  
const LoginLayout = () => (                         
    <div>  
      <p>This is the First Layout</p> 
        <Routes>
            <Route
                path="/login"
                component={App}
            />
            <Navigate from="/" to="/login" />
        </Routes>                                       
    </div>  
  );  
  
export default LoginLayout;