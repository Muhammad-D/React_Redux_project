const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let _newMessage = {
        id: 1,
        message: state.newMessageText,
      };
      state.newMessageText = "";
      state.messages.push(_newMessage);
      return state;
    case CHANGE_MESSAGE:
      let newText = action.newTextOfMessage;
      state.newMessageText = newText;
      return state;
    default:
      return state;
  }
};

export default dialogReducer;

export const actionCreaterAddMessage = () => ({
  type: ADD_NEW_MESSAGE,
});

export const actionCreaterChangeMessage = (value) => ({
  type: CHANGE_MESSAGE,
  newTextOfMessage: value,
});
