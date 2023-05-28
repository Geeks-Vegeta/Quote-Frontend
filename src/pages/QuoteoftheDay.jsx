import React, { useEffect, useState } from "react";
import axios from "axios";
const QuoteoftheDay=()=>{
    const [quote, setQuote]=useState();

    useEffect(()=>{
        const getQuoteoftheDay=async()=>{
            let {data}=await axios.get("https://quoteapi-q48j.onrender.com/quoteofday");
            setQuote(data);
        }
        getQuoteoftheDay();

    },[])

    let x=
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "You only live once, but if you do it right, once is enough",
            "author": "Mae West",
            "likes": "115457",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
          }
    


    return (
        <>
        <p className="top-heading">Quote Of The Day 🌅</p>

        <div className="card-for-qod mx-auto p-3">
            <div className="img mb-3">
                <img className="qod-image" src={x.image} alt={x.author} />
                <span className="mx-2">{x.author}</span>
            </div>
            <div className="quote">
                <p>&ldquo; Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque vitae asperiores maiores repellat, reprehenderit placeat, quasi corporis quo corrupti ipsa sequi saepe! Nisi esse assumenda distinctio aperiam voluptatum officia saepe nihil nemo veritatis atque, voluptatibus, molestiae ad incidunt, similique vitae quia dolores? Est quo error fugiat repellendus, commodi molestiae?  &rdquo;</p>
            </div>
            <div>
                <p className="author">&ndash; {x.author}</p>
            </div>


        </div>



        </>
    )
}

export default QuoteoftheDay;