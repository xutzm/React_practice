import React, { createContext } from "react"

export default function Contex_button({SetContext}){

    return (
        <div>
            <button onClick={SetContext}>Нажать!</button>
        </div>
    )
}