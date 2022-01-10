
import './App.css';
import React, { useRef, useState ,useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { getanalytics } from './common/UserApi'

function Analytics(props) {
    const [data, setData] = useState(null);


    useEffect(() => {

        getanalytics().then(bs => {
            console.log(bs)
            setData(bs)

        }).catch(e => {

            toast.error(e.response.data.message || "Error getting items");
        })


    }, []);
    return (
        <div className="App">
            <div className='analytics'>
                <div>
                    <h1 style={ {margin: '40px' } } > Analytics</h1>
                    <h6> {data?data.total:''} books have been sold</h6>
                </div>
                <div className='anaBox'>
                <h3>Top users</h3>
                <table className="pageTable">

                    <tbody>
                        <tr style={{ border: 'none' }}>
                                <th >Email </th>
                                <th >First name</th>

                                <th >Last Name</th>
                                <th >total sales</th>

                            <th ></th>

                        </tr>
                        {
                                data && data.topUsers && data.topUsers.map((e, i) => {
                                return <tr>
                                    <td>{e.user_email}</td>
                                    <td>{e.fname}</td>
                                    <td>{e.lname}</td>
                                    <td>{e.totalSales}</td>

.
                                </tr>
                            })
                        } 
                    </tbody>

                </table>
                </div>



                <div className='anaBox'>
                    <h3>Top Books</h3>
                    <table className="pageTable">

                        <tbody>
                            <tr style={{ border: 'none' }}>
                                <th >Book ISBN</th>
                                <th >Title</th>

                                <th >category</th>
                                <th >total sales</th>

                                <th ></th>

                            </tr>
                        {
                                data && data.topBooks.map((e, i) => {
                                    return <tr>
                                        <td>{e.isbn}</td>
                                        <td>{e.title}</td>
                                        <td>{e.category}</td>
                                        <td>{e.totalSales}</td>


                                    </tr>
                                })
                            } 
                        </tbody>

                    </table>
                </div>
              
            </div>
         
        </div>
    );
}

export default Analytics;
