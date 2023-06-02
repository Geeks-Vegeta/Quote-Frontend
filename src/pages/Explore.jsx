import React, { useEffect, useState } from "react";
import axios from "axios";

const Explore=()=>{

    const [recent, setRecent]=useState([]);
    useEffect(()=>{

        const getAllRecentPosts=async()=>{
            let {data}=await axios.get('https://quoteapi-q48j.onrender.com/quote/getAllRecentPosts');
            setRecent(data);
        }
        getAllRecentPosts();

    },[])



    return (
        <>
        <div className="top-heading shadow-lg">
            <h4>Explore</h4>
        </div>
        {recent.map((data, idx)=>{
            return (
                <>
                <p>{data.quote}</p>
                </>
            )
        })}

        </>
    )
}

export default Explore;