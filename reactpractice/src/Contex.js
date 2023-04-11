import React, { useState } from "react"
import Contex_alert from "./Contex_alert"
import Contex_button from "./Contex_button"

export const ContextAlert = React.createContext()

export default function Contex(){
    let [alert,setAlert]=useState(false)
    const SetContext = ()=>{
        setAlert(!alert)
    }

    return (
        <ContextAlert.Provider value={alert}>
        <div>
            <h1>Контекст</h1>
            <Contex_alert/>
            <Contex_button SetContext={SetContext}/>
        </div>
        </ContextAlert.Provider>
    )
}