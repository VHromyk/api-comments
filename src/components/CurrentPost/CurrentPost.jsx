import styles from './CurrentPost.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentsItem from '../CommentsItem';

const CurrentPost = () => {
  const [showComments, setShowComments] = useState(true);
  const [post, setPost] = useState([]);

  const { postId } = useParams();

     useEffect(() => {
         axios
             .get(`http://localhost:5000/posts/${postId}`)
             .then((res) => setPost(res.data.data));
         
         setShowComments(false)
     }, [postId]);
    
  return (
      <>
          <div>
              <h3>Current post</h3>
              {post && (
                  <div>
                      <p>{post.title}</p>
                      <span>User id: {post.userId}</span>
                      <span>------</span>
                      <span>Post id: {post.id}</span>
                      <p className={styles.body}>{post.body}</p>
                  </div>
              )}
              <button type="button" className={styles.show_btn}
                  onClick={() => setShowComments(!showComments)}>
                  Show comments
              </button>
          </div>
          {post && showComments && <CommentsItem comments={post.commentslist} />}
      </>
  );
};

export default CurrentPost;
