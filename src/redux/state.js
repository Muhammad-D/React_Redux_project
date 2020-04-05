let state = {
  profilePage: {
    posts: [
      { id: 1, likeCount: 15, message: "Hi, how are you?" },
      { id: 2, likeCount: 4, message: "It's my first post" },
      { id: 3, likeCount: 8, message: "It's great to be here" }
    ]
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Dimych" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Sasha" },
      { id: 5, name: "Victor" },
      { id: 6, name: "Valera" }
    ],
    messages: [
      { id: 1, message: "Hi mate!" },
      { id: 1, message: "What's going on there?" },
      { id: 1, message: "Would you like to hang out tomorrow?" },
      { id: 1, message: "Yo" }
    ]
  }
};

export default state;
