const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Victor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi mate!" },
    { id: 1, message: "Hello,bro" },
    { id: 1, message: "What's going on there?" },
    { id: 1, message: "Everything is fine! Thanks for asking" },
    { id: 1, message: "Would you like to hang out tomorrow?" },
    { id: 1, message: "You won't believe, I wanted to ask you" },
    { id: 1, message: "Niiiice!!! So, see dog" },
    { id: 1, message: "See you bro" },
  ],
  newMessageText: "enter message",
};

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let _newMessage = {
        id: 1,
        message: state.newMessageText,
      };
      let stateCopy = { ...state };
      stateCopy.newMessageText = "";
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(_newMessage);
      return stateCopy;
    }
    case CHANGE_MESSAGE: {
      let stateCopy = { ...state };
      let newText = action.newTextOfMessage;
      stateCopy.newMessageText = newText;
      return stateCopy;
    }
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
