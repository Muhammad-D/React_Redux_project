import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Technologies />
    </div>
  );
};

const Technologies = () => {
  return (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
    </ul>
  );
};

const Header = () => {
  return (
    <div className="App">
      <a href="#s">Home</a>
      <br />
      <a href="#s">News Feed</a>
      <br />
      <a href="#s">Messages</a>
    </div>
  );
};

export default App;
