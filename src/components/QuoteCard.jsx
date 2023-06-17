import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { TbShare3 } from "react-icons/tb";
import { BsRepeat, BsBookmark } from "react-icons/bs";
import { BiDownload } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { FiMoreHorizontal } from "react-icons/fi";
import { RWebShare } from "react-web-share";
import { toJpeg } from 'html-to-image';
import { MDBTooltip } from "mdb-react-ui-kit";
import { LoginContext } from "../App";
import  moment from "moment";


const QuoteCard=(props)=>{

    let formatter = Intl.NumberFormat('en', { notation: 'compact' });
    const {isDarkMode}=useContext(LoginContext);


    const DownloadImage=()=>{
        if(!isDarkMode)
        {
                let x=document.getElementById(`quote-card-${props.idx}`);
                x.style.color="black";
                x.style.backgroundColor="white";
                toJpeg(document.getElementById(`quote-card-${props.idx}`))
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = `${window.location.href}.jpg`;
                link.href = dataUrl;
                link.click();
                x.style.color=null;
                x.style.backgroundColor=null;
            })

        }
        document.getElementById(`quote-card-${props.idx}`);
        toJpeg(document.getElementById(`quote-card-${props.idx}`))
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = `${window.location.href}.jpg`;
            link.href = dataUrl;
            link.click();
        })
    }

    return (
        <>
            <div id={`quote-card-${props.idx}`} className="quote-card  p-4">
            <div className="img-name mb-3">
                <div className="img-name-tim">
                    <img className="qod-image" src={props.image} alt={props.author} />
                    <span className="mx-1">{props.author}</span>
                    <span className="text-muted small-text">@{props.author?props.author:"shreyas"}</span>
                    <span className="text-muted mx-2 small-text"> {props.postDate?moment(props.postDate).fromNow():"12h" }</span>
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
            <MDBTooltip  tag='a'  title='like'>
                    <span className="text-small heart-icon"> <AiOutlineHeart  size="20"/>{formatter.format(props.likes)}  </span>
            </MDBTooltip>

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
            <MDBTooltip  tag='a'  title='repost'>

                <span className="repeate-icon"> <BsRepeat size="20"/> </span>
            </MDBTooltip>
            <MDBTooltip  tag='a'  title='bookmark'>

                <span className="bookmark-icon"> <BsBookmark size="20"/> </span>
            </MDBTooltip>
                {/* BsBookmark */}
                <MDBTooltip  tag='a'  title='download'>
                    <span> <BiDownload className="download-icon" size="22"
                    onClick={DownloadImage}
                    /> </span>
                </MDBTooltip>
            </div>
            <div className="quote-tags mt-3">
                {props.tags?(
                    <>
                    {props.tags.map((data,idx)=>{
                        return(
                            <>
                            <NavLink>
                                <span>#{data}</span>
                            </NavLink>
                            </>
                        )
                    })}

                    </>
                ):(
                    <>
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
                    </>
                )}
               
            </div>
        </div>

        </>
    )
}

export default QuoteCard;