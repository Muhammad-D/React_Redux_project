import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://cdn.pixabay.com/photo/2017/01/27/14/25/coffee-2013192_960_720.png" />
      </header>
      <nav className="nav">
        <div>
          <a href="#h">Profile</a>
        </div>
        <div>
          <a href="#h">Messages</a>
        </div>
        <div>
          <a href="#h">News</a>
        </div>
        <div>
          <a href="#h">Music</a>
        </div>
        <div>
          <a href="#h">Settings</a>
        </div>
      </nav>
      <div className="content">
        <div>
          <img src="https://cdn.pixabay.com/photo/2018/08/03/14/12/hummingbird-3581989_960_720.jpg" />
          <div>ava + description</div>
          <div>
            My post
            <div>New post </div>
            <div>
              <div>post 1</div>
              <div>post 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
