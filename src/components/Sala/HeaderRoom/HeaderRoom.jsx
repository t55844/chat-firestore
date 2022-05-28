import React from "react";
import salaPhotoTaxistas from "../../../assets/taxiRebaixado.jpg"


export default props=>{
    return(
        <div className={`w-full h-24
            flex justify-between items-center
            bg-yellow-100 rounded-t-xl  border-r-4 border-l-4 border-t-4 border-yellow-600`}>
                <img className="object-cover w-16 h-16 rounded-full pl-1" src={salaPhotoTaxistas} alt="foto de perfil bob" />
                <h2 className={`w-2/4
                text-yellow-500 font-mono font-bold text-xl `}>{props.roomName}</h2>
            </div>
    )
}