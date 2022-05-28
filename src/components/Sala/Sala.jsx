import React from "react";


import HeaderRoom from "./HeaderRoom/HeaderRoom";
import MenssagemSend from "./MenssageSend/MenssagemSend";
import MenssageViwer from "../MenssageViwer/MenssageViwer";
import { useState } from "react";

export default props=>{
    const [newMenssage,setNewMenssage] = useState(false)
    return(
        <div className={`w-3/4 h-3/4 m-auto p-10
        flex flex-col items-center 
        `}>
            <HeaderRoom roomName={props.roomName}/>
            <MenssageViwer roomName={props.roomName} newMenssage={newMenssage} setNewMenssage={setNewMenssage}/>
            <MenssagemSend setNewMenssage={setNewMenssage} roomName={props.roomName}/>
        </div>
    )
}