import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import SubNavFriends from "./SubNavFriends/SubNavFriends";

const Navbar = (props) => {
  let subNavbar = props.store
    .getState()
    .sidebar.friends.map((f, i) => (
      <SubNavFriends
        key={i.toString()}
        friendsName={f.name}
        friendsImg={f.img}
      />
    ));

  return (
    <nav className={s.nav}>
      <div className={s.mainNavbar}>
        <div className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/profile">
            Profile
          </NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink activeClassName={s.activeLink} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/news">
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/music">
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink activeClassName={s.activeLink} to="/settings">
            Settings
          </NavLink>
        </div>
      </div>
      <div className={s.subNavbarFriends}>
        <div className={s.title}>Your Friends</div>
        <div className={s.navFriends}>{subNavbar}</div>
      </div>
      <div className={s.subNavbarSomething}></div>
    </nav>
  );
};

export default Navbar;
