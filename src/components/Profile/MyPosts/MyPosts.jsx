import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utilities/validation/validation";
import Button from "../../common/Button/Button";
import { TextArea } from "../../common/FormsControlers/FormsControlers";
import "./MyPosts.scss";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(({ posts, addPost }) => {
  let submitPost = (formData) => {
    addPost(formData.newPostBody);
  };

  return (
    <div className="my-posts">
      <div className="my-posts__wrapper">
        <h2 className="my-posts__title">Posts</h2>
        <MyPostsReduxForm onSubmit={submitPost} />
        <div className="my-posts__posts">
          {posts.map((p) => (
            <Post key={p.id} message={p.message} likes={p.likeCount} />
          ))}
        </div>
      </div>
    </div>
  );
});

const MyPostsForm = (props) => {
  return (
    <form className="my-posts-form" onSubmit={props.handleSubmit}>
      <Field
        className="my-posts-form__textarea"
        placeholder="Enter your Post"
        name="newPostBody"
        component={TextArea}
        validate={[requiredField, maxLength10]}
      />
      <div className="my-posts-form__btn">
        <Button>Add post</Button>
      </div>
    </form>
  );
};
const MyPostsReduxForm = reduxForm({ form: "posts" })(MyPostsForm);

export default MyPosts;
