import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DiakogItem/DialogItem";
import Message from "./Message/Message";
import { render } from "@testing-library/react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
