import React from "react";
import {
  actionCreaterAddPost,
  actionCreaterChangePost,
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

let mapStateToProps = (state) => ({
  profilePage: state.profilePage,
});

let mapDispatchToProps = (dispatch) => ({
  addPost: () => {
    dispatch(actionCreaterAddPost());
  },
  onPostChange: (value) => {
    dispatch(actionCreaterChangePost(value));
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
