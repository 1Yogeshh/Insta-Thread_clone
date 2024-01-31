import React,{useState} from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Threadfriendid.css"
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
import back from "./left-arrows.png"
import insta from "./instagramsecond.png"



const Threadfriendid=()=>{
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
                <li className='item1search'><button onClick={()=>navigate("/threadsearch")}><img src={threadsearch}></img></button></li>
                <li className='item2search'><button><img src={threadnewpost}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadnotification')}}><img src={threadheart}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadprofile')}}><img src={threadprofile}></img></button></li>
            </ul>
            </div>

            <div className='back-button'>
                <button onClick={()=>navigate("/threadsearch")}><p>Back</p></button>
            </div>

            <div className='void-id'>
                <div className='void-id-username'>
                    <div className='void-id-username-1'>
                        <p>Void🚀</p>
                    </div>
                    <div className='void-id-username-2'>
                        <p>void.tsx</p><button>threads.net</button>
                    </div>
                    <div className='void-id-username-3'>
                        <p>Void in my thinking syntax</p>
                    </div>
                    <div className='void-id-username-4'>
                        <p>69 followers</p>
                    </div>
                </div>
                <div className='void-id-images'>
                    <div className='void-id-images-1'>
                        <img src={vvoid}></img>
                    </div>
                    <div className='void-id-images-2'>
                        <img src={insta}></img>
                    </div>
                </div>
            </div>

            <div className='void-id-buttons'>
                <div className='void-id-button-1'>
                    <button>Following</button>
                </div>
                <div className='void-id-button-2'>
                    <button>Mention</button>
                </div>
            </div>

            <div className='thread-profile-different-buttons'>
                <div className='profile-thread-button-1'>
                    <button onClick={()=>navigate("/threadfriendid")}>Threads</button>
                </div>
                <div className='profile-replies-button-1'>
                    <button onClick={()=>navigate("/threadidreplies")}>Replies</button>
                </div>
                <div className='profile-repost-button-1'>
                    <button>Reposts</button>
                </div>
            </div>

            <div className='profile-button-line'>
            <div className='thread-button-line-1'></div>
            </div>

            <div className='profile-no-repost'>
                <p>No reposts yet.</p>
            </div>



            </div>


            <div className='threadsearch-home-morebutton'>
            <button><img src={threadmore}></img></button>

            </div>


            

        </div>

    </>
  )
}

export default Threadfriendid;