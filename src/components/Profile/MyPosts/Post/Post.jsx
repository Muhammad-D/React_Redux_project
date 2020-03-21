import React from "react";
import s from "./Post.module.css";

const Post = () => {
  return (
    <div>
      <div className={s.item}>
        <img src="https://media.mnn.com/assets/images/2019/01/grumpy_cat.jpg.653x0_q80_crop-smart.jpg" />
        post 1
        <div>
          <span>Like</span> <span>DisLike</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
