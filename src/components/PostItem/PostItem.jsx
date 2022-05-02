import styles from './PostItem.module.css'
import { Link } from 'react-router-dom';


const PostItem = ({ post }) => {
 
    const { id: postId, title, body, userId } = post;

    return (
        <li className={styles.wrapper}>
            <Link to={`/posts/${postId}`} style={{ textDecoration: 'none' }}>
                <h2>{title}</h2>
                <p>User id: {userId}</p>
                <p>Post id: {postId}</p>
                <p className={styles.body}>{body}</p>
            </Link>
            </li>
    );
};

export default PostItem;
