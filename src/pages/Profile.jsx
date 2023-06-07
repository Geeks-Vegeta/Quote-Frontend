import axios from "axios";
import React, {useState, useEffect} from "react";
import "./styles/profile.css";
import { FiEdit2 , FiMoreHorizontal} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import { BsFacebook,BsPeopleFill } from "react-icons/bs";

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
            <div className="profile__info m-0">
                <span>{userData.bio}</span>
                <br />
                <span><HiLocationMarker/> {userData.location}</span>
            </div>
            <div className="social-links">
                    {userData.github_link?(
                        <>
                        <a href={userData.github_link}  rel="noreferrer" target="_blank">
                            <span><AiOutlineGithub size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.linkedIn_link?(
                        <>
                        <a href={userData.linkedIn_link} rel="noreferrer" target="_blank">
                            <span><AiFillLinkedin size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.twitter_link?(
                        <>
                        <a href={userData.twitter_link} rel="noreferrer" target="_blank">
                            <span><AiFillTwitterCircle size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                    {userData.instagram_link?(
                        <>
                        <a href={userData.instagram_link} rel="noreferrer" target="_blank">
                            <span><AiFillInstagram size={20}/></span>
                        </a>

                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.facebook_link?(
                        <>
                        <a href={userData.facebook_link} rel="noreferrer" target="_blank">
                            <span><BsFacebook size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                    
            </div>
            <div className="follwing-follow my-1">
                <span><BsPeopleFill/></span>
                <span className="mx-2">{userData.followers?userData.followers.length:0} Followers</span>
                <span className="mx-2">{userData.following?userData.followers.length:0} Following</span>
            </div>

        </div>

        </>
    )
}

export default Profile;