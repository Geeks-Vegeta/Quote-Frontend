import React from "react";
import { NavLink } from "react-router-dom";

const List=()=>{

    let tags=["Life","Love","Humor","God","Truth","Philosophy",
      "Wisdom","Inspirational","poetry","Death","Happiness","Hope",
    "Faith","Motivational","Religion","success","Spirituality","Time","Knowledge",
    "Motivation","Science","Relationship"]
    return (
        <>
        <div className="top-heading ">
            <h4>List's</h4>
        </div>
        <div className="lists-heading">
            <p className="text-center my-4">Here you can find a lot of quotes by there tag's </p>
        </div>
        <div className="quote-tags mx-auto">
        {tags.map((data,idx)=>(
            <NavLink to={`/tag/${data}`}>
                <span className="quote-tags-span" key={idx}>{data}</span>
            </NavLink>

        ))}
    
        </div>
        </>
    )
}

export default List;