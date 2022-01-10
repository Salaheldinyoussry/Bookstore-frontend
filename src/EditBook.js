
import './App.css';
import React, { useRef, useState, useEffect } from "react";
import { MDBBtn } from 'mdb-react-ui-kit';
import { toast } from "react-toastify";
import { newBook, updateBook } from './common/BookApi'
//import Multiselect from 'multiselect-react-dropdown';
//import { Creatable } from 'react-select';
//import CreatableSelect, { makeCreatableSelect } from "react-select";
import CreatableSelect from "react-select/creatable";
const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
});
function EditBook(props) {
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
    const [options, setOptions] = useState([]);
    const [change, setChange] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
   // const [email, setEmail] = useState("");

    const [quantity, setQuantity] = useState(0);
    const [bo , setbo] = useState(null)
    const [list, setlist] = useState([])


    useEffect(() => {
         
       let b = JSON.parse(localStorage.getItem('book'));
       setbo(b);
      // console.log(book);
       setTitle(b.title)
       setIsbn(b.isbn)
        setPubYear(b.publication_year)
        setPublisher(b.publisherName)
        setThres(b.threshold)
        setPrice(b.price)
        setCategory(b.category)
        setNOOfCopies(b.number_of_copies)
        let auths = b.auths.split('-')
       // setOptions([])
        auths.forEach(t=>{
            handleCreate(t)
        })



    }, []);
//e, password, last name, first name, e-mail address, phone number, and shipping address.  
   function onSelect(selectedList, selectedItem) {
     console.log(selectedItem,selectedList)
    }

    function onRemove(selectedList, removedItem) {
        console.log(removedItem, selectedList)

    }
    const handleChange = (newValue, actionMeta) => {
        setChange(true);

        console.group("Value Changed");
        console.log(newValue);
       // console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        setOptions(newValue);
        // this.setState({ value: newValue });
    };
    const handleInputChange = (inputValue, actionMeta) => {

    }
    const handleCreate = (inputValue) => {
        // this.setState({ isLoading: true });
        setChange(true);
        setIsLoading(true);
        console.group("Option created");
        console.log("Wait a moment...");
        setTimeout(() => {
            const newOption = createOption(inputValue);
            console.log(newOption);
            console.groupEnd();
            setOptions([...options, newOption]);
            setIsLoading(false);
        }, 1000);
    };
    //handleCreate
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
            p_id: bo.publisher_id

       }
       console.log(authors);
        updateBook(book).then(data => {
              toast.success("Book has been saved successfully")
        }).catch(e => {
            
            toast.error(e.response.data.message || "Error saving Book ");
        })
    }
    return (
        <div className="App">
            <div className='logDiv'>
                {/* <text className="text-label-1">Book ISBN</text>
                <input
                value={isbn}
                    class="form-control m-0"
                    id="floatingPassword"
                    onChange={(e)=>{
                        setIsbn(e.target.value)
                    }}     
                /> */}
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


                {/* <text className="text-label-1">Authours</text>
                {/* <Multiselect
                    options={options} // Options to display in the dropdown
                    //selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                /> */}
                {/* <CreatableSelect
                    isMulti={true}

                    isClearable
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                   // options={list}
                    value={options}
                    placeholder={"Add.."}
                    onCreateOption={handleCreate}
                /> */} 

                



                <button id='btn' onClick={(e)=>{e.preventDefault(); handleLogin(e)}} className='primary' style={{display:'block', marginTop: '40px'}} >
                    Save
                </button>

  


            </div>
         
        </div>
    );
}

export default EditBook;
