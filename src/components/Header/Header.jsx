import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, email }) => {
  return (
    <header className={style.header}>
      <img src="https://cdn.pixabay.com/photo/2017/01/27/14/25/coffee-2013192_960_720.png" />
      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            <div>{login}</div>
            <div>{email}</div>
          </div>
        ) : (
          <NavLink to="/login">LOGIN...</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
