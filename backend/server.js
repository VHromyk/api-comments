const express = require('express');
const app = express();
const postRouter = require('./routes/posts')

const PORT = 5000;


app.use('/posts', postRouter)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})