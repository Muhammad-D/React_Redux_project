import React from "react";
import {
  actionCreaterAddPost,
  actionCreaterChangePost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        let addPost = () => {
          store.dispatch(actionCreaterAddPost());
        };

        let onPostChange = (value) => {
          store.dispatch(actionCreaterChangePost(value));
        };
        return (
          <MyPosts
            addPost={addPost}
            onPostChange={onPostChange}
            state={state}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
