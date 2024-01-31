import React from "react";
import "./Signup.css";
import { Outlet, Link,useNavigate } from 'react-router-dom';
import instalogo from "./insta-logo.png"
import applogo from "./app-logo.png"



const Signup=()=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="main-container1">

        <div className="container1">

        <div className="header1">
        <img src={instalogo} alt="apd"/>
        </div>

        <div className="t1">
            <p>Sign up to see photos and videos<br></br> from your friends.
</p>
        </div>

        <div className="btn22">
            <button className="bn">Log in with Facebook</button>
        </div>

        <div className="or2">
            <p>OR</p>
        </div>

        <div className="inputs1">
        <div className="input1">
        <input type="text" placeholder="phone number or email"/>
        </div>
        </div>

        <div className="inputs1">
        <div className="input1">
        <input type="text" placeholder="full name"/>
        </div>
        </div>

        <div className="inputs1">
        <div className="input1">
        <input type="text" placeholder="username"/>
        </div>
        </div>

        <div className="inputs1">
        <div className="input1">
        <input type="password" placeholder="password"/>
        </div>
        </div>

        <div className="q">
            <p>People who use our service may have uploaded<br></br> your contact information to Instagram.<a href="#">Learn more</a></p>
        </div>

        <div className="w">
            <p>By signing up, you agree to our<a href="#">Terms, privacy<br></br> policy</a> and <a href="#">Cookies policy</a></p>
        </div>

        <div className="login1">
        <button className="btn1" onClick={()=>{navigate("/home")}}>Sign up</button>
        </div>

        

        </div>

        <div className="container21">
        <div className="signup1">
            <p>Have an Account? <Link to="/login">Log in</Link></p>
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

export default Signup;