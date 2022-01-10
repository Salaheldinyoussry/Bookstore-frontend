
import './App.css';
import React, { useRef, useState ,useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { getUsers, promoteUSer} from './common/UserApi'
function UserList(props) {


    const [data, setData] = useState([]);
    //e, password, last name, first name, e-mail address, phone number, and shipping address.  
    const promote = (uemail) => {
        console.log(uemail)
        promoteUSer(uemail).then(() => {
            toast.success("users has been promoted successfully");            
        }).catch(e => {
            console.log(e)
            toast.error(e.response.data.err || "Error happened or unauthorized access");
        })
    }

    useEffect(() => {
      getUsers(localStorage.getItem('user') , localStorage.getItem('token')  ).then((d)=>{
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
                        <th >user name</th>
                        <th >email</th>
                        <th >first name</th>
                        <th >last name</th>
                        <th ></th>

                    </tr>
                    {
                        data && data.map((e, i) => {
                            return <tr>
                                <td>{e.user_name}</td>
                                <td>{e.email}</td>
                                <td>{e.fname}</td>
                                <td>{e.lname}</td>
                                {e.type==0 ?
                                <td><button className='btn-default' onClick={(r)=>{promote(e.email)}} >promote to manager</button></td>
                                :''}

                            </tr>
                        })
                    }
                </tbody>

            </table>

        </div>
    );
}

export default UserList;
