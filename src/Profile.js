
import './App.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import { get ,putUser } from './common/UserApi'
import React, { useRef, useState , useEffect } from "react";

import { toast } from "react-toastify";
function Profile(props) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("sjil");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [shiping, setShipping] = useState("");


    const [password, setPassword] = useState("");
//e, password, last name, first name, e-mail address, phone number, and shipping address.  

    useEffect(() => {

       get(localStorage.getItem('user')).then(u=>{
          // console.log(user)
           let user =u[0];
           setUserName(user.user_name)
           setEmail(user.email);
           setFname(user.fname);
           setLname(user.lname);
           setPassword(user.password);
           setPhone(user.phone);
           setShipping(user.shipingAddress);

       }).catch(e=>{

           toast.error(e.response.data.message || "Error getting user");
       })


    }, []);



    const handleLogin = (e)=>{
        let user = {
            user_name: userName,
            password: password,
            email: email,
            fname: fname,
            lname: lname,
            phone: phone,
            shipingAddress: shiping
        }
        putUser(localStorage.getItem('user'),user).then(u => {
            toast.success("User has been saved successfully");

        }).catch(e => {

            toast.error(e.response.data.message || "Error saving user");
        })
    }
    return (
        <div className="App">

            <div className='logDiv'>
                <text className="text-label-1">Username</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    value={userName}
                    onChange={(e)=>{
                        setUserName(e.target.value)
                    }}     
                />
                {/* <text className="text-label-1">email</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                /> */}

                <text className="text-label-1">first name</text>
                <input
                value={fname}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setFname(e.target.value)
                    }}
                />

                <text className="text-label-1">last name</text>
                <input
                value={lname}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setLname(e.target.value)
                    }}
                />

                <text className="text-label-1">phone</text>
                <input
                value={phone}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPhone(e.target.value)
                    }}
                />

                <text className="text-label-1">shipping address</text>
                <input
                value={shiping}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setShipping(e.target.value)
                    }}
                />

                <text className="text-label-1">Password</text>
                <input
                value={password}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />


                <button id='btn'  onClick={(e)=>{ handleLogin(e)}} className='primary' style={{ marginTop: '20px'}} >
                    Save 
                </button>


            </div>
         
        </div>
    );
}

export default Profile;
