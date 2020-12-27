import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";

const Header = ({ isAuth, login, logOut }) => {
  return (
    <header className="header">
      <div className="header__auth-block">
        {isAuth ? (
          <>
            <div className="header__user">
              Welcome! <span className="header__login">{login}</span>
            </div>
            <div>
              <button className="header__logout-btn" onClick={logOut}>
                <ExitToAppRoundedIcon />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="header__user">
              Welcome! <span className="header__login">Guest</span>
            </div>
            <div>
              <button className="header__logout-btn">
                <NavLink to="/login">
                  <VpnKeyRoundedIcon />
                </NavLink>
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
