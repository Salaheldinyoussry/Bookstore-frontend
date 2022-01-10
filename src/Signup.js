
import './App.css';
import React, { useRef, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import {signup} from './common/UserApi'
function Signup(props) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [shiping, setShipping] = useState("");


    const [password, setPassword] = useState("");
//e, password, last name, first name, e-mail address, phone number, and shipping address.  
    const handleLogin = (e)=>{
        console.log(userName,password);

        let user = {
            user_name : userName,
            password : password,
            email : email ,
            fname : fname ,
            lname : lname ,
            phone : phone ,
            shipingAddress : shiping
        }
        signup(user).then(data=>{
            toast.success("User has been saved successfully");

        }).catch(e=>{
            console.log(e)
            toast.error(e.response.data.err.sqlMessage || "Error saving user");
        })
    }
    return (
        <div className="App">
            <div className='logDiv'>
                <text className="text-label-1">Username</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}     
                />
                <text className="text-label-1">email</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                />

                <text className="text-label-1">first name</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setFname(e.target.value)
                    }}
                />

                <text className="text-label-1">last name</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setLname(e.target.value)
                    }}
                />

                <text className="text-label-1">phone</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <text className="text-label-1">shipping address</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setShipping(e.target.value)
                    }}
                />

                <text className="text-label-1">Password</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    type={'password'}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />


                <button id='btn'  onClick={(e)=>{e.preventDefault(); handleLogin(e)}} className='primary' style={{ marginTop: '20px'}} >
                    Sign up
                </button>

        
                <a href='login' style={{ marginTop: '20px'  ,
                display: 'block' ,
              marginLeft: '40%'
                 }} >
                    sign in instead 
                </a>


            </div>
         
        </div>
    );
}

export default Signup;
