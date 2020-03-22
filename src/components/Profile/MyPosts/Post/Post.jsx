import React from "react";
import s from "./Post.module.css";

const Post = props => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://media.mnn.com/assets/images/2019/01/grumpy_cat.jpg.653x0_q80_crop-smart.jpg" />
        {props.message}
        <div>
          <span> {props.likes} Like</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
