import React from "react";
import style from "./Preloader.module.css";
import animation from "../../../assets/animation/tenor.gif";

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
