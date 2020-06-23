import React from "react";
import Dialogs from "./Dialogs";
import {
  actionCreaterAddMessage,
  actionCreaterChangeMessage,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";

//

let mapStateToProps = (state) => ({
  dialogs: state.dialogPage.dialogs,
  messages: state.dialogPage.messages,
  newMessageText: state.dialogPage.newMessageText,
});

let mapDispatchToProps = (dispatch) => ({
  addMessage: () => dispatch(actionCreaterAddMessage()),
  onMessageChange: (value) => dispatch(actionCreaterChangeMessage(value)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

// const DialogsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogPage;

//         let addMessage = () => {
//           store.dispatch(actionCreaterAddMessage());
//         };

//         let onMessageChange = (value) => {
//           store.dispatch(actionCreaterChangeMessage(value));
//         };
//         return (
//           <Dialogs
//             addMessage={addMessage}
//             onMessageChange={onMessageChange}
//             state={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
