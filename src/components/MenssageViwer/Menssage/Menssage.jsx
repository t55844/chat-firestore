import React from "react";

export default props=>{
    return(
        <div className="bg-yellow-400 m-1 rounded-xl">
            <div className="flex items-center">
                <img className="object-cover w-14 h-14 rounded-full mr-4" src={props.perfil} alt="foto perfil jake" />
                <p>{props.user}</p>
            </div>
            <p className="text-yellow-700 p-2">{props.content}</p>
        </div>
    )
}