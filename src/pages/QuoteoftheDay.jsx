import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import { BsRepeat } from "react-icons/bs";
import { MDBTooltip } from  "mdb-react-ui-kit";
import { BiDownload } from "react-icons/bi";
import { toJpeg } from 'html-to-image';
import { LoginContext } from "../App";
import { TbShare3 } from "react-icons/tb";
import { RWebShare } from "react-web-share";

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
       
        if(!isDarkMode){
            document.getElementById('none').style.display='block';
            let x=document.getElementById(`card-for-qod`);
                x.style.color="black";
                x.style.backgroundColor="white";
                toJpeg(document.getElementById(`card-for-qod`))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${window.location.href}.jpg`;
                link.href = dataUrl;
                link.click();
                x.style.color=null;

            })
            document.getElementById('none').style.display='none';

        }
        else{
            document.getElementById('none').style.display='block';

            toJpeg(document.getElementById(`card-for-qod`))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${window.location.href}.jpg`;
                link.href = dataUrl;
                link.click();
            })


        document.getElementById('none').style.display='none';

        }
        


    }

        
        

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
        <h4 className="m-3">Quote Of The Day &ndash;</h4>

        <div className="card-for-qod mx-auto p-3">
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
                    <span className="text-small heart-icon"> <AiFillHeart color="red" size="20"/>{quote?formatter.format(quote.likes):formatter.format(x.likes)}  </span>
                </MDBTooltip>
               <MDBTooltip  tag='a'  title='share'>

               <RWebShare
                        data={{
                        text: `${quote?quote.quote:x.quote} - ${quote?quote.author:x.author}`,
                        url: "https://on.natgeo.com/2zHaNup",
                        title: "Share this Quote"
                        }}
                        onClick={() => console.info("share successful!")}
                    >
                        <TbShare3 className="share-icon" size="20"/>
                    </RWebShare>
                </MDBTooltip>
                <MDBTooltip  tag='a'  title='repost'>
                    <span  className="repeate-icon"> <BsRepeat size="20"/> </span>
                </MDBTooltip>
                <MDBTooltip  tag='a'  title='download'>
                    <span onClick={DownloadImage}> <BiDownload className="download-icon" size="20"/> </span>
                </MDBTooltip>
            </div>
        </div>
        <div id="none">
            <div id="card-for-qod" className="card-for-qod p-3">
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
            </div>
        </div>
        </>
    )
}

export default QuoteoftheDay;