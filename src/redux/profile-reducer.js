const ADD_NEW_POST = "ADD-NEW-POST";
const CHANGE_POST = "CHANGE-POST";

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let _newPost;
      _newPost = {
        id: 4,
        likeCount: 0,
        message: state.newPostText,
      };
      state.newPostText = "";
      state.posts.push(_newPost);
      return state;
    case CHANGE_POST:
      let newText = action.newTextOfPost;
      state.newPostText = newText;
      return state;
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
