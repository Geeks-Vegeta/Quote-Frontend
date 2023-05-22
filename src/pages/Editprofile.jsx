import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';
  import { BsLink45Deg } from "react-icons/bs";
  import { AiFillLinkedin, 
    AiFillTwitterCircle,
    AiFillGithub,
    AiFillInstagram, 
    AiFillFacebook } from "react-icons/ai";
import "./styles/editprofile.css";
import { IoIosArrowRoundBack } from "react-icons/io";
const EditProfile=()=>{
    return (
        <>
        <p style={{cursor:"pointer"}}><IoIosArrowRoundBack size="40"/> Back</p>
        <div className="profile_pic_information">
            <MDBCard className="shadow-lg my-3 mx-auto w-75">
                <MDBCardBody>
                    <MDBCardTitle className="text-muted">profile</MDBCardTitle>
                    {/* background image, profile pic */}
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
                            <span>username</span>
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
        
        </>
    )
}

export default EditProfile;