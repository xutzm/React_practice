import {combineReducers, createStore} from "redux";
import postsReducer from './PostsReducer'



let redusers = combineReducers({
    postsArr:postsReducer,
});

let store = createStore(redusers);

export default store;