import React from "react";

let store = {
  _state: {
    createRef: React.createRef(),
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
  getState() {
    return this._state;
  },
  onSmthChange(nText) {
    let newText = this._state.createRef.current.value;
    if (nText == false) {
      this._state.profilePage.newPostText = newText;
    } else if (nText == true) {
      this._state.dialogsPage.newMessageText = newText;
    }
    this._renderEntireTree(this._state);
  },
  addSmth(nPostMessage, condetion) {
    let _newPostMessage = "";
    if (condetion == false) {
      _newPostMessage = {
        id: 4,
        likeCount: 0,
        message: this._state.profilePage.newPostText,
      };
      this._state.profilePage.newPostText = "";
    } else if (condetion == true) {
      _newPostMessage = {
        id: 1,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.newMessageText = "";
    }
    nPostMessage.push(_newPostMessage);
    this._renderEntireTree(this._state);
  },
  _renderEntireTree() {},
  subscriber(observer) {
    this._renderEntireTree = observer;
  },
};

window.store = store;

export default store;
