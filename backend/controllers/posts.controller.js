const axios = require('axios');

const fetchData = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      return {
          success: true,
          data: posts.data,
      };
  });
}

const getPosts = async (req, res) => {
  const data = await fetchData();

  if (!data) {
    res.status(404).json('Posts not found!')
  } else {
    res.status(200).send(data);
  }
}

const getPostsById = async (req, res) => {
  const { userId } = req.params;

  const result = await fetchData();

    if (!result) {
        res.status(404).json(`Posts with userId ${userId} were not found!`);
    } else {
        res.status(200).send(result.data.filter((el)=> el.userId === Number(userId)));
    }
};

module.exports = {getPosts, getPostsById};