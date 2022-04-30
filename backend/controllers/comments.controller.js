const { fetchCommentData } = require('../api/api');

const getComments = (req, res) => {
  fetchCommentData().then((result) => {
    if (!result) {
        res.status(404).json(`Comments were not found!`);
    } else {
      res.status(200).send({
        success: true,
        // data: result.data,
      });
    }
}).catch((error)=> console.log(error.code));
};

module.exports = {getComments};
