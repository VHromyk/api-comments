import styles from '../components/PostItem/PostItem.module.css';

const CommentsItem = ({ comments }) => {

  return (
      <ul>
          {comments && comments.map((el) => (
              <li key={el.id} className={styles.comments}>
                  <p>Comment id: {el.id}</p>
                  <p>Name: {el.name}</p>
                  <p>Email: {el.email}</p>
                  <p className={styles.body}>{el.body}</p>
              </li>
          ))}
      </ul>
  );
};

export default CommentsItem;
