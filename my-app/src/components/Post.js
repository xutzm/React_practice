
import { NavLink } from 'react-router-dom';
import classes from './Post.module.css';



const Post = (props) => {
  // debugger;
  return (
    <div className={classes.App}>
      <NavLink to='posts/1'>
        ПОСТ {props.text}
      </NavLink>
    </div>
  );
}
export default Post;