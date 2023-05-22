import React from "react";
import {AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";

const SearchBar=()=>{
    return (
        <>
         <div className="search-bar">
            <AiOutlineSearch size={20} color="black" className="m-1"/>
            <input width="200" className="border-text" placeholder="search for people 👨" type="text" name="" id="" />
        </div>
        <div className="who-to-follow m-3 p-3">
            <h5>Who to follow 🧑‍🦱</h5>
        </div>
        </>
    )
}

export default SearchBar;