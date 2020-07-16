import React from "react";
import style from "./Preloader.module.css";
import animation from "../../../assets/animation/04de2e31234507.564a1d23645bf.gif";

const Preloader = (props) => {
  return (
    <>
      <div className={style.avaImg}>
        <img src={animation} />
      </div>
    </>
  );
};

export default Preloader;
