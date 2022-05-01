const express = require('express');
const cors = require('cors');
const app = express();
const postRouter = require('./routes/posts');

const PORT = 5000;

app.use(
    cors({
        origin: '*',
    })
);

app.use('/posts', postRouter);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})