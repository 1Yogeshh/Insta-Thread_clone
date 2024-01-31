import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Thread.css";
import insta from "./thread-insta.png"

const Thread=()=>{
    
    const navigate= useNavigate();
    return(
        <>
        <div className='background'>

        <div className='thread-login'>

        <div className='thread-para'>
            <p>Login in with your Instagram account</p>
        </div>

        <div className='thread-input1'>
            <input placeholder='Username, phone or email'></input>
        </div>

        <div className='thread-input2'>
            <input placeholder='Password'></input>
        </div>

        <div className='thread-button'>
            <button onClick={()=>{navigate('/threadhome')}}>Log in</button>
        </div>

        <div className='thread-forget'>
            <p>Forget password?</p>
        </div>

        <div className='thread-or'>
            <p>or</p>
        </div>

        <div className='thread-instagram'>
            <button onClick={()=>{navigate("/threadsecond")}}><img src={insta}></img><p>Continue with Instagram</p></button>
        </div>

        <div className='thread-footer'>
        <p>@ 2023</p>  <p>  Thread Terms</p>  <p> Privacy Policy</p>  <p> Cookies Policy</p>  <p> Report a problem</p>
        </div>

        </div>
        </div>

        </>
    )
}

export default Thread;