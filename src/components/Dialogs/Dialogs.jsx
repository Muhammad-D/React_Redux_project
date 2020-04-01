import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Dimych</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/2">Andrey</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Victor</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi mate!</div>
        <div className={s.message}>What's going on there?</div>
        <div className={s.message}>Would you like to hang out tomorrow?</div>
      </div>
    </div>
  );
};

export default Dialogs;
