import React, { useEffect, useContext } from "react";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";

const Logout=()=>{
    const {dispatch}=useContext(LoginContext);
    let navigate=useNavigate()

    useEffect(()=>{
        dispatch({type:"isLogin", payload:false})
        localStorage.removeItem('isauthtoken');
        navigate("/")
    },[dispatch,navigate])

    return (
        <>
        </>
    )
}

export default Logout;