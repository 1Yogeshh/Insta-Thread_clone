import React, { PureComponent } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Threadprofile.css"
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
import share from "./send (1).png"
import hero2 from "./hero2.png"
import insta from "./instagramsecond.png"

const Threadprofile=()=>{
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
                <li className='item1search'><button><img src={threadprofile}></img></button></li>
            </ul>
            </div>

            <div className='thread-my-profile'>
                <div className='my-profile-username'>
                    <h1>YOGESH</h1>
                    <p>Dahiya_saab_g<button>threads.net</button></p>
                </div>
                <div className='my-profile-pic'>
                    <img src={hero4}></img>
                </div>
            </div>

            <div className='thread-my-profile-2'>
                <div className='thread-followers-69'>
                <img src={hero2}></img><img src={hero4}></img>
                <p>69 followers</p>
                </div>
                <div className='insta-1'>
                    <img src={insta}></img>
                </div>
            </div>

            <div className='thread-profile-edit-button'>
                <button>Edit Profile</button>
            </div>

            <div className='thread-profile-different-buttons'>
                <div className='profile-thread-button'>
                    <button>Threads</button>
                </div>
                <div className='profile-replies-button'>
                    <button onClick={()=>navigate("/threadprofilereplies")}>Replies</button>
                </div>
                <div className='profile-repost-button'>
                    <button onClick={()=>navigate("/threadprofilerepost")}>Reposts</button>
                </div>
            </div>

            <div className='profile-button-line'>
            <div className='thread-button-line'></div>
            </div>

            <div className='thread-profile-first'>
                <div className='thread-profile-first-image'>
                    <img src={hero4}></img>
                </div>
                <div className='thread-profile-first-thread'>
                    <div className='thread-profile-first-username'>
                        <div className='thread-profile-first-username-1'>
                            <p>Dahiya_saab_g</p>
                        </div>
                        <div className='thread-profile-first-username-2'>
                        <p>22w</p>
                        <img src={dot}></img>
                        </div>
                    </div>
                    <div className='thread-profile-para'>
                        <p>Folks are not able to code a static webpage, and their LinkedIn headline is Full<br></br> Stack Developer ,<br></br>
                        are you idiot or garbage value?</p>
                    </div>
                    <div className='thread-profile-para-activity'>
                        <p>View activity</p>
                    </div>
                </div>
            </div>

            <div className='profile-button-line'></div>

            <div className='thread-profile-first'>
                <div className='thread-profile-first-image'>
                    <img src={hero4}></img>
                </div>
                <div className='thread-profile-first-thread'>
                    <div className='thread-profile-first-username'>
                        <div className='thread-profile-first-username-1'>
                            <p>Dahiya_saab_g</p>
                        </div>
                        <div className='thread-profile-first-username-2'>
                        <p>22w</p>
                        <img src={dot}></img>
                        </div>
                    </div>
                    <div className='thread-profile-para'>
                        <p>Folks are not able to code a static webpage, and their LinkedIn headline is Full<br></br> Stack Developer ,<br></br>
                        are you idiot or garbage value?</p>
                    </div>
                    <div className='thread-profile-para-activity'>
                        <p>View activity</p>
                    </div>
                </div>
            </div>

            </div>


            <div className='threadsearch-home-morebutton'>
            <button><img src={threadmore}></img></button>

            </div>


            

        </div>
        </>
    )
  
}

export default Threadprofile;