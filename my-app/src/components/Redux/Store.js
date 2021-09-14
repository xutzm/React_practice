import {combineReducers, createStore} from "redux";
import postsReducer from './PostsReducer'



let redusers = combineReducers({
    postsPage:postsReducer,
});

let store = createStore(redusers);

export default store;