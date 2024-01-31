import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./threadsecond.css";
import insta2 from "./instagramsecond.png"
import hero2 from "./hero4.png"


const Threadsecond=()=>{
    
    const navigate= useNavigate();
    return(
        <>
        <div className='thread-second'>
        
        <div className='thread-navbar11'>
        <button onClick={()=>{navigate('/thread')}}>Back to Threads</button>
        </div>

        <div className='thread-hero-section-1'>

        <div className='insta-image'>
        <img src={insta2}></img>

        </div>

        <div className='threadsecond-para'>
        <p>Continue to Threads</p>
        </div>

        <div className='threadsecond-button'>
        <button><img src={hero2}></img><span><p> dahiya_saab_g<h1>Yogesh</h1></p></span></button>
        </div>

        <div className='threadsecond-footer'>
        <a href='/'>Login in to another instagram account</a>
        </div>

        </div>

        </div>

        </>
    )
}

export default Threadsecond;