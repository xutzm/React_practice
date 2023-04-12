import React, { useState } from 'react'


    function useInput(defaultValue){
        const [value,setValue]=useState(defaultValue)

        // const OnChangeInput = (event)=>{
        //     const newValue = event.target.value
        //     setValue(newValue)
        // }

            const onChange = (event)=>{
            const newValue = event.target.value
            setValue(newValue)
        }
        return {value,onChange}
    }

export default function(){
    const InputOneOptions = useInput('')
    return (
        <div>
            <h1>MYHooks</h1>
            {InputOneOptions.value}
            {/* <input type='text' value = {InputOneOptions.value} onChange={InputOneOptions.OnChange} /> */}
            <input type='text' {...InputOneOptions} />
        </div>
    )
}