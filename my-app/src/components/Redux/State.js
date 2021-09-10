import postsReducer from './PostsReducer'
let store = {
  _State : {
    postsArr : [
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

    subscribe(observer){
      this.rerenderAll=observer;
    },

    dispatch(action){
      this._State.postsArr=postsReducer(this._State.postsArr,action);
      // this._State.postsArr=postsReducer(this._State.postsArr,action);
      // this._State.postsArr=postsReducer(this._State.postsArr,action);
      //редьюсеры


        this.rerenderAll(this._State);
    }
    
}





export default store;