import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.state.posts.map((p, i) => (
    <Post key={i.toString()} message={p.message} likes={p.likeCount} />
  ));

  // let createPostRef = React.createRef();

  let addPost = () => {
    // let text = createPostRef.current.value;
    props.addPost();
    // createPostRef.current.value = "";
  };

  return (
    <div>
      <h3>My post</h3>
      <div>
        <div>
          <textarea ref={props.state.createPostRef}></textarea>
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
