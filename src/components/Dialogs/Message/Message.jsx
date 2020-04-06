import React from "react";
import s from "./../Dialogs.module.css";
import l from "./Message.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={l.myMessage} className={s.myMessage}>
        {props.message}
      </div>
    </div>
  );
};

export default Message;
