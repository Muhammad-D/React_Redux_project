import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  actionCreaterAddPost,
  actionCreaterChangePost,
} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  debugger;
  let postsElements = props.state.posts.map((p, i) => (
    <Post key={i.toString()} message={p.message} likes={p.likeCount} />
  ));

  let addPost = () => {
    props.addPost();
  };

  let onPostChange = (e) => {
    let value = e.target.value;
    props.onPostChange(value);
  };

  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            value={props.state.newPostText}
            placeholder="Enter your Post"
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
