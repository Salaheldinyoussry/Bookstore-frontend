
import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { MDBListGroupItem ,MDBListGroup,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import {getCart,deleteCartItem ,checkoutCart} from './common/BookApi'
function ShopingCart(props) {
 
    const [books, setBooks] = useState([]);

    const [card, setCard] = useState('');
    const [exp, setExp] = useState('');


    const [show, setShow] = useState(false);
//e, password, last name, first name, e-mail address, phone number, and shipping address.


// ISBN number, title, author(s), publisher, publication year, selling price, and category
    useEffect(() => {

        getCart(localStorage.getItem('user')).then(bs => {
            console.log(bs)
            let all = [];
            bs.forEach(e => {
                let obj = e.value[0];
                let auths = '';
                e.value.forEach(a => {
                    auths += ' ' + a.name + '-';
                })
                auths = auths.slice(0, -1)
                obj.auths = auths;
                all.push(obj);
            });
            setBooks(all)
            console.log(all);

        }).catch(e => {

            toast.error(e.response.data.message || "Error getting items");
        })


    }, []);

    const handleLogin = (e)=>{
    }

    const remove = (id) => {
  deleteCartItem(localStorage.getItem('user'),id).then(()=>{
      let hh =[...books] ;
      hh=hh.filter(b=>{return b.isbn != id});
      setBooks(hh);

  }).catch(e => {

      toast.error(e.response.data.message || "Error deleting item");
  })
    }

    const checkOUT = (e) => {
  if(!exp || !card){
      toast.error("Enter valid card details");
  }
    

        checkoutCart({cardNo:card , exp : exp}).then(() => {
            toast.success("cart has been checked out successfully");
            props.props.history.push('/books')

        }).catch(e => {

            toast.error(e.response.data.err || "Error checking out");
        })


    }
    return (
        <>
        <div>
            <button className="checkbtn"  onClick={(e)=>{setShow(!show)}}>
                checkout 

            </button>
            {show?
            <div className="checkCont">
                    
                    <text className="text-label-1">Card no</text>
                    <input
                        class="form-control m-0"
                        id="floatingPassword"
                        value={card}
                        onChange={(e) => {
                            setCard(e.target.value)
                        }}
                    />
                    <text className="text-label-1">Exp date</text>
                    <input
                        class="form-control m-0"
                        id="floatingPassword"
                        value={exp}
                        onChange={(e) => {
                            setExp(e.target.value)
                        }}
                    />
                        <button className='btn' onClick={checkOUT} >Checkout </button>

            </div>
                    : ''}
        </div>
        <div className="cont" >
                {books.map((b, i) => {

                    return <div className='book'>
                        <h1>Title</h1>
                        <h6><span>ISBN : </span> {b.isbn}  </h6>
                        <h6><span>author (s) : </span> {b.auths}  </h6>
                        <h6><span>publisher : </span> {b.publisherName}  </h6>
                        <h6><span>publication year : </span> {b.publication_year}  </h6>
                        <h6><span>selling price : </span> {b.price}  </h6>
                        <h6><span>category : </span> {b.category}  </h6>

                        <button className='btn-default' onClick={(e) => { remove(b.isbn) }} >remove from cart </button>

                    </div>



                })} 
   
         
        </div>
        </> 
    );
}

export default ShopingCart;
