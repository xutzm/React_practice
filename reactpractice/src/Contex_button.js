import React, {  useContext } from "react"
import { ContextAlert } from "./Contex"

// export default function Contex_button({SetContext}){
export default function Contex_button(){
const useContextAlert = useContext(ContextAlert)

    return (
        <div>
            <button onClick={useContextAlert.SetContext}>Нажать!</button>
        </div>
    )
}