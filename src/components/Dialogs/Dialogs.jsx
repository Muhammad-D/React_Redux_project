import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog}>Dimych</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Victor</div>
        <div className={s.dialog}>Valera</div>
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
