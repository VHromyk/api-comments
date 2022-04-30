import styles from './PostItem.module.css'
import { Link } from 'react-router-dom';



const PostItem = ({ post }) => {
    console.log(post)
    const { id: postId, title, body, userId } = post;

    
    return (
        <li key={postId} className={styles.wrapper}>
            <Link to={`/posts/${postId}`} style={{ textDecoration: 'none' }}>
                <p>{title}</p>
                <span>User id: {userId}</span>
                <span>------</span>
                <span>Post id: {postId}</span>
                <p className={styles.body}>{body}</p>
            </Link>
        </li>
    );
};

export default PostItem;
