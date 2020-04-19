import React from "react";
import Dialogs from "./Dialogs";
import {
  actionCreaterAddMessage,
  actionCreaterChangeMessage,
} from "../../redux/dialog-reducer";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogPage;

        let addMessage = () => {
          store.dispatch(actionCreaterAddMessage());
        };

        let onMessageChange = (value) => {
          store.dispatch(actionCreaterChangeMessage(value));
        };
        return (
          <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
