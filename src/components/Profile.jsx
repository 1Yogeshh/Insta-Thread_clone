import React, {useState} from "react";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "./Profile.css";
import instalogo from "./insta-logo.png"
import reels from "./video.png"
import search from "./search.png"
import msg from "./messenger.png"
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
import heart1 from "./heart.png"
import hero3 from "./hero3.png"
import hero4 from "./hero4.png"
import plus from "./plus.png"
import feed from "./feed.png"
import tag from "./tagged.jpg"
import setting from "./settings.png"
import instagramlogo from "./instgram-logo.png"
import newpost from "./gallery.png"


const Profile=()=>{
    
    const navigate= useNavigate();

    const [showModal,setShowModal]=useState(false);

    const closemodal =()=>setShowModal(false);

    const MyModal=()=>{
      return(
        <>
        <div className="modal-wrapper" onClick={closemodal}></div>
          <div className="modal-container">
            <li>
              <div className="list"><button>Apps and Websites</button></div><hr></hr>
              <div className="list"><button>QR Code</button></div><hr></hr>
              <div className="list"><button>Notifications</button></div><hr></hr>
              <div className="list"><button>Settings and privacy</button></div><hr></hr>
              <div className="list"><button>Supervision</button></div><hr></hr>
              <div className="list"><button onClick={()=>{navigate("/login")}}>Log Out</button></div><hr></hr>
              <div className="list"><button onClick={closemodal}>Cancel</button></div>
            </li>
          </div>
        </>
      )
    }

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
                    <img src={msg1} alt="apd"></img>
                    
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


    
    return(
    <>
    
    <div className="home">
          <div className="navbar">
          {showModal1 && <MyModal1/>}
          {showModal2 && <MyModal2/>}
          {showModal3 && <MyModal3/>}
            <div className="logo">
                <img src={instalogo} alt="apd"></img>
                </div>

                <div className="buttons">

                    <button className="buttons1" onClick={()=>navigate("/home")}>
                    <img src={home} alt="apd"></img>
                    <span>Home</span>
                    </button>

                    <button className="buttons1" onClick={()=>setShowModal1(true)}>
                    <img src={search} alt="apd"></img>
                    <span>Search</span>
                    </button>

                    <button className="buttons100" onClick={()=>navigate("/explore")}>
                    <img src={explore} alt="apd"></img>
                    <span>Explore</span>
                    </button>


                    <button className="buttons1" onClick={()=>navigate("/message")}>
                    <img src={msg} alt="apd"></img>
                    <span>Messages</span>
                    </button>

                    <button className="buttons1" onClick={()=>setShowModal3(true)}>
                    <img src={heart} alt="apd"></img>
                    <span>Notifications</span>
                    </button>

                    <button className="buttons1" onClick={()=>setShowModal2(true)}>
                    <img src={create} alt="apd"></img>
                    <span>Create</span>
                    </button>

                    <button className="buttons11">
                    <img src={hero4} alt="apd"></img>
                    <span>Profile</span>
                    </button>

                </div>
                <div className="navbar-footer">

                <button className="buttons2" onClick={()=>navigate("/thread")}>
                    <img src={threads} alt="apd"></img>
                    <span>Threads</span>
                    </button>

                    <button className="buttons2">
                    <img src={more} alt="apd"></img>
                    <span>More</span>
                    </button>

                </div>
            </div>

            <hr></hr>
            
            {showModal && <MyModal/>}
            <div className="pf">
                <div className="pf1">
                <div className="dp-image">
                <img src={hero4}></img>
                </div>

                <div className="dp-name">
                <div className="dp-username">
                <div className="dd1">
                    <p>dahiya_saab_01</p>
                    <button>Edit Profile</button>
                    </div>
                    <div className="btn01">
                    
                    <button>View Archieve</button>
                    <button onClick={()=>setShowModal(true)}>Setting</button>
                    </div>
                </div>
                <div className="dp-follow">
                <a href="#"><p>11  posts</p></a>
                <a href="#"><p>789  followers</p></a>
                <a href="#"><p>190  following</p></a>

                </div>
                <div className="dp-n">
                <p>YOGESH</p>
                </div>

                <div className="dp-n">
                <p>Army</p>
                </div>
                </div>
                 </div>

                <div className="dp-story">
                <div className="dp-story1">
                <img src={hero4}></img>
                <p>Highlight</p>
                </div>

                <div className="dp-story2">
                <img src={hero4}></img>
                <p>Highlight</p>
                </div>
                <div className="dp-story2">
                <img src={plus}></img>
                <p>New</p>
                </div>
                </div>
                
                
                <hr></hr>

                <div className="pf2">
                    <div className="pf4">
                    <button className="pf41">
                    <img src={feed} alt="apd"></img>
                    <span>POST</span>
                    </button>

                    <button className="pf42">
                    <img src={reels} alt="apd"></img>
                    <span>REELS</span>
                    </button>

                    <button className="pf43">
                    <img src={save} alt="apd"></img>
                    <span>SAVED</span>
                    </button>

                    <button className="pf44">
                    <img src={tag} alt="apd"></img>
                    <span>TAGGED</span>
                    </button>
                    </div>

                    <div className="pf3">
                    <div className="pf31">
                        <img src={hero4}></img>
                    </div>
                    <div className="pf31">
                    <img src={hero3}></img>
                    </div>
                    <div className="pf31">
                    <img src={hero2}></img>
                    </div>
                    

                    </div>
                </div>
            </div>

            </div>




    <Outlet/>
    </>
    )
}

export default Profile;