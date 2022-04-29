const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchCommentData = () => {
    return axios
      .get(`${BASE_URL}/comments`)
      .then((comments) => {
        return {
          success: true,
          data: comments.data,
      };
      });
};

const getComments = async (req, res) => {
  try {
    const data = await fetchCommentData();
        if (!data) {
            res.status(404).json('Comment was not found!');
        } else {
            res.status(200).send(data);
        }
  } catch (error) {
    console.error(error)
  }
};

const getCommentsById = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await fetchCommentData();

    if (!result) {
        res.status(404).json(`Posts with userId ${postId} were not found!`);
    } else {
        res.status(200).send(result.data)
    }

  } catch (error) {
    console.error(error)
  }
};

module.exports = { getComments, getCommentsById };
