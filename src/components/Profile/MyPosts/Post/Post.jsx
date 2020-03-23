import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg" />
        {props.message}
        <div>
          <span> {props.likes} Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
