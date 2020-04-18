import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DiakogItem/DialogItem";
import Message from "./Message/Message";
import {
  actionCreaterAddMessage,
  actionCreaterChangeMessage,
} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogsPage.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.dialogsPage.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  let addMessage = () => {
    props.dispatch(actionCreaterAddMessage());
  };

  let onMessageChange = (e) => {
    let value = e.target.value;
    props.dispatch(actionCreaterChangeMessage(value));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div className={s.sendText}>
        <textarea
          onChange={onMessageChange}
          value={props.state.dialogsPage.newMessageText}
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
