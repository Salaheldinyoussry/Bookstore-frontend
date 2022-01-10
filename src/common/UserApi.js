let baseUrl = 'http://localhost:8000/';
const axios = require('axios');


export const login = async ( data) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `users/login` ,

        data: data,
    });
    return response.data;
};

export const signup = async ( data) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `users/signup`,

        data: data,
    });
    return response.data;
};

export const get = async (email) => {
    const response = await axios({
        method: "get",
        url: baseUrl + `users/get?email=${email}`,

    });
    return response.data;
};
export const logOUT = async (email) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `users/logout?email=${email}`,

    });
    return response.data;
};


export const putUser = async (email, data) => {
    const response = await axios({
        method: "put",
        url: baseUrl + `users/update?email=${email}`,
        data : data 

    });
    return response.data;
};

export const getUsers = async (email, token) => {
    const response = await axios({
        method: "get",
        url: baseUrl + `users/all?email=${email}`,
        Headers:{
            authourization : `Bearer ${token}`
        },
       

    });
    return response.data;
};

export const promoteUSer = async (email) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `users/promote?email=${email}`,
        // Headers: {
        //     authourization: `Bearer ${token}`
        // },


    });
    return response.data;
};


export const confirmOrder = async (data) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `users/confirm?email=${localStorage.getItem('user')}`,
        // Headers: {
        //     authourization: `Bearer ${token}`
        // },
        data:data


    });
    return response.data;
};


export const getOrders = async (data) => {
    const response = await axios({
        method: "get",
        url: baseUrl + `books/getOrders?email=${localStorage.getItem('user')}`,
        // Headers: {
        //     authourization: `Bearer ${token}`
        // },
        data: data


    });
    return response.data;
};



export const newOrder = async (data) => {
    const response = await axios({
        method: "post",
        url: baseUrl + `books/order?email=${localStorage.getItem('user')}`,
        // Headers: {
        //     authourization: `Bearer ${token}`
        // },
        data: data


    });
    return response.data;
};


export const getanalytics = async () => {
    const response = await axios({
        method: "get",
        url: baseUrl + `users/analytics?email=${localStorage.getItem('user')}`,
        // Headers: {
        //     authourization: `Bearer ${token}`
        // },


    });
    return response.data;
};




//error.response.data.message