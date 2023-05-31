import React from "react";
import QuoteCard from "../components/QuoteCard";

const Home=()=>{
    return (
        <>
        <div className="top-heading shadow-lg">
            <h3>Home</h3>
        </div>
        <div className="quote-cards my-3">
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
        </div>

        </>
    )
}

export default Home;