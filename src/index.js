import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar';
import Profile from './Profile';
import Books from './Books'
import ShopingCart from './ShopingCart';
import {Switch, Router, BrowserRouter, Routes, Route,Redirect } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import "react-toastify/dist/ReactToastify.min.css";


// import 'mdbreact/dist/css/mdb.css'
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import { ToastContainer, cssTransition } from "react-toastify";

const hist = createBrowserHistory();
const About = () => <h1>About Us</h1>

const bounce = cssTransition({
  enter: "animate__animated animate__fadeInDown",
  exit: "animate__animated animate__fadeOutUp",
});

ReactDOM.render(
   <>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={true}
      newestOnTop={false}
      // closeOnClick
      rtl={false}
      draggable
      // pauseOnHover
      // transition={bounce}
      limit={1}
    />

  <Router history={hist}>
  <BrowserRouter>
      
      <Switch>
        <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />

          <Route
            path="/"
            render={(props) => <App {...props} />}
          />

        {/* <Redirect exact path="/" to="/login" /> */}
        {/* <Route
          path="/home"
          render={(props) => <App {...props} />}
        /> */}
        </Switch>

  </BrowserRouter>


</Router>
  </>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
