let baseUrl = 'http://localhost:8000/';
const axios = require('axios');



export const getBooks = async (email) => {
    const response = await axios({
        method: "get",
        url: baseUrl + `books/all`,

    });
    return response.data;
};
export const getCart = async (email) => {
    const response = await axios({
        method: "get",
        url: baseUrl + `books/cart?email=${email}`,

    });
    return response.data;
};

export const deleteCartItem = async (email , isbn) => {
    const response = await axios({
        method: "delete",
        url: baseUrl + `books/cartItem?email=${email}&isbn=${isbn}`,

    });
    return response.data;
};



export const cartApi = async ( isbn) => {
    let data ={
        email : localStorage.getItem('user') ,
        isbn  : isbn ,
    }
    const response = await axios({
        method: "post",
        url: baseUrl + `books/addToCart`,
        data: data

    });
    return response.data;
};




export const checkoutCart = async (data) => {
  
    const response = await axios({
        method: "post",
        url: baseUrl + `books/cart/checkout?email=${localStorage.getItem('user')}`,
        data: data

    });
    return response.data;
};


export const newBook = async (data) => {

    const response = await axios({
        method: "post",
        url: baseUrl + `books/add?email=${localStorage.getItem('user')}`,
        data: data

    });
    return response.data;
};

export const updateBook = async (data) => {

    const response = await axios({
        method: "put",
        url: baseUrl + `books/update?email=${localStorage.getItem('user')}`,
        data: data

    });
    return response.data;
};



//error.response.data.message