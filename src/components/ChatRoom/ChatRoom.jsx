import React from "react";
import { getMenssages } from "../../firestore/config";
import Sala from "../Sala/Sala";

export default props =>{

    return(
        <div className="bg-yellow-200 w-screen h-screen flex flex-wrap">
            <Sala roomName="taxistas"/>
            <Sala roomName="planctons"/>
        </div>
    )
}