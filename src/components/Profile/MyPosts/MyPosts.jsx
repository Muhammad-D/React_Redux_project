import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utilities/validation/validation";
import { TextArea } from "../../common/FormsControlers/FormsControlers";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  let postsElements = props.posts.map((p, i) => (
    <Post key={i.toString()} message={p.message} likes={p.likeCount} />
  ));

  let addPost = (formData) => {
    props.addPost(formData.newPostBody);
  };

  return (
    <div>
      <h3>My post</h3>
      <MyPostsReduxForm onSubmit={addPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder="Enter your Post"
          name="newPostBody"
          component={TextArea}
          validate={[requiredField, maxLength10]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({ form: "posts" })(MyPostsForm);

export default MyPosts;
