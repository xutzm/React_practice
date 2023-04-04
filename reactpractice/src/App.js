import logo from './logo.svg';
import './App.css';
import {useEffect, useState,useRef} from 'react'

const getStartPoint = ()=>{
  console.log('getStartPoint')
  return 0
}

function App() {
  console.log('App')
  // const point = useState(0)
  // console.log(point)
  const [type,setType] = useState('user')
  const [obj,setObj] = useState({name:'ivan',age:30})
  const [coordinate,setCoordinate] = useState({x:0,y:0})
  const [removeCoordinateLis,setRemoveCoordinateLis]=useState(false)
  const [text2,setText2]=useState('')

  const [point,setPoint] = useState(()=>getStartPoint()) // <--- ONCE 
  // const [point,setPoint] = useState(getStartPoint()) // <--- every render start (setPoint)
  // const [point,setPoint] = useState(0)

  const changeCount = useRef(0)
  const renderCount = useRef(0)
  const inputForm = useRef(null)
  const prevStateText2 = useRef('')

  const mouseCoordinateHandler = (event)=>{
    setCoordinate({
      x:event.clientX,
      y:event.clientY
    })
  }

useEffect(()=>{
  console.log('render')
  renderCount.current++
})


useEffect(()=>{
  console.log('type_change')
},[type])


useEffect(()=>{
  console.log('set CoordinateLis start')
  window.addEventListener('mousemove',mouseCoordinateHandler)

  return ()=>{
    console.log('removeCoordinateLis remove []')
    window.removeEventListener('mousemove',mouseCoordinateHandler)
  }
},[])

useEffect(()=>{
  console.log('removeCoordinateLis start')
  return ()=>{
    console.log('removeCoordinateLis remove [removeCoordinateLis]')
    window.removeEventListener('mousemove',mouseCoordinateHandler)
  }
},[removeCoordinateLis])


useEffect(()=>{
  prevStateText2.current = text2
},[text2])

const setPointUp = ()=>{
  // setPoint((prevPoint)=>{
  //   return prevPoint+1
  // })
  setPoint(prevPoint=>prevPoint+1)
  setPoint(prevPoint=>prevPoint+1)
}

const setObjfunc = ()=>{  // <--non change all obj, only 'name'
  setObj((prev=>{
    return {
      ...prev,
      name:'petr'
    }
  }))

  return ()=>{
    console.log('removeCoordinateLis remove')
    window.removeEventListener('mousemove',mouseCoordinateHandler)
  }
}

const formClick = (e)=>{
 console.log(e)
 console.log(e.target)
 console.log(e.target.value)
 console.log(e.currentTarget)

}
const inputChange = (e)=>{
changeCount.current++ //нужен перерендер для отображения, не вызывает рендер при изменении
console.log('form input is ',inputForm.current.value)
}

const focusFunc = ()=>{
  inputForm.current.focus()
}

const inputText2Change = (e)=>{
  setText2(e.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
<p>{point}</p>
<button onClick={setPointUp}>SetUp</button>

<p>{JSON.stringify(obj)}</p>
<button onClick={setObjfunc}>SetObj</button>
          {type}
          <button onClick={()=>setType('admin')}>setType</button>

    <p>
      {JSON.stringify(coordinate)}
    </p>
    <button onClick={()=>setRemoveCoordinateLis(true)}>remove</button>
    
    <p>Рендеров: {renderCount.current}</p>
    <p>Изменений поля: {changeCount.current}</p>
   
    <form onClick={(e)=>formClick(e)}>
      <input ref={inputForm} type='text' onChange={(e)=>inputChange(e)}></input>
      <input type='submit'></input>
    </form>
    <button onClick={focusFunc}>Forcus input text</button>
    
    <p>____</p>
    <p>text2 текущее состояние: {text2}</p>
    <p>text2 Прошлое состояние: {prevStateText2.current}</p>
    text2<input type='text' onChange={(e)=>inputText2Change(e)}></input>
    </header>
    </div>

  );
}

export default App;
