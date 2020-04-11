import { renderEntireTree } from "../render";
import React from "react";

let state = {
  profilePage: {
    posts: [
      { id: 1, likeCount: 15, message: "Hi, how are you?" },
      { id: 2, likeCount: 4, message: "It's my first post" },
      { id: 3, likeCount: 8, message: "It's great to be here" },
    ],
    createPostRef: React.createRef(),
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
    messages: {
      messages: [
        { id: 1, message: "Hi mate!" },
        { id: 1, message: "Hello,bro" },
        { id: 1, message: "What's going on there?" },
        { id: 1, message: "Everything is fine! Thanks for asking" },
        { id: 1, message: "Would you like to hang out tomorrow?" },
        {
          id: 1,
          message: "You won't believe, I wanted to ask you the same question",
        },
        { id: 1, message: "Niiiice!!! So, see dog" },
        { id: 1, message: "See you bro" },
      ],
    },
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
};

export let addPost = () => {
  debugger;
  let text = state.profilePage.createPostRef.current.value;
  let _newPost = { id: 4, likeCount: 0, message: text };
  state.profilePage.posts.push(_newPost);
  // state.profilePage.createPostRef.current.value = "";
  renderEntireTree(state, addPost);
};

export default state;
