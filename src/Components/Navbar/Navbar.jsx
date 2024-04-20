import React from "react"
import "./Navbar.css"
import menu_icon from "./../../assets/menu.png";
import logo from "./../../assets/logo.png";
import search_icon from "./../../assets/search.png";
import upload_icon from "./../../assets/upload.png"
import more_icon from "../../assets/more.png"
import notification_icon from "../../assets/notification.png"
import profile_icon from "../../assets/jack.png"
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar({setSidebar}){

    const [searchQuery,setSearchQuery]=useState("");
    const navigate=useNavigate();

    const searchQueryHandler=(e)=>{
        if((e?.key==="Enter" || e==="searchButton")&& searchQuery?.length > 0){
            navigate(`/searchResult/${searchQuery}`);
        }
    }

    return (
        <nav className="flex-div">
            <div className="nav-left flex-div">
                <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="" />
                <Link to="/"><img className="logo" src={logo} alt="Logo" /></Link>
            </div>
            <div className="nav-middle flex-div">
                <div className="search-box flex-div">
                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={(e)=>setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        value={searchQuery}
                    />
                    
                </div>
            </div>

            <div className="nav-right flex-div">
                <img src={profile_icon} className="user-icon" alt="" />
            </div>
        </nav>
    );
}
export default Navbar