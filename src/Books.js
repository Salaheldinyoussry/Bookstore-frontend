
import React, { useRef, useState, useEffect} from "react";
import { toast } from "react-toastify";
import { MDBListGroupItem ,MDBListGroup,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import { getBooks , cartApi} from './common/BookApi';
function ShopingCart(props) {
   
    const [show, setShow] = useState(false);
    const [books, setBooks] = useState([]);
    


//e, password, last name, first name, e-mail address, phone number, and shipping address.


// ISBN number, title, author(s), publisher, publication year, selling price, and category
    const handleLogin = (e)=>{
    }
    const addToCart = (isbn)=>{
        cartApi(isbn).then(()=>{
            toast.success("item has been added successfully");
        }).catch(e => {

            toast.error(e.response.data.message || "item already in cart");
        })

    }


    useEffect(() => {

        getBooks().then(bs => {
             console.log(bs)
             let all = [];
             bs.forEach(e => {
                 let obj = e.value[0];
                 let auths = '';
                 e.value.forEach(a=>{
                     auths+=' '+a.name+'-';
                 })
                 auths= auths.slice(0, -1)
                 obj.auths =auths;
                 all.push(obj);
             });
             setBooks(all)
            console.log(all);

        }).catch(e => {

            toast.error(e.response.data.message || "Error getting books");
        })


    }, []);

    return (
           <>
            <div>
                <button className="checkbtn" onClick={(e) => { setShow(!show) }}>
                    Search

                </button>
                {show ?
                    <div className="checkCont">

            
                        <input
                            class="form-control m-0"
                            id="floatingPassword"
                            onChange={(e) => {
                                // setEmail(e.target.value)
                            }}
                        />
                        <button className='btn' >Search </button>

                    </div>
                    : ''}
            </div>
        <div className="cont" >
            {books.map((b , i )=>{
             
             return    <div className='book'>
              <h1>{b.title}</h1>
              <h6><span>ISBN : </span> {b.isbn}  </h6>
                <h6><span>author (s) : </span> {b.auths}  </h6>
                <h6><span>publisher : </span> {b.publisherName}  </h6>
                <h6><span>publication year : </span> {b.publication_year}  </h6>
                <h6><span>selling price : </span> {b.price}  </h6>
            <h6><span>category : </span> {b.category}  </h6>
                 <h6><span>no of copies : </span> {b.number_of_copies}  </h6>
                 

                 <button className='btn-default' onClick={(e)=>{addToCart(b.isbn)}} >add to cart </button>
                 {console.log('ss',props.manager)}
                 {localStorage.getItem('role')=='1'? 
                     <button style={{marginLeft:'20px'}} className='btn-default' onClick={(e) => {
                         localStorage.setItem('book',JSON.stringify(b))
                         props.history.push('/editbook')
                      }} >edit </button>
                 
                :''}

            </div>
             
             

           })} 
         
         
        </div>
        </>
    );
}

export default ShopingCart;
