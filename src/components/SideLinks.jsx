import React, { useContext } from "react";
import { AiFillHome, AiOutlineOrderedList, AiOutlineLogin } from "react-icons/ai";
import { RiHashtag } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiMoreHorizontal, FiLogOut } from "react-icons/fi";
import { MdOutlineBookmark } from "react-icons/md";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import { LoginContext } from "../App";
const SideLinks=()=>{
    const {isDarkMode, setIsDarkMode, state}=useContext(LoginContext);



    return (
        <>
        <div className="">
            <div>
                <center>
                    <img  className="quotes-logo mx-auto" src={process.env.PUBLIC_URL+"quote.png"} />
                </center>
            </div>
            <ul className="navigation-list">
               
                   
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/">
                    <AiFillHome size={25}/>
                    <span className="list-name">
                    Home
                    </span>
                </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/explore">

                    <RiHashtag size={25}/>
                    <span className="list-name">
                    Explore
                    </span>
                </NavLink>
                </li>
                {state?(
                    <>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/notification">
                    <IoIosNotificationsOutline size={25}/>
                    <span className="list-name">
                    Notification
                    </span>
                </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/bookmark">

                    <MdOutlineBookmark size={25}/>
                <span className="list-name">
                Bookmark
                </span>
                </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/profile">

                    <CgProfile size={25}/>
                <span className="list-name">
                Profile
                </span>
                </NavLink>
                </li>
                
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/list">

                    <AiOutlineOrderedList size={25}/>
                <span className="list-name">
                List
                </span>
                </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/more">
                    <FiMoreHorizontal size={25}/>
                <span className="list-name">
                More
                </span>
                </NavLink>
                </li>
                <li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/logout">
                    <FiLogOut size={25}/>
                <span className="list-name">
                Logout
                </span>
                </NavLink>
                </li>
                </>
                ):(
                    <>
                        <li>
                            <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/login">
                                <AiOutlineLogin size={25}/>
                            <span className="list-name">
                            Login
                            </span>
                            </NavLink>
                        </li>
                    </>
                )}

               
                <li className="navigation-list-li">
                    <DarkModeToggle
                        onChange={()=>setIsDarkMode(!isDarkMode)}
                        checked={isDarkMode}
                        size={50}
                    />
                    <span className="list-name">Mode</span>
                </li>
                <NavLink className={({ isActive }) => (isActive ? 'text-dark navigation-list-li' : 'grey-color navigation-list-li')} to="/quoteofday">
                    <button className="button-p1">Quote Of Day</button>
               </NavLink>
            </ul>
        </div>

        </>
    )
}

export default SideLinks;