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

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().profilePage;

//         let addPost = () => {
//           store.dispatch(actionCreaterAddPost());
//         };

//         let onPostChange = (value) => {
//           store.dispatch(actionCreaterChangePost(value));
//         };
//         return (
//           <MyPosts
//             addPost={addPost}
//             onPostChange={onPostChange}
//             state={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
