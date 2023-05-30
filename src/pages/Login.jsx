import React, { useContext, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBBtn,
    MDBInput

  } from 'mdb-react-ui-kit';
import { LoginContext } from "../App";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login=()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const {dispatch}=useContext(LoginContext)
    let navigate=useNavigate();

    const userLogin=async(e)=>{
        e.preventDefault();
        try {
            let userdata=await axios.post("https://quoteapi-q48j.onrender.com/userlogin",{
                "email":email,
                "password":password
            });
            toast('Login Successfully', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            
            localStorage.setItem('isauthtoken', userdata.data);
            dispatch({type:"isLogin", payload:true});
            navigate("/")
        } catch (error) {
            if(error.response.status==='401'){
                toast('UnAuthorised User', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                setEmail("");
                setPassword("");

            }
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
            <MDBCard className="shadow-lg text-dark mx-auto w-75">
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
        <div className=".bg-light shadow-lg my-4">
            <MDBCard className="text-center mx-auto w-75">

                    <MDBCardText className="p-1 text-li">New to Quoteser ? <NavLink to="/register">Sign up</NavLink>
                        
                    </MDBCardText>

            </MDBCard>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Login;