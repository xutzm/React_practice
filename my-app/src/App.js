
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";



import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
    </div>
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
    <Route exact path="/posts" component={Posts}/>
    </BrowserRouter>
  );
}

export default App;
