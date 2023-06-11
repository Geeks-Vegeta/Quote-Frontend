import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "../components/QuoteCard";
import LoadingComponent from "../components/LoadingComponent";

const Explore=()=>{

    const [recent, setRecent]=useState([]);
    const [loading, setLoading]=useState(false);
    useEffect(()=>{

        const getAllRecentPosts=async()=>{
            setLoading(true);
            let {data}=await axios.get('https://quoteapi-q48j.onrender.com/quote/getAllRecentPosts');
            setRecent(data);
            setLoading(false);
        }
        getAllRecentPosts();

    },[])



    return (
        <>
        <div className="top-heading">
            <h4>Explore &ndash;</h4>
        </div>

        {loading?(
            <>
            <LoadingComponent/>

            </>
        ):(
            <>
          

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
        )}


        </>
    )
}

export default Explore;