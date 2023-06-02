import React from "react";
import QuoteCard from "../components/QuoteCard";

const Home=()=>{
    return (
        <>
        <div className="top-heading shadow-lg">
            <h4>Home</h4>
        </div>
        <div className="quote-cards">
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
            <QuoteCard/>
        </div>

        </>
    )
}

export default Home;