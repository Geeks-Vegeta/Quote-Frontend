import React, { useContext } from "react";
import {AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";
import { LoginContext } from "../App";
import { AiOutlineLogin } from "react-icons/ai";
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
                <div className="who-to-follow m-1 my-3 p-3">
                    <h5>Follow</h5>
                </div>
            </>
        ):(
            <>
            <div className="new-to-quotser my-3">
                <h5>New to Quoteser?</h5>
                <span className="text-muted">Sign up now to get your own personalized timeline!</span>
                    <NavLink className={({ isActive }) => (isActive ? 'text-dark' : 'grey-color')} to="/login">
                    <div className="login-button text-center my-1">

                        <AiOutlineLogin size={20} color="red"/>
                        <span className="mx-3 text-dark login-name">
                            Login
                        </span>
                    </div>

                    </NavLink>
                <p className="my-2">By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>

            </div>
               
           
            </>
        )}
         <div className="privacy-term mx-auto">
                    <NavLink  to="/tos">
                        <span className="text-dark">Terms of Service</span>
                    </NavLink>
                    <NavLink  to="/privacy">
                        <span className="text-dark">Privacy Policy</span>
                    </NavLink>
                    <NavLink  to="/cookie">
                        <span className="text-dark">Cookie Policy</span>
                    </NavLink>
                    <NavLink  to="/accessibility">
                        <span className="text-dark">Accessibility</span>
                    </NavLink>
                    <NavLink  to="addinfo">
                    <span className="text-dark">Ads info</span>
                    </NavLink>
                    <p className="text-dark mt-1">© 2023 X Corp.</p>
                </div>
        </>
    )
}

export default SearchBar;