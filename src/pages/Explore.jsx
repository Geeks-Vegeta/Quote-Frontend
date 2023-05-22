import React, { useEffect, useState } from "react";
import axios from "axios";


const Explore=()=>{

    const [recent, setRecent]=useState([]);
    useEffect(()=>{

        const getAllRecentPosts=async()=>{
            let {data}=await axios.get('https://quoteapi-q48j.onrender.com/quote/getAllRecentPosts');
            console.log(data);
            setRecent(data);
        }
        getAllRecentPosts();

    },[])



    return (
        <>
        <h2>Explore</h2>
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