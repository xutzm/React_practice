
import classes from './Post.module.css';



const Post = (props) => {
  // debugger;
  return (
    <div className={classes.App}>
      <p>
        ПОСТ {props.text}
      </p>
    </div>
  );
}
export default Post;