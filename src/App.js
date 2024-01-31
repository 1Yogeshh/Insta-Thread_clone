import React from 'react';
import{Routes, BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Message from './components/Message';
import Explore from './components/Explore';
import Thread from './components/Thread';
import Threadsecond from './components/Threadsecond';
import Threadhome from './components/Threadhome';
import Threadsearch from './components/Threadsearch';
import Threadnotification from './components/Threadnotification';
import Threadfollow from './components/Threadfollow';
import Threadreplies from './components/Threadreplies';
import Threadmention from './components/Threadmention';
import Threadrepost from './components/Threadrepost';
import Threadverified from './components/Threadverified';
import Threadprofile from './components/Threadprofile';
import Threadprofilereplies from './components/Threadprofilereplies';
import Threadprofilerepost from './components/Threadprofilerepost';
import Threadfriendid from './components/Threadfriendid';
import Threadidreplies from './components/Threadidreplies';
import Threadidrepost from './components/Threadidrepost'

const App=()=> {
  return (
    <>
    <Router>
      <Routes>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/message' element={<Message/>}/>
      <Route path='/explore' element={<Explore/>}/>
      <Route path='/thread' element={<Thread/>}/>
      <Route path='/threadsecond' element={<Threadsecond/>}/>
      <Route path='threadhome' element={<Threadhome/>}/>
      <Route path='/threadsearch' element={<Threadsearch/>}/>
      <Route path='/threadnotification' element={<Threadnotification/>}/>
      <Route path='/threadfollow' element={<Threadfollow/>}/>
      <Route path='/threadreplies' element={<Threadreplies/>}/>
      <Route path='/threadmention' element={<Threadmention/>}/>
      <Route path='/threadrepost' element={<Threadrepost/>}/>
      <Route path='/threadverified' element={<Threadverified/>}/>
      <Route path='/threadprofile' element={<Threadprofile/>}/>
      <Route path='/threadprofilereplies' element={<Threadprofilereplies/>}/>
      <Route path='/threadprofilerepost' element={<Threadprofilerepost/>}/>
      <Route path='/threadfriendid' element={<Threadfriendid/>}/>
      <Route path='/threadidreplies' element={<Threadidreplies/>}/>
      <Route path='/threadidrepost' element={<Threadidrepost/>}/>
      </Routes>
    </Router>

    </>
  )
}

export default App;
