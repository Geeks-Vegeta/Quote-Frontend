import React from "react";
import QuoteCard from "../components/QuoteCard";

const Home=()=>{

    const data=[
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "You only live once, but if you do it right, once is enough",
            "author": "Mae West",
            "likes": "115457",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night",
            "author": "Edgar Allan Poe, Eleonora",
            "likes": "8466",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1454522972i/4624490._UX200_CR0,36,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "You only live once, but if you do it right, once is enough",
            "author": "Mae West",
            "likes": "115457",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night",
            "author": "Edgar Allan Poe, Eleonora",
            "likes": "8466",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1454522972i/4624490._UX200_CR0,36,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "You only live once, but if you do it right, once is enough",
            "author": "Mae West",
            "likes": "115457",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night",
            "author": "Edgar Allan Poe, Eleonora",
            "likes": "8466",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1454522972i/4624490._UX200_CR0,36,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "You only live once, but if you do it right, once is enough",
            "author": "Mae West",
            "likes": "115457",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg"
        },
        {
            "_id": "6472ffd766345c93c34b2189",
            "quote": "Those who dream by day are cognizant of many things which escape those who dream only by night",
            "author": "Edgar Allan Poe, Eleonora",
            "likes": "8466",
            "image": "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1454522972i/4624490._UX200_CR0,36,200,200_.jpg"
        }
    ]
    return (
        <>
        <div className="top-heading">
            <h4>Home</h4>
        </div>
        <div className="quote-cards">
            {data.map((data, idx)=>{
                return(
                    <>
                        <QuoteCard
                        image={data.image}
                        quote={data.quote}
                        author={data.author}
                        likes={data.likes}
                        idx={idx}
                        />
                    </>
                )

            })}
        </div>

        </>
    )
}

export default Home;