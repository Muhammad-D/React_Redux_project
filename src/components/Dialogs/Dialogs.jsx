import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChange = (e) => {
    let value = e.target.value;
    props.onMessageChange(value);
  };

  if (!props.isAuth) return <Redirect to="/login" />;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.sendText}>
        <textarea
          onChange={onMessageChange}
          value={props.newMessageText}
          className={s.textarea}
          placeholder="Enter your message"
        ></textarea>
        <div>
          <button onClick={addMessage}>SEND Messsage</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
