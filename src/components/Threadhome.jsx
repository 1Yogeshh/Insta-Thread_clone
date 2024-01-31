import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Threadhome.css";
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

const Threadhome=()=>{
    
    const navigate= useNavigate();
    return(
        <>
        <div className='thread-homepage'>
            
            <div className='thread-navbar'>

            <div className='thread-logo'>
            <img src={threadlogo}></img>
            </div>

            <div className='thread-hero-section-first'>
                <button>For you</button>

            </div>

            


            </div>


            <div className='thread-hero'>

            
            <div className='thread-navbar-buttons'>

            <ul>
                <li className='item1'><button><img src={threadhome}></img></button></li>
                <li className='item1'><button onClick={()=>{navigate('/threadsearch')}}><img src={threadsearch}></img></button></li>
                <li className='item2'><button><img src={threadnewpost}></img></button></li>
                <li className='item1'><button onClick={()=>{navigate('/threadnotification')}}><img src={threadheart}></img></button></li>
                <li className='item1'><button onClick={()=>{navigate('/threadprofile')}}><img src={threadprofile}></img></button></li>
            </ul>
            </div>

            <div className='thread-hero-section'>
            
                <div className='hero-section-thread'>
                <div className='hero-section-thread-image'>
                <img src={hero4}></img>
                </div>

                <div className='hero-section-thread-button1'>
                <button>Start a thread...</button>
                </div>

                <div className='hero-section-thread-button2'>
                <button>Posts</button>
                </div>

                </div>

                <div className='line'></div>

                <div className='thread-hero-section-a'>
                
                <div className='thread-hero-id'>

                <div className='thread-hero-id-image'>
                <img src={hero4}></img>
                </div>

                <div className='thread-hero-id-name'>
                <p>Dahiya_saab_g</p>
                <span>Good morning....</span>

                </div>

                <div className='thread-hero-id-more'>
                <p>4h</p>
                <button><img src={dot}></img></button>
                </div>
                
                </div>

                <div className='thread-hero-section-a-image'>
                <img src={hero4}></img>

                </div>

                <div className='thread-lcs'>
                <div className='thread-like'>
                <button><img src={like}></img></button>
                </div>
                <div className='thread-comment'>
                <button><img src={comment}></img></button>
                </div>
                <div className='thread-share'>
                <button><img src={share}></img></button>
                </div>

                </div>

                <div className='thread-footer-activity'>
                <p>29 replies. View activity</p>
                </div>

                </div>

                <div className='line'></div>

                <div className='thread-hero-section-a'>
                
                <div className='thread-hero-id'>

                <div className='thread-hero-id-image'>
                <img src={hero4}></img>
                </div>

                <div className='thread-hero-id-name'>
                <p>Dahiya_saab_g</p>
                <span>Good morning....</span>

                </div>

                <div className='thread-hero-id-more'>
                <p>4h</p>
                <button><img src={dot}></img></button>
                </div>
                
                </div>

                <div className='thread-hero-section-a-image'>
                <img src={hero4}></img>

                </div>

                <div className='thread-lcs'>
                <div className='thread-like'>
                <button><img src={like}></img></button>
                </div>
                <div className='thread-comment'>
                <button><img src={comment}></img></button>
                </div>
                <div className='thread-share'>
                <button><img src={share}></img></button>
                </div>

                </div>

                <div className='thread-footer-activity'>
                <p>29 replies. View activity</p>
                </div>

                </div>

                <div className='line'></div>

                

                <div className='thread-hero-section-a'>
                
                <div className='thread-hero-id'>

                <div className='thread-hero-id-image'>
                <img src={hero4}></img>
                </div>

                <div className='thread-hero-id-name'>
                <p>Dahiya_saab_g</p>
                <span>Good morning....</span>

                </div>

                <div className='thread-hero-id-more'>
                <p>4h</p>
                <button><img src={dot}></img></button>
                </div>
                
                </div>

                <div className='thread-hero-section-a-image'>
                <img src={hero4}></img>

                </div>

                <div className='thread-lcs'>
                <div className='thread-like'>
                <button><img src={like}></img></button>
                </div>
                <div className='thread-comment'>
                <button><img src={comment}></img></button>
                </div>
                <div className='thread-share'>
                <button><img src={share}></img></button>
                </div>

                </div>

                <div className='thread-footer-activity'>
                <p>29 replies. View activity</p>
                </div>

                </div>
                
            </div>

            </div>


            <div className='thread-home-morebutton'>
            <button><img src={threadmore}></img></button>

            </div>

            

        </div>
        </>
    )
}

export default Threadhome;