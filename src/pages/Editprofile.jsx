import React from "react";
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


const EditProfile=()=>{
    const navigate = useNavigate();
    return (
        <>
        <p style={{cursor:"pointer"}} className="text-sm  top-heading" onClick={()=>navigate(-1)}><IoIosArrowRoundBack size="20"/> back</p>
        <div className="profile_pic_information">
            <MDBCard className="shadow-lg my-3 mx-auto show-width">
                <MDBCardBody>
                    <MDBCardTitle className="text-muted">profile</MDBCardTitle>
                   
                    <div className="background-image">
                    <img onClick={()=>alert("back")} className="my-3" src={process.env.PUBLIC_URL+"background.jpg"} width="300" height="200" alt="background-image" />
                    </div>
                    <div className="profile-picture">
                        <img onClick={()=>alert("profile")} style={{borderRadius:"50%"}} className="my-3 shadow-lg" src={process.env.PUBLIC_URL+"profile.jpg"} width="100" height="100" alt="profile-pic" />
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
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span>Education</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span>Bio</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span>Gender</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span>Mobile Number</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span>Location</span>
                            <input type="text" name="" id="" />
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
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span><AiFillInstagram/> Instagram</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span><AiFillGithub/> Github</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span> <AiFillLinkedin/> LinkedIn</span>
                            <input type="text" name="" id="" />
                        </li>
                        <li>
                            <span><AiFillFacebook/> Facebook</span>
                            <input type="text" name="" id="" />
                        </li>
                    </ul>
                </MDBCardBody>
            </MDBCard>
        </div>
        <div className="button-save my-4 text-center">
            <MDBBtn className="w-50">Save</MDBBtn>
        </div>
        
        </>
    )
}

export default EditProfile;