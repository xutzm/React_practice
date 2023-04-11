import React, { useContext } from "react"
import { ContextAlert } from "./Contex"

export default function Contex_alert(){
let alert = useContext(ContextAlert)
    return (
        <div>
            {alert&&<p>АЛЕРТ</p>}
        </div>
    )
}