import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DiakogItem/DialogItem";
import Message from "./Message/Message";
import { render } from "@testing-library/react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsPage.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.dialogsPage.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  let addMessage = () => {
    props.dispatch({
      type: "ADD-SMTH",
      condition: true,
      nPostMessage: props.state.dialogsPage.messages,
    });
  };

  let onMessageChange = () => {
    props.dispatch({
      type: "CHANGE-SMTH",
      condition: true,
    });
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.sendText}>
        <textarea
          onChange={onMessageChange}
          value={props.state.dialogsPage.newMessageText}
          ref={props.state.createRef}
          className={s.textarea}
        ></textarea>
        <div>
          <button onClick={addMessage}>SEND Messsage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
