import React from "react";
import Dialogs from "./Dialogs";
import {
  actionCreaterAddMessage,
  actionCreaterChangeMessage,
} from "../../redux/dialog-reducer";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogPage;

  let addMessage = () => {
    props.store.dispatch(actionCreaterAddMessage());
  };

  let onMessageChange = (value) => {
    props.store.dispatch(actionCreaterChangeMessage(value));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      state={state}
    />
  );
};

export default DialogsContainer;
