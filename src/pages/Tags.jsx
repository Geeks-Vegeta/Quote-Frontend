import React from "react";
import { useParams } from "react-router-dom";

const Tags=()=>{
    const {name} = useParams();
    return(
        <>
        <h4>{name}</h4>
        </>
    )
}

export default Tags;