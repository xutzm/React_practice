
import './App.css';

import {BrowserRouter,Route} from "react-router-dom";

//struct
import Header from './components/Header/Header';



//pages
import IndexPage from './components/IndexPage';
import InputTextPage from './components/InputTextPage';



function App() {



  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
    </div>
    <Route path="/IndexPage" component={IndexPage}/>
    <Route path="/InputTextPage" component={InputTextPage}/>
    </BrowserRouter>
  );
}

export default App;
