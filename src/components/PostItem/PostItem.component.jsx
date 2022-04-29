import styles from './PostItem.module.css'


const PostItem = ({ post }) => {
    return (
        <li key={post.id} className={styles.wrapper}>
            <a href='http://www.google.com'>
            <h3>{post.title}</h3>
            <p className={styles.body}>{post.body}</p>
            </a>
        </li>
    );
};

export default PostItem;
