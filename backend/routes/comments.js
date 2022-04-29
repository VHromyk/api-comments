const express = require('express');
const { getComments, getCommentsById } = require('../controllers/comments.controller');

const router = express.Router();


router.get('/', getComments);
router.get('/:postId', getCommentsById);

module.exports = router;
