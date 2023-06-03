import React, { useContext } from "react";
import {AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";
import { LoginContext } from "../App";
import { AiFillHome, AiOutlineOrderedList, AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SearchBar=()=>{
    const {state, dispatch} = useContext(LoginContext);
    return (
        <>
        
        {state?(
            <>
                <div className="search-bar">
                    <AiOutlineSearch size={20} className="m-1 magnifying"/>
                    <input width="150" className="border-text" placeholder="search for users" type="text" name="" id="" />
                </div>
                <div className="who-to-follow m-3 p-3">
                    <h5>Follow</h5>
                </div>
            </>
        ):(
            <>
            <div className="new-to-quotser my-3">
                <h5>New to Quoteser?</h5>
                <span className="text-muted">Sign up now to get your own personalized timeline!</span>
                <div className="login-button text-center my-1">
                    <NavLink className={({ isActive }) => (isActive ? 'text-dark' : 'grey-color')} to="/login">
                        <AiOutlineLogin size={20} color="red"/>
                        <span className="mx-3 text-dark login-name">
                            Login
                        </span>
                    </NavLink>
                </div>
                <p className="my-2">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>

            </div>
                <div className="privacy-term mx-auto">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                    <span>Accessibility</span>
                    <span>Ads info</span>
                    <span>© 2023 X Corp.</span>
                </div>
           
            </>
        )}
        
        </>
    )
}

export default SearchBar;