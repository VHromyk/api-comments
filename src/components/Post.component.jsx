import { useState, useEffect } from 'react'
import axios from 'axios'
import PostItem from './PostItem/PostItem.component'

const Post = () => {
  const [posts, setPosts] = useState([])

  async function fetchData() {
    const result = await axios.get('http://localhost:5000/posts');
    return result.data.data;
}

  useEffect(() => {
    fetchData().then((result) =>
      setPosts(result));
  }, [])


  return (
    <>
      <ul className='list'>
      {posts.map(post => (
        <PostItem post={post}></PostItem>
      ))}
    </ul>
    </>
  )
}

export default Post
