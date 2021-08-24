import Post from "./Posts/Post";

const Posts = () => {

let paramArr = [
  {text:'test111',postId:'1'},
  {text:'test221',postId:'2'},
  {text:'test331',postId:'3'}
]

let PostsElems = paramArr.map((el)=>{
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