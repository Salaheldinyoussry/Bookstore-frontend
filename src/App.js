import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import { Switch, Router, BrowserRouter, Routes, Route, Redirect } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar';
import Profile from './Profile';
import Books from './Books'
import ShopingCart from './ShopingCart';
import UserList from './UserList';
import OrderList from './OrderList'
import CreateOrder from './createOrder';
import CreateBook from './CreateBook'
import Analytics from './Analytics';
import EditBook from './EditBook'
function App(props) {
  const [signed, setSigned] = useState(false);
  const [manager, setManager] = useState(false);

  useEffect(() => { 

  let user = localStorage.getItem('user')
  let manager =localStorage.getItem('role')
  if(user ){
    setSigned(true);
  }else{
  props.history.push("/login");
  }

  if(manager=='1'){
    setManager(true)
  }


  }, []);

  return (<>
       <Navbar props = {props} manager = {manager} ></Navbar>
    <Switch>

      <Route props={props} path="/profile" component={Profile} />
      <Route props = {props}  path="/cart" component={ShopingCart} />
      <Route props={props} path="/Books" manager={manager}  component={Books} />
      {manager?
      <>
      <Route props={props} path="/users" component={UserList} />
          <Route props={props} path="/orders" component={OrderList} />
          <Route props={props} path="/createOrder" component={CreateOrder} />
          <Route props={props} path="/newBook" component={CreateBook} />
          <Route props={props} path="/analytics" component={Analytics} />
          <Route props={props} path="/editbook" component={EditBook} />
          
      </>
        : ' '}

    </Switch>
  </>
      
  );
}

export default App;
