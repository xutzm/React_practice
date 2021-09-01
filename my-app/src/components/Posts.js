import React from "react";
import Post from "./Posts/Post";

const Posts = (props) => {



let PostsElems = props.paramArr.map((el)=>{
  return <Post text={el.text} postId={el.postId}/>
}
);

let postTextEl = React.createRef();

let addPost = () =>{
  let postText = postTextEl.current.value;
  // alert(postText);
  props.addPost(postText);
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