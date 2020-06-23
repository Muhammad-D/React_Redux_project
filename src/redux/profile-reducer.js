const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST = "CHANGE-POST";

let initialState = {
  posts: [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "It's my first post" },
    { id: 3, likeCount: 8, message: "It's great to be here" },
  ],
  newPostText: "enter your Post",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let _newPost;
      _newPost = {
        id: 4,
        likeCount: 0,
        message: state.newPostText,
      };
      let stateCopy = { ...state };
      stateCopy.newPostText = "";
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(_newPost);
      return stateCopy;
    }
    case CHANGE_POST: {
      let stateCopy = { ...state };
      let newText = action.newTextOfPost;
      stateCopy.newPostText = newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default profileReducer;

export const actionCreaterAddPost = () => ({
  type: ADD_NEW_POST,
});

export const actionCreaterChangePost = (value) => ({
  type: CHANGE_POST,
  newTextOfPost: value,
});
