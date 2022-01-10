
import './App.css';
import React, { useRef, useState ,useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { getUsers, confirmOrder, getOrders} from './common/UserApi'
function OrderList(props) {


    const [data, setData] = useState([]);
    //e, password, last name, first name, e-mail address, phone number, and shipping address.  
    const confirm = (book_isbn , quantity) => {
        let tt = [...data]
        tt = tt.filter((i) => { return i.book_isbn != book_isbn })
        let d ={
            book_isbn: book_isbn, quantity: quantity   
        }
        // console.log(uemail)
        confirmOrder(d).then(() => {
            setData(tt)
            toast.success("order has been confirmed successfully");            
        }).catch(e => {
            console.log(e)
            toast.error(e.response.data.err || "Error happened check the parameters are correct");
        })
    }

    useEffect(() => {
      getOrders( ).then((d)=>{
          setData(d)

      }).catch(e => {
          console.log(e)
          toast.error(e.response.data.err || "Error happened or unauthorized access");
      })
      


    }, []);
    return (
        <div className="App">
            <table className="pageTable">
            
                <tbody>
                    <tr style={{ border: 'none' }}>
                        <th >Book ISBN</th>
                        <th >Title</th>

                        <th >quantity</th>
        
                        <th ></th>

                    </tr>
                    {
                        data && data.map((e, i) => {
                            return <tr>
                                <td>{e.book_isbn}</td>
                                <td>{e.title}</td>
                                <td>{e.quantity}</td>
    
                                <td><button className='btn-default' onClick={(r)=>{confirm(e.book_isbn , e.quantity)}} >confirm</button></td>

                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    );
}

export default OrderList;
