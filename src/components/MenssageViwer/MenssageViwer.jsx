import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import perfilBob from "../../assets/bob.jpg"
import perfilJake from "../../assets/jake.jpg"
import { getMenssage } from "../../firestore/menssages/functions";

import Menssage from "./Menssage/Menssage";

export default props=>{
    const [menssageViwerContent,setMenssageViwerContent] = useState()
    const [lastMenssages,setLastMenssages] = useState()
    const {newMenssage, setNewMenssage, roomName }= props
    const menssages = item =><Menssage user={item.user} perfil={perfilJake} content={item.content}/>

    function receivedMenssage(){
        console.log(roomName)
        const itens = getMenssage(roomName)
        itens.then( res=>
            res.docs.forEach(doc=>{
                const content = menssages(doc.data())
                setLastMenssages(menssageViwerContent)
                setMenssageViwerContent(content)
            }
            
            )
        )
        .catch(e=>console.log(e))
       
    }
    
    useEffect(()=>{
        if(newMenssage == true){
            receivedMenssage()
            setNewMenssage(false)
        }
    },[newMenssage])
    
    return(
        <div className={` w-full h-3/4 p-10 
        flex flex-col justify-around  border-r-4 border-l-4 border-yellow-600`}>
            {lastMenssages}
            {menssageViwerContent}
        </div>
    )
}