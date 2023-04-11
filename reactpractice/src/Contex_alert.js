import React, { useContext } from "react"
import { ContextAlert } from "./Contex"

export default function Contex_alert(){
let useContextAlert = useContext(ContextAlert)
    return (
        <div>
            {useContextAlert.alert&&<p>АЛЕРТ</p>}
        </div>
    )
}