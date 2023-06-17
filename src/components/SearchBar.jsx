import React, { useContext, useState } from "react";
import {AiOutlineSearch } from "react-icons/ai";
import "./searchbar.css";
import { LoginContext } from "../App";
import { AiOutlineLogin } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const SearchBar=()=>{
    const {state, dispatch} = useContext(LoginContext);
    const [search, setSearch] = useState("");

    return (
        <>
        
        {state?(
            <>
                <div className="search-bar">
                    <AiOutlineSearch size={20} className="m-1 magnifying"/>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} width="150" className="border-text" placeholder="search for users" type="text" name="" id="" />
                </div>

                {search.length===0?(
                    <>  

<div className="follow-who m-1 my-3 p-3">
                    <h5 className="">who to follow</h5>
                    <div className="users-follow my-1">
                        <div className="follow-users my-3">
                            <div className="image-name">
                                <img className="qod-image-search mx-1" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg" alt="" />
                                <span>Shreyas</span>
                            </div>
                            <button className="follow-button">follow</button>
                        </div>
                    </div>
                    <div className="users-follow my-1">
                        <div className="follow-users my-3">
                            <div className="image-name">
                                <img className="qod-image-search mx-1" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg" alt="" />
                                <span>Shreyas</span>
                            </div>
                            <button className="follow-button">follow</button>
                        </div>
                    </div>
                    <div className="users-follow my-1">
                        <div className="follow-users my-3">
                            <div className="image-name">
                                <img className="qod-image-search mx-1" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg" alt="" />
                                <span>Shreyas</span>
                            </div>
                            <button className="follow-button">follow</button>
                        </div>
                    </div>
                    <div className="users-follow my-1">
                        <div className="follow-users my-3">
                            <div className="image-name">
                                <img className="qod-image-search mx-1" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg" alt="" />
                                <span>Shreyas</span>
                            </div>
                            <button className="follow-button">follow</button>
                        </div>
                    </div>

                </div>

                    </>
                ):(
                    <>
                    <div className="who-to-follow m-1 my-3 p-3">
                    <div className="users-follow my-1">
                        <div className="follow-users my-3">
                            <div className="image-name">
                                <img className="qod-image-search mx-1" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1198551937i/259666._UX200_CR0,16,200,200_.jpg" alt="" />
                                <span>Shreyas</span>
                            </div>
                            <button className="follow-button">follow</button>
                        </div>
                    </div>
                </div>
                    </>
                )}

            
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