const express = require('express');
const {getAllPosts, getPostsById} = require('../controllers/posts.controller');

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:postId', getPostsById);

module.exports = router;
