
import './App.css';
import React, { useRef, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { newOrder } from './common/UserApi'

function CreateOrder(props) {
    const [isbn, setIsbn] = useState(0);
   // const [email, setEmail] = useState("");

    const [quantity, setQuantity] = useState(0);
//e, password, last name, first name, e-mail address, phone number, and shipping address.  

    const handleLogin = (e) => {

        let order = {
            email: localStorage.getItem('user'),
            isbn: isbn,
            quantity : quantity
     
        }
        newOrder(order).then(data => {
              toast.success("Order has been saved successfully")
        }).catch(e => {
            
            toast.error(e.response.data.message || "Error saving order , make sure ISBN is correct");
        })
    }
    return (
        <div className="App">
            <div className='logDiv'>
                <text className="text-label-1">Book ISBN</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e)=>{
                        setIsbn(e.target.value)
                    }}     
                />
                <text className="text-label-1">quantity</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setQuantity(e.target.value)
                    }}
                />
                <button id='btn' onClick={(e)=>{e.preventDefault(); handleLogin(e)}} className='primary' style={{ marginTop: '20px'}} >
                    Save
                </button>

  


            </div>
         
        </div>
    );
}

export default CreateOrder;
