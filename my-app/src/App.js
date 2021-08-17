
import './App.css';

import Header from './components/Header';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Header/>
      <Post text="Test"/>
    </div>
  );
}

export default App;
