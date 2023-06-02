import React from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
  } from 'mdb-react-ui-kit';
const More=()=>{
    return (
        <>
        <h4 className="top-heading shadow-lg">More</h4>

        <div className="change-password">
            <MDBCard className="shadow-lg my-3 mx-auto show-width">
                    <MDBCardBody>
                        <MDBCardTitle className="text-muted">change password</MDBCardTitle>
                        
                    </MDBCardBody>
            </MDBCard>
        </div>
        <div className="delete-user">
        <MDBCard className="shadow-lg my-3 mx-auto show-width">
                    <MDBCardBody>
                        <MDBCardTitle className="text-muted">delete user</MDBCardTitle>
                        
                    </MDBCardBody>
            </MDBCard>
        </div>
        
        </>
    )
}

export default More;