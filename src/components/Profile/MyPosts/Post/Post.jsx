import React from "react";
import "./Post.scss";

const Post = ({ message }) => {
  return (
    <div className="post">
      <img
        className="post__img"
        src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg"
      />

      <div className="post__text">{message}</div>
    </div>
  );
};

export default Post;
