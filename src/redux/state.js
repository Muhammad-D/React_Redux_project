import React from "react";

const ADD_NEW_POST = "ADD-NEW-POST";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const CHANGE_POST = "CHANGE-POST";
const CHANGE_MESSAGE = "CHANGE-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, likeCount: 15, message: "Hi, how are you?" },
        { id: 2, likeCount: 4, message: "It's my first post" },
        { id: 3, likeCount: 8, message: "It's great to be here" },
      ],
      newPostText: "enter your Post",
    },
    dialogsPage: {
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
    },
    navbar: {
      friends: [
        {
          name: "Chick",
          img:
            "https://cdn.pixabay.com/photo/2014/05/20/21/20/easter-349026__340.jpg",
        },
        {
          name: "Squirrel",
          img:
            "https://image.shutterstock.com/image-photo/small-lovely-ground-squirrel-on-260nw-659858677.jpg",
        },
        {
          name: "Cogi",
          img:
            "https://as2.ftcdn.net/jpg/02/33/24/33/500_F_233243331_URKipvaiQJOzmxQiYqabkvWRmY28yL9I.jpg",
        },
      ],
    },
  },
  _callSubscribers() {},

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscribers = observer;
  },
  dispatch(action) {
    if (action.type === ADD_NEW_POST) {
      let _newPost;
      _newPost = {
        id: 4,
        likeCount: 0,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.newPostText = "";
      action.nPost.push(_newPost);
      this._callSubscribers(this._state);
    } else if (action.type === ADD_NEW_MESSAGE) {
      let _newMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.newMessageText = "";
      action.nMessage.push(_newMessage);
      this._callSubscribers(this._state);
    } else if (action.type === CHANGE_POST) {
      let newText = action.newTextOfPost;
      this._state.profilePage.newPostText = newText;
      this._callSubscribers(this._state);
    } else if (action.type === CHANGE_MESSAGE) {
      let newText = action.newTextOfMessage;
      this._state.dialogsPage.newMessageText = newText;
      this._callSubscribers(this._state);
    }
  },
};

export const actionCreaterAddPost = () => ({
  type: ADD_NEW_POST,
  nPost: store.getState().profilePage.posts,
});

export const actionCreaterAddMessage = () => ({
  type: ADD_NEW_MESSAGE,
  nMessage: store.getState().dialogsPage.messages,
});

export const actionCreaterChangePost = (value) => ({
  type: CHANGE_POST,
  newTextOfPost: value,
});

export const actionCreaterChangeMessage = (value) => ({
  type: CHANGE_MESSAGE,
  newTextOfMessage: value,
});

window.store = store;

export default store;
