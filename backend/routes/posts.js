const express = require('express');
const { getPosts, getPostsById } = require('../controllers/posts.controller');

const router = express.Router();


router.get('/', getPosts)
router.get('/:userId', getPostsById);


module.exports = router;