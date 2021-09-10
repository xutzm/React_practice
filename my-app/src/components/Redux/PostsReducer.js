const ADD_POST = "ADD-POST";

const postsReducer = (state,action) => {
switch(action.type){
  case ADD_POST:
    let newPost = {
      text:action.postText,
      postId:'4'
    };
    state.push(newPost);
    return state;
  default:
      return state; 
}

}
export const addPostActionCreator = (postText) => {
  return {
   type:ADD_POST, 
   postText:postText
  } 
}
export default postsReducer