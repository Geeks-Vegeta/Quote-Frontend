import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { BsRepeat, BsBookmark } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { RWebShare } from "react-web-share";
import { toJpeg } from 'html-to-image';
const QuoteCard=(props)=>{

    let formatter = Intl.NumberFormat('en', { notation: 'compact' });

    const DownloadImage=()=>{
        toJpeg(document.getElementById(`quote-card-${props.idx}`))
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${window.location.href}.jpg`;
        link.href = dataUrl;
        link.click();
      })}

    return (
        <>
            <div id={`quote-card-${props.idx}`} className="quote-card  p-4">
            <div className="img-name mb-3">
                <div className="img-name-tim">
                    <img className="qod-image" src={props.image} alt={props.author} />
                    <span className="mx-2">{props.author}</span>
                    <span className="text-muted">@shreyas</span>
                    <span className="text-muted"> .12h</span>
                </div>
                <div className="moreicon text-center">
                    <FiMoreHorizontal size={20}/>
                </div>
                
            </div>
            <div className="quote">
                <p>&ldquo; {props.quote}  &rdquo;</p>
            </div>
            <div>
                <p className="author">&ndash; {props.author}</p>
            </div>
            <div className="like-repost-share">
                <span className="text-small"> <AiOutlineHeart className="heart-icon" size="20"/>{formatter.format(props.likes)}  </span>
                <span> 
                    <RWebShare
                        data={{
                        text: `${props.quote} - ${props.author}`,
                        url: "https://on.natgeo.com/2zHaNup",
                        title: "Share this Quote"
                        }}
                        onClick={() => console.info("share successful!")}
                    >
                        <TbShare3 className="share-icon" size="20"/>
                    </RWebShare>
                </span>
                
                <span className="repeate-icon"> <BsRepeat size="20"/> </span>
                <span className="bookmark-icon"> <BsBookmark size="20"/> </span>

                {/* BsBookmark */}
                <span> <BiDownload className="download-icon" size="22"
                onClick={DownloadImage}
                /> </span>
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