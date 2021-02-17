import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './db/user.json';
import FeedBack from './components/FeedBack/FeedBack';


function App() {
  return (
    <>
      <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        <FeedBack/>
    </>
  );
}

export default App;
