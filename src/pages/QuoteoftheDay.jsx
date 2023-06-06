import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { MDBTooltip } from  "mdb-react-ui-kit";
import { BiDownload } from "react-icons/bi";
import { toJpeg } from 'html-to-image';
import { LoginContext } from "../App";

const QuoteoftheDay=()=>{
    const [quote, setQuote]=useState();
    const {isDarkMode}=useContext(LoginContext);


    useEffect(()=>{
        const getQuoteoftheDay=async()=>{
            let {data}=await axios.get("https://quoteapi-q48j.onrender.com/quoteofday");
            setQuote(data);
        }
        getQuoteoftheDay();

    },[])

    let formatter = Intl.NumberFormat('en', { notation: 'compact' });


    const DownloadImage=()=>{
        let x=document.getElementById(`card-for-qod`);
        if(!isDarkMode){
                x.style.color="black";
                x.style.backgroundColor="white";
                toJpeg(document.getElementById(`card-for-qod`))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${window.location.href}.jpg`;
                link.href = dataUrl;
                link.click();
                x.style.color=null;
                x.style.backgroundColor=null;
            })
        }
        toJpeg(document.getElementById(`card-for-qod`))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${window.location.href}.jpg`;
                link.href = dataUrl;
                link.click();
            })}
        
        

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
        <h4 className="top-heading shadow-lg">Quote Of The Day 🌅</h4>

        <div id="card-for-qod" className="card-for-qod mx-auto p-3">
            <div className="img mb-3">
                <img className="qod-image" src={quote?quote.image:x.image} alt={x.author} />
                <span className="mx-2">{quote?quote.author:x.author}</span>
            </div>
            <div className="quote">
                <p>&ldquo; {quote?quote.quote:x.quote}  &rdquo;</p>
            </div>
            <div>
                <p className="author">&ndash; {quote?quote.author:x.author}</p>
            </div>
            <div className="like-repost-share">
                <MDBTooltip  tag='a'  title='like'>
                    <span> <AiFillHeart color="red" size="20"/>{quote?formatter.format(quote.likes):formatter.format(x.likes)}  </span>
                </MDBTooltip>
               <MDBTooltip  tag='a'  title='share'>
                    <span> <IoIosShareAlt size="20"/> </span>
                </MDBTooltip>
                <MDBTooltip  tag='a'  title='repost'>
                    <span> <BsRepeat size="20"/> </span>
                </MDBTooltip>
                <MDBTooltip  tag='a'  title='download'>
                    <span onClick={DownloadImage}> <BiDownload size="20"/> </span>
                </MDBTooltip>
            </div>
        </div>
        </>
    )
}

export default QuoteoftheDay;