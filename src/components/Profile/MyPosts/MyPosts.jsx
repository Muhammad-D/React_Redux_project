import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postsElements = props.posts1.map(p => (
    <Post message={p.message} likes={p.likeCount} />
  ));

  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
