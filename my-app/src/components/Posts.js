import Post from "./Posts/Post";

const Posts = (props) => {



let PostsElems = props.paramArr.map((el)=>{
  return <Post text={el.text} postId={el.postId}/>
}
)


  
  return(
<div>
  <h1>Posts PAGE</h1>
    <br/>
  
  
      {
      PostsElems
    }
</div>
  );
}
export default Posts;