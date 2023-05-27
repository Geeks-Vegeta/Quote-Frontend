import React, { useContext, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';
import { LoginContext } from "../App";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const Login=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const {dispatch}=useContext(LoginContext)
    let navigate=useNavigate();

    const userLogin=async(e)=>{
        e.preventDefault();
        try {
            let {data}=await axios.post("https://quoteapi-q48j.onrender.com/userlogin",{
                "email":email,
                "password":password
            })
            localStorage.setItem('isauthtoken', data);
            dispatch({type:"isLogin", payload:true});
            navigate("/")
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <>
        <div>
            <center>
                <img  className="quotes-logo mx-auto" src={process.env.PUBLIC_URL+"quote.png"} />
            </center>
        </div>
        <h3 className="text-center">Login To your Account</h3>
        <div className="cards-Login text-center">
            <MDBCard className="shadow-lg bg-secondary mx-auto w-75">
            <MDBCardBody>
                <MDBCardTitle>Login</MDBCardTitle>
                <form onSubmit={userLogin}>
                    <MDBInput className="my-4" value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    label='Email' id='typeEmail' 
                    type='email' 
                    required={true}
                    />
                    <MDBInput className="my-4" value={password} 
                    onChange={(e)=>setPassword(e.target.value)}
                    label='Password' 
                    id='typePassword' 
                    type='password' 
                    required={true}
                    />
                    <div className="text-center">
                        <MDBBtn type="submit" className="w-75">Login</MDBBtn>
                    </div>
                </form>

            </MDBCardBody>
            </MDBCard>
        </div>
        <div className="card-signin shadow-lg my-4">
            <MDBCard className="text-center bg-secondary mx-auto w-75">
                    <p className="p-1">New to Quoteser ? 
                        <NavLink to="/register">
                            Sign up
                        </NavLink>
                    </p>
            </MDBCard>
        </div>

        </>
    )
}

export default Login;