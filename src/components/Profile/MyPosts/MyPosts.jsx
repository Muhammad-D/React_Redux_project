import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let postData = [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "Itq's my first post" }
  ];

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
      <div className={s.posts}>
        <Post message={postData[0].message} likes={postData[0].likeCount} />
        <Post message={postData[1].message} likes={postData[1].likeCount} />
      </div>
    </div>
  );
};

export default MyPosts;
