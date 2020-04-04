import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DiakogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogsElements = props.dialogsData.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsData.messages.map((m, i) => (
    <Message key={i.toString()} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
