const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchPostData = () => {
  return axios.get(`${BASE_URL}/posts`).then((posts) => {
      return {
          success: true,
          data: posts.data,
      };
  });
}

const getPosts = async (req, res) => {
  const data = await fetchPostData();
   if (!data) {
      res.status(404).json('Posts not found!')
    } else {
      res.status(200).send(data);
    }
}

const getPostsById = async (req, res) => {
  const { userId } = req.params;

  const result = await fetchPostData();

    if (!result) {
        res.status(404).json(`Posts with userId ${userId} were not found!`);
    } else {
        res.status(200).send(result.data.filter((el)=> el.userId === Number(userId)));
    }
};

module.exports = { getPosts, getPostsById };