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
