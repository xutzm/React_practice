const ADD_POST = "ADD-POST";

let initialState = {
    postsArr : [
            {text:'test11111',postId:'1'},
            {text:'test2221',postId:'2'},
            {text:'test3331',postId:'3'}
          ]
  };


const postsReducer = (state=initialState,action) => {
switch(action.type){
  case ADD_POST:
    let newPost = {
      text:action.postText,
      postId:'4'
    };
    state.postsArr.push(newPost);
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