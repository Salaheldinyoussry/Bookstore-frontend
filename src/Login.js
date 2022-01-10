
import './App.css';
import React, { useRef, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { login } from './common/UserApi'

function App(props) {
    const [userName, setUserName] = useState("");
   // const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
//e, password, last name, first name, e-mail address, phone number, and shipping address.  

    const handleLogin = (e) => {
        console.log(userName, password);

        let user = {
            email: userName,
            password: password,
     
        }
        login(user).then(data => {
            localStorage.setItem('user' , data.email);
            localStorage.setItem('role', data.role);

            props.history.push("/Books");
        }).catch(e => {
            
            toast.error(e.response.data.message || "Error saving user");
        })
    }
    return (
        <div className="App">
            <div className='logDiv'>
                <text className="text-label-1">Email</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e)=>{
                        setUserName(e.target.value)
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
                <button id='btn' onClick={(e)=>{e.preventDefault(); handleLogin(e)}} className='primary' style={{ marginTop: '20px'}} >
                    login
                </button>

        
                <a href='signup' style={{ marginTop: '20px'  ,
                display: 'block' ,
              marginLeft: '40%'
                 }} >
                    sign up instead 
                </a>


            </div>
         
        </div>
    );
}

export default App;
