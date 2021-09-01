
import React from "react";

const About = () => {

  let inputEl = React.createRef();

  let SendInput = ()=>{
    let inputVal = inputEl.current.value;
    alert(inputVal);
  }

  return(
<div>
  <input type='text' ref={inputEl}></input>
  <button onClick={SendInput}>send</button>
<h1> ABOUT PAGE</h1>
</div>
  );
}
export default About;