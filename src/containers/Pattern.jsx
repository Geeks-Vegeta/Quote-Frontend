import React from "react";
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import "./pattern.css";
import Nav from "../components/Nav";
import SideLinks from "../components/SideLinks";
import SearchBar from "../components/SearchBar";


const Pattern=()=>{
    
    return (
        <>
        <MDBContainer>
            <MDBRow>
                <MDBCol lg='3'>
                    <SideLinks/>
                </MDBCol>
                <MDBCol lg='6' className="border-left-right p-0 m-0">

                   <Nav/>

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