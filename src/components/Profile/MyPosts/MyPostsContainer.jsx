import { actionCreaterAddPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
});

let mapDispatchToProps = (dispatch) => ({
  addPost: (newPostBody) => {
    dispatch(actionCreaterAddPost(newPostBody));
  },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
