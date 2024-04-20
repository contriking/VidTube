import React, { useEffect, useState } from "react";
import "./SearchResult.css";
import SearchResultVideo from "../../Components/SearchResultVideo/SearchResultVideo.jsx";
import { useParams } from "react-router-dom";

function SearchResult(){

    const {query}=useParams();  
    return(
        <SearchResultVideo query={query} />
    );
}

export default SearchResult;
