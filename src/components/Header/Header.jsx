import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, email, logOut }) => {
  return (
    <header className="header">
      <div className="header__auth-block">
        {isAuth ? (
          <div>
            <div>{login}</div>
            <div>{email}</div>
            <div>
              <button onClick={logOut}>Log out</button>
            </div>
          </div>
        ) : (
          <NavLink to="/login">LOGIN...</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
