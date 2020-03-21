import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a className={s.item} href="#h">
          Profile
        </a>
      </div>
      <div>
        <a className={`${s.item} ${s.active}`} href="#h">
          Messages
        </a>
      </div>
      <div>
        <a className={s.item} href="#h">
          News
        </a>
      </div>
      <div>
        <a className={s.item} href="#h">
          Music
        </a>
      </div>
      <div>
        <a className={s.item} href="#h">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
