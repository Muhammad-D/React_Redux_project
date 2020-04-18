import React from "react";
import {
  actionCreaterAddPost,
  actionCreaterChangePost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;

  let addPost = () => {
    props.store.dispatch(actionCreaterAddPost());
  };

  let onPostChange = (value) => {
    props.store.dispatch(actionCreaterChangePost(value));
  };

  return (
    <MyPosts addPost={addPost} onPostChange={onPostChange} state={state} />
  );
};

export default MyPostsContainer;
