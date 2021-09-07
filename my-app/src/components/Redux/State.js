let store = {
  _State : {
    paramArr : [
            {text:'test11111',postId:'1'},
            {text:'test2221',postId:'2'},
            {text:'test3331',postId:'3'}
          ]
    },
    getState(){
      return this._State;
    },
    rerenderAll(){
    },
    addPost(postMessage){
      let newPost = {
        text:postMessage,
        postId:'4'
      };
      this._State.paramArr.push(newPost);
      this.rerenderAll(this._State);
      // let postText = postTextEl.current.value;
      // alert(postText);
    },
    subscribe(observer){
      this.rerenderAll=observer;
    },

    
    
}





export default store;