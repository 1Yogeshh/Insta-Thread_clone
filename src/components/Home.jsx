import React, {useState} from "react";
import "./Home.css";
import { Outlet, Link, useNavigate } from 'react-router-dom';
import instalogo from "./insta-logo.png"
import reels from "./video.png"
import search from "./search.png"
import msg from "./messenger.png"
import msg1 from "./messenger.png"
import home from "./home.png"
import explore from "./direction.png"
import create from "./add.png"
import heart from "./heart (1).png"
import heart1 from "./heart.png"
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
import newpost from "./gallery.png"


const Home=()=>{
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

                    <button className="m-buttons1" onClick={closemodal1}>
                    <img src={home} alt="apd"></img>
                    
                    </button>

                    <button className="m-buttons1" onClick={closemodal1}>
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

                    <button className="buttons1">
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


                    <button className="buttons1" onClick={()=>{navigate("/message")}}>
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

                    <button className="buttons1" onClick={()=>{navigate("/profile")}}>
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


            <div className="hero-section">
            <div className="hero-section-upper">
                <div className="story1">
                    <div><a href="#"><img src={hero4}></img></a></div>
                    <div><p>virat..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero3}></img></a></div>
                    <div><p>void_..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero2}></img></a></div>
                    <div><p>tyson..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero4}></img></a></div>
                    <div><p>kohli..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero}></img></a></div>
                    <div><p>dahiya..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero3}></img></a></div>
                    <div><p>vvoid..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero2}></img></a></div>
                    <div><p>kumar..</p></div>
                </div>
                <div className="story1">
                    <div><a href="#"><img src={hero2}></img></a></div>
                    <div><p>yogesh..</p></div>
                </div>
            </div>



            <div className="hero-section-mid">
                <div className="first">
                    <button className="hero-button">
                    <img src={hero} alt="apd"></img>
                    <span>virat_kohli</span>
                    <p>.5h</p>
                    </button>
                    <span className="dot"><img src={dot} alt="apd"></img></span>
                </div>
                <div className="second">
                <img src={hero} alt="apd"></img>
                </div>
                <div className="third">
                <div className="lcs">
                    <img src={like}></img>
                    <img src={comment}></img>
                    <img src={share}></img>
                </div>
                <div className="sv">
                <img src={save}></img>
                </div>
                </div>
                <p className="p">Liked <p> by</p><strong>dahiya_saab_g</strong> and <strong>others</strong></p>
                <p className="p1"><strong>virat_kohli</strong> Forever<p> grateful.</p></p>
                <p className="p2">Add a comment...</p>
                <hr></hr>
                <div className="first">
                    <button className="hero-button">
                    <img src={hero} alt="apd"></img>
                    <span>virat_kohli .</span>
                    <p>5h</p>
                    </button>
                    <span className="dot"><img src={dot} alt="apd"></img></span>
                </div>
                <div className="second">
                <img src={hero} alt="apd"></img>
                </div>
                <div className="third">
                <div className="lcs">
                    <img src={like}></img>
                    <img src={comment}></img>
                    <img src={share}></img>
                </div>
                <div className="sv">
                <img src={save}></img>
                </div>
                </div>
                <p className="p">Liked by <strong>dahiya_saab_g</strong> and <strong>others</strong></p>
                <p className="p1"><strong>virat_kohli</strong> Forever grateful.</p>
                <p className="p2">Add a comment...</p>
                <hr></hr>
            </div>
            </div>
            <div className="footer">
            <div className="id">
                <div className="id-1">
                    <img src={hero4}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <Link to="/login">switch</Link>

                </div>
            </div>
            <div className="id1">
                <p>Suggested for you</p>
                <a href="#">See All</a>
            </div>
            <div className="id2">
                <div className="id-1">
                    <img src={hero4}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <a href="#">Follow</a>

                </div>
                </div>
                <div className="id2">
                <div className="id-1">
                    <img src={hero}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <a href="#">Follow</a>

                </div>
                </div>
                <div className="id2">
                <div className="id-1">
                    <img src={hero3}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <a href="#">Follow</a>

                </div>
                </div>
                <div className="id2">
                <div className="id-1">
                    <img src={hero2}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <a href="#">Follow</a>

                </div>
                </div>
                <div className="id2">
                <div className="id-1">
                    <img src={hero}></img>
                </div>
                <div className="id-2">
                <strong>dahiya_saab_01</strong>
                <p>YOGESH</p>
                </div>
                <div className="id-3">
                <a href="#">Follow</a>

                </div>
                </div>

                <div className="ah">
                    <p>
                    <a href="$">About</a><a href="#">Help</a><a href="#">Press</a>
                    <a href="#">API</a><a href="#">Jobs</a>
                    <a href="#">Privacy</a><a href="#">Terms</a><br></br>
                    <a href="#">Locations</a><a href="#">Language</a>
                    <a href="#">Meta Verified</a></p>
                </div>

                <div className="fm">
                    <p>© 2023 INSTAGRAM FROM META</p>
                </div>
            </div>
        </div>
        <Outlet/>

        </>
        


        
    )
}

export default Home;