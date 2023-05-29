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
        <div className="p-2 mb-2 top-heading shadow-lg">
            <h3>Explore</h3>
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