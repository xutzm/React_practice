
import {useEffect, useState,useRef,useMemo} from 'react'

export default function Componento({generateArray}) {

  const [check,setCheck]=useState(false)
  const [arr,setArr]=useState([])
  const useEffectCountComp = useRef(0)
const checkGo = ()=>{
  setCheck(!check)
}

useEffect(()=>{
  console.log('componento useEffect')
  useEffectCountComp.current++
  let newarr= generateArray()

  setArr(newarr)
},[generateArray])

// useEffect(()=>{
//   console.log('componento useEffect')
//   let newarr= generateArray()

//   setArr(newarr)
// },[check])

  return(
    <div>
      <p>--------------</p>
      <p>
      Componento
      </p>
      <p>componento useEffect of generateArray: {useEffectCountComp.current}</p>
     <p>{arr}</p>
      <p>
        {/* {String(check)} */}
      </p>
      {/* <button onClick={checkGo}>start componento</button> */}
      <p>--------------</p>
    </div>
  )
}


