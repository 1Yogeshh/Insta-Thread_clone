import React,{useState} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./threadsearch.css"
import threadlogo from "./threadlogo2.png"
import threadhome from "./home thread.png"
import threadsearch from "./searchthread.png"
import threadnewpost from "./newpostthread.png"
import threadheart from "./notification thread.png"
import threadprofile from "./profile thread.png"
import threadmore from "./morethread.png"
import hero4 from "./hero4.png"
import dot from "./more.png"
import like from "./heart (1).png"
import comment from "./bubble-chat.png"
import share from "./send (1).png";
import vvoid from "./nikhil.jpeg";


const Threadsearch=()=>{
    const navigate= useNavigate();

    return(
    <>
    
    
    <div className='thread-searchpage'>
            <div className='threadsearch-navbar'>

            <div className='threadsearch-logo'>
            <img src={threadlogo}></img>
            </div>

            </div>


            <div className='threadsearch-hero'>

            
            <div className='threadsearch-navbar-buttons'>

            <ul>
                <li className='item1search'><button onClick={()=>{navigate('/threadhome')}}><img src={threadhome}></img></button></li>
                <li className='item1search'><button ><img src={threadsearch}></img></button></li>
                <li className='item2search'><button><img src={threadnewpost}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadnotification')}}><img src={threadheart}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadprofile')}}><img src={threadprofile}></img></button></li>
            </ul>
            </div>

            <div className='thread-searchbar'>
            <input placeholder='search' type='text'></input>
            </div>

            <div className='search-first-id'>
            <button onClick={()=>navigate("/threadfriendid")}>
                <div className='void-pic'>
                    <img src={vvoid}></img>
                </div>
                <div className='void-username'>
                    <div className='void-username-1st'>
                        <p>void.tsx</p>
                    </div>
                    <div className='void-username-2nd'>
                        <p>Void🚀</p>
                    </div>
                    <div className='void-username-3rd'>
                        <p>69 followers</p>
                    </div>
                </div>
                <div className='void-follow-button'>
                    <button>Follow</button>
                </div>
                </button>
            </div>

            <div className='search-line'></div>
            
            <div className='search-first-id'>
            <button onClick={()=>navigate("/threadfriendid")}>
                <div className='void-pic'>
                    <img src={vvoid}></img>
                </div>
                <div className='void-username'>
                    <div className='void-username-1st'>
                        <p>void.tsx</p>
                    </div>
                    <div className='void-username-2nd'>
                        <p>Void🚀</p>
                    </div>
                    <div className='void-username-3rd'>
                        <p>69 followers</p>
                    </div>
                </div>
                <div className='void-follow-button'>
                    <button>Follow</button>
                </div>
                </button>
            </div>

            </div>


            <div className='threadsearch-home-morebutton'>
            <button><img src={threadmore}></img></button>

            </div>


            

        </div>

    </>
  )
}

export default Threadsearch;