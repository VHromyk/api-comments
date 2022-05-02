import styles from '../components/PostItem/PostItem.module.css';

const CommentsItem = ({ comments }) => {

  return (
      <ul>
          {comments && comments.map((el) => (
              <li key={el.id} className={styles.comments}>
                  <p>Name: {el.name}</p>
                  <span>Comment id: {el.id}</span>
                  <span>------</span>
                  <span>Email: {el.email}</span>
                  <span>Email: {el.name}</span>
                  <p className={styles.body}>{el.body}</p>
              </li>
          ))}
      </ul>
  );
};

export default CommentsItem;
