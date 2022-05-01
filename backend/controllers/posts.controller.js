const { fetchPostData, fetchPostDataById, getCommentsByPostId } = require('../api/api');

const getAllPosts =  (req, res) => {
    fetchPostData()
        .then((result) => {
            if (!result) {
                res.status(404).json('Posts not found!');
            } else {
                res.status(200).send({
                    success: true,
                    data: result.data,
                });
            }
        }).catch((error) => console.log(error.code));
};

const getPostsById = async (req, res) => {
    const { postId } = req.params;

    const comments = await getCommentsByPostId(postId);
  
    fetchPostDataById(postId)
        .then((result) => {
            if (!result) {
                res.status(404).json({
                    success: false,
                    data: 'Not found',
                });
            } else {
                res.status(200).send({
                    success: true,
                    data: {
                        ...result.data,
                        commentslist: comments
                    },
                });
            }
        }).catch((error) => console.log(error.code));

};

module.exports = {getAllPosts, getPostsById};