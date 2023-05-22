import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';

import { NavLink } from "react-router-dom";

const Register=()=>{
    return (
        <>
        <div>
            <center>
                <img  className="quotes-logo mx-auto" alt="sdf" src={process.env.PUBLIC_URL+"quote.png"} />
            </center>
        </div>
        <h3 className="text-center">Sign Up New Account</h3>
        <div className="cards-Login">
            <MDBCard className="shadow-lg">
            <MDBCardBody>
                <MDBCardTitle>Sign Up</MDBCardTitle>
                <MDBInput className="my-4"  label='UserName' id='typetext' type='text' />
                <MDBInput className="my-4"  label='Email' id='typeEmail' type='email' />
                <MDBInput className="my-4" label='Password' id='typePassword' type='password' />
                <MDBInput className="my-4" label='Confirm Password' id='typePassword' type='password' />

                <div className="text-center">
                <MDBBtn className="w-75">Register</MDBBtn>

                </div>
            </MDBCardBody>
            </MDBCard>
        </div>
        <div className="card-signin shadow-lg my-4">
            <MDBCard className="text-center">
                    <span className="p-1">Already have an account ? <NavLink to="/login">
                            Login
                        </NavLink>
                        </span>
            </MDBCard>
        </div>

        </>
    )
}

export default Register;