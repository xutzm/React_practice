import logo from './../logo.svg';
import TopMenu from './Header/TopMenu';
import classes from './Header.module.css';
import React from 'react';


const Header = () => {

let postTextEl = React.createRef();
let addPost = () =>{
  let postText = postTextEl.current.value;
  alert(postText);
}


  return(
    <div className={classes.App}>
      <TopMenu/>
  <img src={logo} className="App-logo" alt="logo" />
 <p>
   <textarea ref={postTextEl}>
   </textarea>
     <button onClick={ addPost }>Add post</button>
    </p>

  </div>
  );
}
export default Header;