import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DiakogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" }
  ];

  let messages = [
    { id: 1, message: "Hi mate!" },
    { id: 1, message: "What's going on there?" },
    { id: 1, message: "Would you like to hang out tomorrow?" },
    { id: 1, message: "Yo" }
  ];

  let dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map(m => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
