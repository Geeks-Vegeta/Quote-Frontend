import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoIosShareAlt } from "react-icons/io";
import { BsRepeat } from "react-icons/bs";
import { CiExport } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";

const QuoteCard=()=>{

    let formatter = Intl.NumberFormat('en', { notation: 'compact' });

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
            <div className="quote-card  p-4">
            <div className="img-name mb-3">
                <div className="img-name-tim">
                    <img className="qod-image" src={x.image} alt={x.author} />
                    <span className="mx-2">{x.author}</span>
                    <span className="text-muted">@shreyas</span>
                    <span className="text-muted"> .12h</span>
                </div>
                <div className="moreicon text-center">
                    <FiMoreHorizontal size={20}/>
                </div>
                
            </div>
            <div className="quote">
                <p>&ldquo; {x.quote}  &rdquo;</p>
            </div>
            <div>
                <p className="author">&ndash; {x.author}</p>
            </div>
            <div className="like-repost-share">
                <span> <AiFillHeart color="red" size="20"/>{formatter.format(x.likes)}  </span>
                <span> <IoIosShareAlt size="20"/> </span>
                <span> <BsRepeat size="20"/> </span>
                <span> <CiExport size="20"/> </span>
            </div>
            <div className="quote-tags mt-3">
                <NavLink>
                    <span>#Life</span>
                </NavLink>
                <NavLink>
                    <span>#Love</span>
                </NavLink>
                <NavLink>
                    <span>#Motivation</span>
                </NavLink>
                <NavLink>
                    <span>#Success</span>
                </NavLink>
            </div>
        </div>

        </>
    )
}

export default QuoteCard;