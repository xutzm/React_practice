
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";



import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Posts from './components/Posts';

function App(props) {



  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
    </div>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route exact path="/posts" render={()=><Posts postsArr={props.postsArr} dispatch={props.dispatch}/>}/>
    </BrowserRouter>
  );
}

export default App;
