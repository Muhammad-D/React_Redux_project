import Dialogs from "./Dialogs";
import {
  actionCreaterAddMessage,
  actionCreaterChangeMessage,
} from "../../redux/dialog-reducer";
import { connect } from "react-redux";
import WithAuthReddirect from "../hoc/withAuthRedirect";
import { compose } from "redux";

//

let mapStateToProps = (state) => ({
  dialogs: state.dialogPage.dialogs,
  messages: state.dialogPage.messages,
});

let mapDispatchToProps = (dispatch) => ({
  addMessage: (newMessageText) =>
    dispatch(actionCreaterAddMessage(newMessageText)),
});

export default compose(
  WithAuthReddirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);

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
