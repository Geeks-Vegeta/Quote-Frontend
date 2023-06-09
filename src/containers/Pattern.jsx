import React from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import "./pattern.css";
import Nav from "../components/Nav";
import SideLinks from "../components/SideLinks";
import SearchBar from "../components/SearchBar";
import { ToastContainer } from 'react-toastify';



const Pattern=()=>{
    
    return (
        <>
        <MDBContainer>
            <MDBRow>
                <MDBCol lg='3'>
                    <SideLinks/>
                </MDBCol>
                <MDBCol lg='6' className="border-left-right m-0 p-0">

                   <Nav/>
                   <ToastContainer/>


                </MDBCol>
                <MDBCol lg='3' className="my-3">
                    <SearchBar/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

        </>
    )
}

export default Pattern;