import React from "react";
import Post from "./Posts/Post";
import { addPostActionCreator } from "./Redux/PostsReducer";

const Posts = (props) => {



let PostsElems = props.postsArr.map((el)=>{
  return <Post text={el.text} postId={el.postId}/>
}
);

let postTextEl = React.createRef();

let addPost = () =>{
  let postText = postTextEl.current.value;
  // alert(postText);
  // let action = {type:"ADD-POST", postText:postText};
  props.dispatch(addPostActionCreator(postText));
}
  
  return(
<div>
  <h1>Posts PAGE</h1>

  <p>
   <textarea ref={postTextEl}>
   </textarea>
     <button onClick={ addPost }>Add post</button>
    </p>

    <br/>
  
  
      {
      PostsElems
    }
</div>
  );
}
export default Posts;