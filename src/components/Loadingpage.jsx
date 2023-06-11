import React from "react";

const LoadingPage=()=>{
    return (
        <>
            <div className="quotes-logo-loading">
                    <img  className="loading-image mx-auto" src={process.env.PUBLIC_URL+"quote.png"} />
            </div>
        </>
    )
}

export default LoadingPage;