import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.navbar} />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              state={props.state}
              addMessage={props.addMessage}
              onMessageChange={props.onMessageChange}
            />
          )}
        />
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state}
              addPost={props.addPost}
              onPostChange={props.onPostChange}
            />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
