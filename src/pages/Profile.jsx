import axios from "axios";
import React, {useState, useEffect} from "react";
import "./styles/profile.css";
import { FiEdit2 , FiMoreHorizontal} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineGithub,AiFillLinkedin,AiFillTwitterCircle,AiFillInstagram } from "react-icons/ai";
import { BsFacebook,BsPeopleFill } from "react-icons/bs";
import {MdVerified, MdFormatQuote} from "react-icons/md";
import {HiSpeakerphone} from "react-icons/hi";
import LoadingComponent from "../components/LoadingComponent";
import { MDBTooltip } from "mdb-react-ui-kit";


const Profile=()=>{

    const [userData, setUserData]=useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        let token=localStorage.getItem('isauthtoken');
        setLoading(true)
        const getUserProfile=async()=>{
            let {data}=await axios.get("https://quoteapi-q48j.onrender.com/user/currentuser",{
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }})
            setUserData(data);
            setLoading(false);
        }
        getUserProfile();
    },[])



    return (
        <>

        {loading?(
            <>
                <LoadingComponent/>
            </>
        ):(
            <>
            

        <div className="background-image">
            <img src={userData.background_image} height="300" width="568" alt="" />
        </div>
        <div className="shift-profileinfo">
            <img className="profile-pic ms-auto" src={userData.profile_pic} alt="" />
            <div className="profile-info mt-4">
                <p>@{userData.username} <MdVerified color="blue"/> </p>
                <div className="icons">

                <MDBTooltip  tag='a'  title='edit'>
                    <NavLink className="mx-2" style={{ color: 'gray' }}  to="/editprofile">
                        <FiEdit2 />
                    </NavLink>
                    </MDBTooltip>
                <MDBTooltip  tag='a'  title='more'>

                    <NavLink className="mx-2" style={{ color: 'gray' }}  to="/more">
                        <FiMoreHorizontal />
                    </NavLink>
                </MDBTooltip>

                </div>
            </div>
            <div className="profile__info m-0">
                {userData.bio?(
                    <>
                    <span>{userData.bio}</span>
                    <br />
                    </>
                ):(
                    <>
                    </>
                )}
                {userData.location?(
                    <>
                        <span><HiLocationMarker/> {userData.location}</span>

                    </>
                ):(
                    <>
                    </>
                )}
            </div>
            <div className="social-links">
                    {userData.github_link?(
                        <>
                        <a href={userData.github_link}  rel="noreferrer" target="_blank">
                            <span><AiOutlineGithub color="black" size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.linkedIn_link?(
                        <>
                        <a href={userData.linkedIn_link} rel="noreferrer" target="_blank">
                            <span><AiFillLinkedin  color="black" size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.twitter_link?(
                        <>
                        <a href={userData.twitter_link} rel="noreferrer" target="_blank">
                            <span><AiFillTwitterCircle color="black" size={20}/></span>
                        </a>
                        </>
                    ):(
                        <>
                        </>
                    )}
                    {userData.instagram_link?(
                        <>
                        <a href={userData.instagram_link} rel="noreferrer" target="_blank">
                            <span><AiFillInstagram color="black" size={20}/></span>
                        </a>

                        </>
                    ):(
                        <>
                        </>
                    )}
                     {userData.facebook_link?(
                        <>
                        <a href={userData.facebook_link} rel="noreferrer" target="_blank">
                            <span><BsFacebook color="black" size={20}/></span>
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
            <hr />

        </div>
        <div className="promote-addprofile">
            <button className="promote"> <HiSpeakerphone/> Promote </button>
            <NavLink to="/addquote">
                <button className="create"> <MdFormatQuote/> Create </button>
            </NavLink>

        </div>


        </>
        )}

        </>
    )
}

export default Profile;