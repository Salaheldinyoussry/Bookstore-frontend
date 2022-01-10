
import './App.css';
import React, { useRef, useState } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { newBook } from './common/BookApi'

function CreateBook(props) {
    const [isbn, setIsbn] = useState(0);
    const [title, setTitle] = useState('');
    const [publication_year, setPubYear] = useState('');
    const [price, setPrice] = useState('');
    const [thres, setThres] = useState('');

    const [publisher, setPublisher] = useState('');
    const [category, setCategory] = useState('Science');
    const [noOFCopies, setNOOfCopies] = useState('');
    const [authors, setAuthours] = useState([]);
    const [temp, setTemp] = useState([]);

   // const [email, setEmail] = useState("");

    const [quantity, setQuantity] = useState(0);
//e, password, last name, first name, e-mail address, phone number, and shipping address.  

    const handleLogin = (e) => {

        let book = {
            email: localStorage.getItem('user'),        
            isbn: isbn,
            title: title,
            publication_year: publication_year,
            price: price,
            publisher: publisher,
            thres : thres ,
            category: category, 
            noOFCopies: noOFCopies,
            authors: authors

       }
       console.log(authors);
        newBook(book).then(data => {
              toast.success("Book has been saved successfully")
        }).catch(e => {
            
            toast.error(e.response.data.message || "Error saving Book , make sure book isn't already in the system");
        })
    }
    return (
        <div className="App">
            <div className='logDiv'>
                <text className="text-label-1">Book ISBN</text>
                <input
                value={isbn}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e)=>{
                        setIsbn(e.target.value)
                    }}     
                />
                <text className="text-label-1">Book title</text>
                <input
                value={title}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <text className="text-label-1">publication year</text>
                <input
                    value={publication_year}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPubYear(e.target.value)
                    }}
                />
                <text className="text-label-1">price</text>
                <input
                value={price}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPrice(e.target.value)
                    }}
                />
                <text className="text-label-1">publisher</text>
                <input
                  value={publisher}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setPublisher(e.target.value)
                    }}
                />

                <text className="text-label-1">Threshold</text>
                <input
                    value={thres}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setThres(e.target.value)
                    }}
                />
                <text className="text-label-1">category</text>

                <select class="form-control m-0"  
                value={ category }
                    onChange={(e) => {
                        setCategory(e.target.value)
                    }}
                > 
                    <option value={'Science'}>Science</option>
                    <option value={'Art'}>Art</option>
                    <option value={'Religion'} >Religion</option>
                    <option value={'History'} >History</option>
                    <option value={'Geography'} >Geography</option>

                </select>
                {/* <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        //setQuantity(e.target.value)
                    }}
                /> */}

                <text className="text-label-1">no of copies</text>
                <input
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setNOOfCopies(e.target.value)
                    }}
                    value={noOFCopies}
                />


                <text className="text-label-1">Authours</text>
                <input

                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e) => {
                        setTemp(e.target.value)
                    }}
                    value={temp}
                />
                <button style={{ marginTop: '10px' }}
                
                 onClick={(e)=>{
                     let t = [...authors]
                     let x = temp;
                     t.push(x);
                     setAuthours(t);
                     setTemp('')
                 }}
                > add authour</button>

                <text > {authors.map(e=><span>{e+" - "}</span>)} </text>

             



                <button id='btn' onClick={(e)=>{e.preventDefault(); handleLogin(e)}} className='primary' style={{display:'block', marginTop: '40px'}} >
                    Save
                </button>

  


            </div>
         
        </div>
    );
}

export default CreateBook;
