const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchPostData = async () => {
    const result = await axios.get(`${BASE_URL}/posts`)
    
    return result;
};

const fetchPostDataById = async (postId) => {
    const result = await axios.get(`${BASE_URL}/posts/${postId}`);

    return result;
};


const fetchCommentData = async () => {
    const data = await axios.get(`${BASE_URL}/comments`)

    return data;
};


module.exports = {fetchPostData, fetchPostDataById, fetchCommentData};