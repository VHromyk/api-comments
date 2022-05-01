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

const getCommentsByPostId = (postId) => {
    return axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((result) => result.data);
}

module.exports = {fetchPostData, fetchPostDataById, getCommentsByPostId };