import React from "react";
import { BsRepeat, BsBookmark } from "react-icons/bs";

const Bookmark=()=>{

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
        }
    ]
    return (
        <>
        <div className="top-heading shadow-lg">
            <h4>Bookmark</h4>
        </div>
        <h4 className="text-center my-3">Your Bookmarks</h4>
        <div className="bookmarks-data">
            {data.map((data, idx)=>{
                return (
                    <>
                        <div key={idx} className="bookmark-card p-2">
                            <div className="profile-bookmark">
                                <div className="profile-pic-name">
                                <img className="small-profile-pic" src={data.image} alt="img" />
                                <span className="small-profile-name mx-1">{data.author}</span>
                                </div>
                                <p className="bookmark-small"><BsBookmark/></p>
                            </div>
                            <div className="">
                                <p className="p-2 quote small-quote"> &ldquo; {data.quote} &rdquo;</p>
                                <p className="author small-quote">&ndash; {data.author}</p>

                            </div>    
                        </div>
                    </>
                )
            })}
            
            {/* <p className="text-center">No bookmark's yet</p> */}
        </div>

        </>
    )
}
export default Bookmark;