import React, {useState} from "react";
import "./Message.css";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import instalogo from "./insta-logo.png"
import reels from "./video.png"
import search from "./search.png"
import msg from "./messenger (1).png"
import heart1 from "./heart.png"
import msg1 from "./messenger.png"
import home from "./home (1).png"
import explore from "./direction.png"
import create from "./add.png"
import heart from "./heart (1).png"
import profile from "./new-moon.png"
import more from "./sort.png"
import threads from "./threads.png"
import hero from "./hero.png"
import dot from "./dots.png"
import like from "./heart (1).png"
import comment from "./bubble-chat.png"
import share from "./send (1).png"
import save from "./bookmark.png"
import hero2 from "./hero2.png"
import hero3 from "./hero3.png"
import hero4 from "./hero4.png"
import instagramlogo from "./instgram-logo.png"
import edit from "./edit.png"
import circle from "./Untitled.png"
import newpost from "./gallery.png"

const Message=()=>{
    const navigate = useNavigate();

    const [showModal1,setShowModal1]=useState(false);

    const closemodal1 =()=>setShowModal1(false);

    const MyModal1=()=>{
      return(
        <>
        <div className="modal-wrapper1" onClick={closemodal1}></div>

        <div className='search-page'>
            <div className='message-navbar'>

                <div className="m-logo">
                    <img src={instagramlogo}></img>
                </div>

                <div className="message-buttons">

                    <button className="m-buttons1" onClick={()=>{navigate("/home")}}>
                    <img src={home} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal1(true)}>
                    <img src={search} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons100" onClick={()=>navigate("/explore")}>
                    <img src={explore} alt="apd"></img>
                    
                    </button>


                    <button className="m-buttons1" onClick={()=>{navigate("/message")}}>
                    <img src={msg} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal3(true)}>
                    <img src={heart} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal2(true)}>
                    <img src={create} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>{navigate("/profile")}}>
                    <img src={hero4} alt="apd"></img>
                    
                    </button>

                </div>
                <div className="m-navbar-footer">

                <button className="m-buttons2" onClick={()=>navigate("/thread")}>
                    <img src={threads} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons2">
                    <img src={more} alt="apd"></img>
                    
                    </button>

                </div>


            </div>
            
            
            
            <div className="search">

            <div className="search-heading">
            <h1>Search</h1>
            </div>

            <div className="search-input">
            <input type="text" placeholder="Search"/>
            </div>

            <hr></hr>
            <div className="search-recent">
            <p>Recent</p>
            </div>

            <div  className="search-norecent">
            <p>No recent searches.</p>
            </div>

            </div>  
            </div>
        </>
      )
    }

    const [showModal2,setShowModal2]=useState(false);

    const closemodal2 =()=>setShowModal2(false);

    const MyModal2=()=>{
      return(
        <>
        <div className="modal-wrapper2" onClick={closemodal2}></div>

        <div className="create-post">
        
        <div className="post-heading">
        <h1>Create new post</h1>
        </div>
        <hr></hr>

        <div className="post-logo">
        <img src={newpost}></img>
        </div>

        <div className="post-para">
        <p>Drag photos and videos here</p>
        </div>

        <div className="post-button">
        <button>Select from computer</button>
        </div>

        </div>

        </>
      )
    }

    const [showModal3,setShowModal3]=useState(false);

    const closemodal3 =()=>setShowModal3(false);

    const MyModal3=()=>{
      return(
        <>
        <div className="modal-wrapper3" onClick={closemodal3}></div>

        <div className='notification-page'>
            <div className='message-navbar'>

                <div className="m-logo">
                    <img src={instagramlogo}></img>
                </div>

                <div className="message-buttons">

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={home} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={search} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={explore} alt="apd"></img>
                    
                    </button>


                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={msg1} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={heart1} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={create} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal3}>
                    <img src={hero4} alt="apd"></img>
                    
                    </button>

                </div>
                <div className="m-navbar-footer">

                <button className="m-buttons2" onClick={()=>navigate("/thread")}>
                    <img src={threads} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons2">
                    <img src={more} alt="apd"></img>
                    
                    </button>

                </div>


            </div>

            <div className="notification-section">
            <div className="notification-heading">
                <h1>Notifications</h1>
            </div>
            <hr></hr>
            <div className="notification-para">
            <p>No recent Notifications</p>
            </div>

            </div>
            </div>
        </>
      )
    }
  
    return (
      <>
        <div className='message-page'>
            <div className='message-navbar'>
            {showModal1 && <MyModal1/>}
            {showModal2 && <MyModal2/>}
            {showModal3 && <MyModal3/>}

                <div className="m-logo">
                    <img src={instagramlogo}></img>
                </div>

                <div className="message-buttons">

                    <button className="m-buttons1" onClick={()=>{navigate("/home")}}>
                    <img src={home} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal1(true)}>
                    <img src={search} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons100" onClick={()=>navigate("/explore")}>
                    <img src={explore} alt="apd"></img>
                    
                    </button>


                    <button className="m-buttons1" onClick={()=>{navigate("/message")}}>
                    <img src={msg} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal3(true)}>
                    <img src={heart} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>setShowModal2(true)}>
                    <img src={create} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={()=>{navigate("/profile")}}>
                    <img src={hero4} alt="apd"></img>
                    
                    </button>

                </div>
                <div className="m-navbar-footer">

                <button className="m-buttons2" onClick={()=>navigate("/thread")}>
                    <img src={threads} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons2">
                    <img src={more} alt="apd"></img>
                    
                    </button>

                </div>


            </div>


            <div className='message-section'>

            <div className='message-user'>
            
            <p>dahiya_saab_g</p><select></select>
            <img src={edit}></img>

            </div>

            <div className='message-nav'>
                <span className='mnav1'><p>Messages</p></span>
                <span className='mnav2'><p>Requests</p></span>
            </div>

            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero4}></img>
                </div>
                <div className='sec-02'>
                    <h1>dahiya_saab_g</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero2}></img>
                </div>
                <div className='sec-02'>
                    <h1>Nikhil</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero3}></img>
                </div>
                <div className='sec-02'>
                    <h1>amandeep</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero4}></img>
                </div>
                <div className='sec-02'>
                    <h1>pankaj</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero3}></img>
                </div>
                <div className='sec-02'>
                    <h1>rahul</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero2}></img>
                </div>
                <div className='sec-02'>
                    <h1>dahiyassaab</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero4}></img>
                </div>
                <div className='sec-02'>
                    <h1>yadav</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero2}></img>
                </div>
                <div className='sec-02'>
                    <h1>amandeep</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero3}></img>
                </div>
                <div className='sec-02'>
                    <h1>pankaj</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>
            <div className='message-first'>
                <div className='sec-01'>
                    <img src={hero4}></img>
                </div>
                <div className='sec-02'>
                    <h1>yogesh</h1>
                    <p>You sent an attachment.  1h</p>
                </div>
            </div>

            

            </div>
            <hr></hr>


            <div className='messgare-third-section'>
            <img src={circle}></img>
            <h1>Your messages</h1>
            <p>Send private photos and messages to a friend or group</p>
            <button>Send message</button>
            </div>
        </div>
      </>
    )
  
}

export default Message;
