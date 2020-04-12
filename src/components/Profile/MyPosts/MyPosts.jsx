import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.profilePage.posts.map((p, i) => (
    <Post key={i.toString()} message={p.message} likes={p.likeCount} />
  ));

  let addPost = () => {
    let condition = false;
    let posts = props.state.profilePage.posts;
    props.addSmth(posts, condition);
  };

  let onPostChange = () => {
    let newPostText = false;
    props.onSmthChange(newPostText);
  };

  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={props.state.createRef}
            value={props.state.profilePage.newPostText}
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
