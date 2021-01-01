import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import {
  AccountBoxRounded,
  Chat,
  Group,
  MusicNote,
  NewReleases,
  Settings,
} from "@material-ui/icons";

import logo from "../../assets/images/logo-icon.svg";

const Navbar = (props) => {
  return (
    <div className="nav-bar">
      <img src={logo} alt="page logo" className="nav-bar__logo" />
      <nav className="nav-bar__wrapper">
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/profile">
            <AccountBoxRounded />
            <span className="nav-bar__tooltip">Profile</span>
          </NavLink>
        </div>
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/dialogs">
            <Chat />
            <span className="nav-bar__tooltip">Messages</span>
          </NavLink>
        </div>
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/users">
            <Group />
            <span className="nav-bar__tooltip">Users</span>
          </NavLink>
        </div>
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/news">
            <NewReleases />
            <span className="nav-bar__tooltip">News</span>
          </NavLink>
        </div>
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/music">
            <MusicNote />
            <span className="nav-bar__tooltip">Music</span>
          </NavLink>
        </div>
        <div className="nav-bar__item">
          <NavLink activeClassName="nav-bar__active-link" to="/settings">
            <Settings />
            <span className="nav-bar__tooltip">Settings</span>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
