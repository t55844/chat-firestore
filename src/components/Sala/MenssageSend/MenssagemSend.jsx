import React from "react";
import { useState } from "react";
import { setMenssageToFirestore } from "../../../firestore/menssages/functions";


export default props=>{
    const [menssageInput,setMenssageInput] = useState("")
    const [idMenssagem,setIdMenssage] = useState(1)
    const room = props.roomName
    const newMenssage = props.setNewMenssage
    function setMenssageToStorage(){
        const menssage = {
            id:idMenssagem,
            content:menssageInput,
            user:'bob'
        }
        setMenssageToFirestore(room,menssage)
        setIdMenssage(idMenssagem +1)
        setMenssageInput('')
        newMenssage(true)

    }
    return(
        <div className="w-full p-4 flex justify-between bg-yellow-100 rounded-b-xl  border-r-4 border-l-4 border-b-4 border-yellow-600">
        <input className="w-3/4 m-2 rounded-lg bg-yellow-400 p-1 hover:border-yellow-700 hover:border-2" type="text"
        value={menssageInput} onChange={(e)=>setMenssageInput(e.target.value)} />
        <button className="w-12 h-12 p-2 bg-yellow-700 rounded-full"
        onClick={()=>setMenssageToStorage()}>envia</button>
    </div>
    )
}