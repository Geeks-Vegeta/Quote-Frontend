import React, { useContext } from "react";
import {AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";
import { LoginContext } from "../App";

const SearchBar=()=>{
    const {state, dispatch} = useContext(LoginContext);
    return (
        <>
         <div className="search-bar">
            <AiOutlineSearch size={20} className="m-1 magnifying"/>
            <input width="150" className="border-text" placeholder="search for users" type="text" name="" id="" />
        </div>
        {state?(
            <>
                <div className="who-to-follow m-3 p-3">
                    <h5>Follow</h5>
                </div>
            </>
        ):(
            <>
            </>
        )}
        
        </>
    )
}

export default SearchBar;