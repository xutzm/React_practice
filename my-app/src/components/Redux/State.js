import {rerenderAll} from '../../Rerender'
let State = {
paramArr : [
        {text:'test11111',postId:'1'},
        {text:'test2221',postId:'2'},
        {text:'test3331',postId:'3'}
      ]
}

export let addPost = (postMessage) =>{
  let newPost = {
    text:postMessage,
    postId:'4'
  };
  State.paramArr.push(newPost);
  rerenderAll(State);
  // let postText = postTextEl.current.value;
  // alert(postText);
}

export default State;