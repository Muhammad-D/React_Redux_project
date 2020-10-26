import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";

const Dialogs = (props) => {
  let dialogsElements = props.dialogs.map((d, i) => (
    <DialogItem key={i.toString()} name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m, i) => (
    <Message key={i} message={m.message} />
  ));

  let addMessage = (formData) => {
    props.addMessage(formData.newMessageText);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <DialogsReduxForm onSubmit={addMessage} />
    </div>
  );
};

const DialogsForm = (props) => {
  return (
    <form className={s.sendText} onSubmit={props.handleSubmit}>
      <Field
        name="newMessageText"
        className={s.textarea}
        component="textarea"
        placeholder="Enter your message"
      ></Field>
      <div>
        <button>SEND Messsage</button>
      </div>
    </form>
  );
};

const DialogsReduxForm = reduxForm({ form: "dialogs" })(DialogsForm);

export default Dialogs;
