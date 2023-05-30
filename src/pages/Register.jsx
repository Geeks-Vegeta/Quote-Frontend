import React, { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Register=()=>{

    const [name, setName]=useState();
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const navigate=useNavigate()


    const createUser=async()=>{
        try {

            let {data}=await axios.post("https://quoteapi-q48j.onrender.com/register",{
            "username":name,
            "email":email,
            "password":password
        })
        navigate("/login");
            
        } catch (error) {
            console.log(error);
            
        }
    }

       

    return (
        <>
        <div>
            <center>
                <img  className="quotes-logo mx-auto" alt="sdf" src={process.env.PUBLIC_URL+"quote.png"} />
            </center>
        </div>
        <h3 className="text-center">Sign Up New Account</h3>
        <div className="cards-Login">
            <MDBCard className="shadow-lg w-75 mx-auto">
            <MDBCardBody>
                <MDBCardTitle className="text-secondary">Sign Up</MDBCardTitle>
                <MDBInput value={name} onChange={(e)=>setName(e.target.value)} className="my-4"  label='UserName' id='typetext' type='text' />
                <MDBInput value={email} onChange={(e)=>setEmail(e.target.value)} className="my-4"  label='Email' id='typeEmail' type='email' />
                <MDBInput value={password} onChange={(e)=>setPassword(e.target.value)} className="my-4" label='Password' id='typePassword' type='password' />
                <div className="text-center">
                <MDBBtn className="w-75" onClick={createUser}>Register</MDBBtn>

                </div>
            </MDBCardBody>
            </MDBCard>
        </div>
        <div className="card-signin shadow-lg my-4">
            <MDBCard className="text-center mx-auto w-75">
                    <span className="p-1 text-secondary">Already have an account ? <NavLink to="/login">
                            Login
                        </NavLink>
                        </span>
            </MDBCard>
        </div>

        </>
    )
}

export default Register;