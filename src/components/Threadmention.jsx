import React, { PureComponent } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./threadnotification.css"
import threadlogo from "./threadlogo2.png"
import threadhome from "./home thread.png"
import threadsearch from "./searchthread.png"
import threadnewpost from "./newpostthread.png"
import threadheart from "./notification thread.png"
import threadprofile from "./profile thread.png"
import threadmore from "./morethread.png"
import hero4 from "./hero2.png"
import dot from "./more.png"
import like from "./heart (1).png"
import comment from "./bubble-chat.png"
import share from "./send (1).png"


const Threadmention=()=>{
    const navigate =useNavigate();
    return (
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
                <li className='item1search'><button onClick={()=>navigate("/threadsearch")} ><img src={threadsearch}></img></button></li>
                <li className='item2search'><button><img src={threadnewpost}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadnotification')}}><img src={threadheart}></img></button></li>
                <li className='item1search'><button onClick={()=>{navigate('/threadprofile')}}><img src={threadprofile}></img></button></li>
            </ul>
            </div>

            <div className='thread-notification-different-buttons'>
                <div className='thread-all-button-3'>
                    <button onClick={()=>navigate("/threadnotification")}>All</button>
                </div>
                <div className='thread-all-button-2'>
                <button onClick={()=>navigate("/threadfollow")}>Follow</button>
                </div>
                <div className='thread-all-button-4'>
                <button onClick={()=>navigate("/threadreplies")}>Replies</button>
                </div>
                <div className='thread-all-button-1'>
                <button>Mentions</button>
                </div>
                <div className='thread-all-button-5'>
                <button onClick={()=>navigate("/threadrepost")}>Reposts</button>
                </div>
                <div className='thread-all-button-6'>
                <button onClick={()=>navigate("/threadverified")}>Verified</button>
                </div>
            </div>

            <div className='no-activity-yet'>
            <p>No activity yet.</p>
            </div>

            
            

            </div>


            <div className='threadsearch-home-morebutton'>
            <button><img src={threadmore}></img></button>

            </div>


            

        </div>
        </>
    )
  
}

export default Threadmention;
