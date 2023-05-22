
import React, {useContext, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Profile from "../pages/Profile";
import Notification from "../pages/Notification";
import More from "../pages/More";
import Explore from "../pages/Explore";
import List from "../pages/List";
import Bookmark from "../pages/Bookmark";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { LoginContext } from "../App";
import EditProfile from "../pages/Editprofile";

const Nav=()=>{
    const {state, dispatch} = useContext(LoginContext);

    useEffect(()=>{

        const setLoginSession = async()=>{
            let auth =localStorage.getItem('isauthtoken');
            if(auth && auth.length!==0){
                dispatch({type:"isLogin", payload:true})
            }
            else{
                dispatch({type:"isLogin", payload:false})
            }
        }
        setLoginSession();

    },[dispatch])
    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/explore" element={<Explore/>}/>
                {state?(
                    <>
                        <Route exact path="/more" element={<More/>}/>
                        <Route exact path="/notification" element={<Notification/>}/>
                        <Route exact path="/profile" element={<Profile/>}/>
                        <Route exact path="/bookmark" element={<Bookmark/>}/>
                        <Route exact path="/list" element={<List/>}/>
                        <Route exact path="/editprofile" element={<EditProfile/>}/>

                    </>
                ):(
                    <>
                        <Route exact path="/login" element={<Login/>}/>
                        <Route exact path="/register" element={<Register/>}/>
                    </>
                )}
               
               
                
                <Route exact path="*" element={<Error/>}/>
            </Routes>
        </>
    )
}

export default Nav;