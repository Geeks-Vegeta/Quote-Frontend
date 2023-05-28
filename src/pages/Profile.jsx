import axios from "axios";
import React, {useState, useEffect} from "react";
import "./styles/profile.css";
import { FiEdit2 , FiMoreHorizontal} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Profile=()=>{

    const [userData, setUserData]=useState([]);

    useEffect(()=>{
        let token=localStorage.getItem('isauthtoken');
        const getUserProfile=async()=>{
            let {data}=await axios.get("https://quoteapi-q48j.onrender.com/user/currentuser",{
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }})
            setUserData(data);
        }
        getUserProfile();
    },[])



    return (
        <>
        <div className="scroller">

        <div className="background-image">
            <img src={userData.background_image} height="300" width="568" alt="" />
        </div>
        <div className="shift-profileinfo">
            <img className="profile-pic ms-auto" src={userData.profile_pic} alt="" />
            <div className="profile-info">
                <p>@{userData.username}</p>
                <div className="icons">
                <NavLink className="mx-2"  to="/editprofile">
                    <FiEdit2 />
                </NavLink>
                <NavLink className="mx-2"  to="/more">
                    <FiMoreHorizontal />
                </NavLink>
                </div>
            </div>
            <div className="follwing-follow">
                <span className="mx-2">{userData.followers?userData.followers.length:0} Followers</span>
                <span className="mx-2">{userData.following?userData.followers.length:0} Following</span>
            </div>
        </div>
        </div>

        </>
    )
}

export default Profile;