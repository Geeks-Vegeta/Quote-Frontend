import React from "react";
import { MDBSpinner } from "mdb-react-ui-kit";

const LoadingComponent=()=>{
    return (
        <>
        <div className="loading_component">
            <div className='d-flex justify-content-center'>
                <MDBSpinner role='status'>
                    <span className='visually-hidden'>Loading...</span>
                </MDBSpinner>
            </div>
        </div>
        </>
    )
}

export default LoadingComponent;