import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";

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
        <div className="top-heading shadow-lg">
            <h4>Explore</h4>
        </div>
        {recent.map((data, idx)=>{
            return (
                <>
                <QuoteCard
                quote={data.quote}
                author={data.user.username}
                image={data.user.profile_pic}
                likes={data.likes.length}
                postDate={data.postDate}
                tags={data.tags}
                />
                </>
            )
        })}

        </>
    )
}

export default Explore;