import React, { useEffect,useRef, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn
  } from 'mdb-react-ui-kit';
  import { BsLink45Deg } from "react-icons/bs";
  import { AiFillLinkedin, 
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram, 
    AiFillFacebook } from "react-icons/ai";
import "./styles/editprofile.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const EditProfile=()=>{
    const navigate = useNavigate();
    const inputFileProfile = useRef(null);
    const inputFileBackground= useRef(null);

    const [username, setName] = useState();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [location, setLocation] = useState();
    const [education, setEducation] = useState();
    const [mobile, setMobile] = useState();
    const [bio, setBio] = useState();
    const [instagram, setInstagram] = useState();
    const [twitter, setTwitter] = useState();
    const [linkedIn, setLinkedIn] = useState();
    const [facebook, setFacebook] = useState();
    const [profilepic, setProfilePic] = useState();
    const [profileFile, setProfileFile] = useState();
    const [backgroundFile, setBackGroundFile] = useState();
    const [background, setBackGround] = useState();
    const [github, setGithub]=useState();
    const [showprobtn, setProbtn]=useState(true);
    const [showback, setBack]=useState(true);



    const url = 'https://api.cloudinary.com/v1_1/getcomix/image/upload';
    const preset = 'ctxzrf47';
    

    useEffect(()=>{
        let token=localStorage.getItem('isauthtoken');
        const getUserProfile=async()=>{
            let {data}=await axios.get("https://quoteapi-q48j.onrender.com/user/currentuser",{
            headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }})
            setName(data.username);
            setEmail(data.email);
            setGender(data.gender);
            setLocation(data.location);
            setEducation(data.education);
            setMobile(data.mobile_number);
            setBio(data.bio);
            setProfilePic(data.profile_pic);
            setBackGround(data.background_image)
            setInstagram(data.instagram_link);
            setTwitter(data.twitter_link);
            setGithub(data.github_link);
            setLinkedIn(data.linkedIn_link);
            setFacebook(data.facebook_link);
            setLoading(false);
        }
        getUserProfile();

    },[])


    const uploadProfilePic = async()=>{
        let token=localStorage.getItem('isauthtoken');

        const formdata=new FormData();
        formdata.append('file', profileFile);
        formdata.append('upload_preset', preset);


        const res = await axios.post(url, formdata);

        const article_img = res.data.secure_url;

        await axios.put(`https://quoteapi-q48j.onrender.com/user/updateprofile`,{
            profile_pic:article_img 
        }, {headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }});
        navigate("/profile");
        setProbtn(true);

    }


        // upload background pic
        const uploadBackgroundPic = async()=>{
            let token=localStorage.getItem('isauthtoken');

            const formdata=new FormData();
            formdata.append('file', backgroundFile);
            formdata.append('upload_preset', "mqz1xp2p");
    
    
            const res = await axios.post(url, formdata);
    
            const article_img = res.data.secure_url;
    
            await axios.put(`https://quoteapi-q48j.onrender.com/user/updateprofile`,{
                background_image:article_img 
            },{headers: {
                Authorization: 'Bearer ' + token //the token is a variable which holds the token
              }});
            navigate("/profile");
        }

    const ProfileInput=(e)=>{
        setProbtn(false);
        setProfileFile(e.target.files[0]);
        setProfilePic(URL.createObjectURL(e.target.files[0]))

    }

       
    const BackgroundInput=(e)=>{
        setBack(false);
        setBackGroundFile(e.target.files[0]);
        setBackGround(URL.createObjectURL(e.target.files[0]));


    }

    const updateProfile=async(e)=>{
        e.preventDefault();
        let token=localStorage.getItem('isauthtoken');

        try {

            await axios.put("https://quoteapi-q48j.onrender.com/user/updateprofile",{
                username:username,
                location:location,
                education:education,
                bio:bio,
                instagram_link:instagram,
                twitter_link:twitter,
                linkedIn_link:linkedIn,
                facebook_link:facebook,
                github_link:github,
                gender:gender,
                mobile_number:mobile
            },{
                headers: {
                    Authorization: 'Bearer ' + token //the token is a variable which holds the token
            }});
            navigate("/profile");
            
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
        <p style={{cursor:"pointer"}} className="top-heading" onClick={()=>navigate(-1)}><IoIosArrowRoundBack size="20"/> back</p>
        <input type='file' id='file' ref={inputFileProfile} style={{display: 'none'}}  accept="image/png, image/gif, image/jpeg" onChange={ProfileInput}/>
        <input type='file' id='file' ref={inputFileBackground} style={{display: 'none'}}  accept="image/png, image/gif, image/jpeg" onChange={BackgroundInput}/>

        <div className="profile_pic_information">
            <MDBCard className="shadow-lg my-3 mx-auto show-width">
                <MDBCardBody>
                    <MDBCardTitle className="text-muted">profile</MDBCardTitle>
                   
                    <div className="background-image">
                    <img onClick={()=>inputFileBackground.current.click()} className="my-3" src={background?background:process.env.PUBLIC_URL+"background.jpg"} width="400" height="200" alt="background-image" />
                    </div>
                    <div className="profile-picture">
                        <img onClick={()=>inputFileProfile.current.click()} 
                        style={{borderRadius:"50%"}} className="my-3 shadow-lg" 
                        src={profilepic?profilepic:process.env.PUBLIC_URL+"profile.jpg"} 
                        width="100" height="100" alt="profile-pic" />
                    </div>
                    <div className="button mt-5">
                        <MDBBtn className="mx-1" onClick={uploadProfilePic}
                         disabled={showprobtn}>update profile</MDBBtn>
                        <MDBBtn className="mx-1" onClick={uploadBackgroundPic} disabled={showback}>update background</MDBBtn>

                    </div>
                    
                </MDBCardBody>
            </MDBCard>
        </div>
        <div className="basic_information">
            <MDBCard className="shadow-lg my-3 mx-auto show-width">
                <MDBCardBody>
                    <MDBCardTitle >Basic info</MDBCardTitle>
                    {/* username, education, bio, gender, mobile number, location */}
                    <ul className="basic-ul">
                        <li>
                            <span>Name</span>
                            <input 
                            value={username} 
                            onChange={(e)=>setName(e.target.value)} 
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span>Education</span>
                            <input type="text"
                            value={education} 
                            onChange={(e)=>setEducation(e.target.value)}
                            name=""
                            id="" />
                        </li>
                        <li>
                            <span>Bio</span>
                            <input 
                            value={bio}
                            onChange={(e)=>setBio(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span>Gender</span>
                            <input 
                            value={gender}
                            onChange={(e)=>setGender(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span>Mobile Number</span>
                            <input 
                            value={mobile}
                            onChange={(e)=>setMobile(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span>Location</span>
                            <input 
                            value={location}
                            onChange={(e)=>setLocation(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div className="website_links">
            <MDBCard className="shadow-lg my-3 mx-auto show-width">
                <MDBCardBody>
                    <MDBCardTitle className="text-muted"><BsLink45Deg size="30"/> Links</MDBCardTitle>
                    {/* twitter, instagram, github, linkedin, facebook */}
                    <ul className="basic-ul">
                        <li>
                            <span><AiFillTwitterCircle/> Twitter</span>
                            <input 
                            value={twitter}
                            onChange={(e)=>setTwitter(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span><AiFillInstagram/> Instagram</span>
                            <input 
                            value={instagram}
                            onChange={(e)=>setInstagram(e.target.value)}
                            type="text"
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span><AiFillGithub/> Github</span>
                            <input 
                            value={github}
                            onChange={(e)=>setGithub(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span> <AiFillLinkedin/> LinkedIn</span>
                            <input 
                            value={linkedIn}
                            onChange={(e)=>setLinkedIn(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                        <li>
                            <span><AiFillFacebook/> Facebook</span>
                            <input 
                            value={facebook}
                            onChange={(e)=>setFacebook(e.target.value)}
                            type="text" 
                            name="" 
                            id="" />
                        </li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div className="button-save my-4 text-center">
            <MDBBtn onClick={updateProfile} className="w-50">Save</MDBBtn>
        </div>
        
        </>
    )
}

export default EditProfile;