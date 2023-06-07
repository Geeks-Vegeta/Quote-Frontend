import React, { useState } from "react";
import {
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

            await axios.post("https://quoteapi-q48j.onrender.com/register",{
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
        <div className="cards-register mx-auto p-4">
           
                <MDBInput value={name} onChange={(e)=>setName(e.target.value)} className="my-4"  label='UserName' id='typetext' type='text' />
                <MDBInput value={email} onChange={(e)=>setEmail(e.target.value)} className="my-4"  label='Email' id='typeEmail' type='email' />
                <MDBInput value={password} onChange={(e)=>setPassword(e.target.value)} className="my-4" label='Password' id='typePassword' type='password' />
                <div className="text-center">
                <MDBBtn className="w-75" onClick={createUser}>Register</MDBBtn>
                </div>
            
        </div>
        <div className="card-signin my-4">
            <div className="text-center mx-auto w-75">
                    <span className="p-1 text-secondary">Already have an account ? <NavLink to="/login">
                            Login
                        </NavLink>
                        </span>
            </div>
        </div>

        </>
    )
}

export default Register;