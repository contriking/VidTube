import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Video/Video.jsx";
import SearchResult from "./Pages/SearchResult/SearchResult.jsx";
import { Route , Routes } from "react-router-dom"

function App(){

  const [sidebar,setSidebar]=useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
        <Route path="/searchResult/:query" element={<SearchResult/>} />"
      </Routes>
    </div>);
}

export default App

// "@types/react-router-dom": "^5.3.3",