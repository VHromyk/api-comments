const express = require('express');
const cors = require('cors');
const app = express();
const postRouter = require('./routes/posts')
const commentRouter = require('./routes/comments');

const PORT = 5000;

app.use(
    cors({
        origin: '*',
    })
);
app.use('/posts', postRouter)
app.use('/comments', commentRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})