import React from "react";
import "./Login.css";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import instalogo from "./insta-logo.png"
import applogo from "./app-logo.png"
import facebook from "./facebook.png"


const Login=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="main-container">

        <div className="container">

        <div className="header">
        <img src={instalogo} alt="apd"/>
        
        </div>

        <div className="inputs">
        <div className="input">
        <input type="text" placeholder="phone number,username or email"/>
        </div>
        </div>

        <div className="inputs">
        <div className="input">
        <input type="password" placeholder="password"/>
        </div>
        </div>

        <div className="login">
        <button className="btn" onClick={()=>{navigate("/home")}}>Log in</button>
        </div>

        <div className="or">
            <p>OR</p>
        </div>

        <div className="facebook">
        <a href="#"><img src={facebook}></img>Log in with Facebook</a>

        </div>

        <div className="fd">
            <a href="#">Forget password?</a>
        </div>

        </div>

        <div className="container2">
        <div className="signup">
            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
        </div>

        <div className="heading">
        <p> Get the app.</p>

        </div>
        <div className="app-logo">
            <img src={applogo} alt="apd"/>
        </div>

        <div className="meta">
            <p><a href="#">Meta</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <a href="#">Help</a>
            <a href="#">API</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Locations</a>
            <a href="#">Instagram Lite</a>
            <a href="#">Threads</a>
            <a href="#">Contact Uploading & Non-Users</a>
            <a href="#">Meta Verified</a>
            </p>
        </div>

        <div className="english">
            <p><select className="options">
            <option>English</option>
            <option>Hindi</option>
            <option>Punjabi</option>
            </select> @ 2023 Instagram from Meta</p>
        </div>
        </div>
        <Outlet/>

        </>
    )
}

export default Login;