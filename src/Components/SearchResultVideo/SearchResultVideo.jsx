import {React,useState,useEffect} from "react";
import "./SearchResultVideo.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY,value_Converter } from "../../data";

function SearchResultVideo({query}){

    const [queryData,setqueryData]=useState([]);

    const fetchqueryData= async()=>{
        const queryvideo_url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&maxResult=50&q=${query}&key=${API_KEY}`;
        await fetch(queryvideo_url).then(res=>res.json()).then(queryData=>setqueryData(queryData.items));
    }

    useEffect(()=>{
        fetchqueryData();
    },[query])

    return (
    <div className="Result">
        {queryData.map((item,index)=>{
            return (
                <Link to={`/video/0/${item.id.videoId}`} className="card">
                    <img src={item.snippet.thumbnails.default.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.channelTitle}</h3>
                    <p>{value_Converter(item.publishTime)} views &bull; 15hours ago</p>
                </Link>
            )
        })}
    </div>)
}

export default SearchResultVideo