
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";


import Post from './components/Post';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Post text="Test"/>
    </div>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    </BrowserRouter>
  );
}

export default App;
