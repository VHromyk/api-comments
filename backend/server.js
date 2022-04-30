const express = require('express');
const cors = require('cors');
const app = express();
const commentRouter = require('./routes/comments');
const postRouter = require('./routes/posts');

const PORT = 5000;

app.use(
    cors({
        origin: '*',
    })
);

app.use('/comments', commentRouter);

app.use('/posts', postRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})