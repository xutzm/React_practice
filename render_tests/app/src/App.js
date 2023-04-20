import logo from './logo.svg';
import './App.css';

import {useEffect,useRef,useState} from 'react'




function App() {
// const testState = useRef(0)
const [testState,setTestState]=useState(0)

useEffect(()=>{

  // if (testState.current===0){
  if (testState===0){
    console.log('Initial useEffect [testState]')
}else{
  console.log(testState)
  // testState.current++
  // console.log(testState.current)
console.log('useEffect [testState]')
}
},[testState])


  return (
    <div className="App">
      <header className="App-header">
      {testState}
      {/* {testState.current} */}
        <img src={logo} className="App-logo" alt="logo" />
{/* <button onClick={()=>testState.current++}>set</button> */}
<button onClick={()=>setTestState(testState+1)}>set</button>
      </header>
    </div>
  );
}

export default App;
