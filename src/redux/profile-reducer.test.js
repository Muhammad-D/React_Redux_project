import profileReducer, {
  actionCreaterAddPost,
  deletePost,
} from "./profile-reducer";

let initialState = {
  posts: [
    { id: 1, likeCount: 15, message: "Hi, how are you?" },
    { id: 2, likeCount: 4, message: "It's my first post" },
    { id: 3, likeCount: 8, message: "It's great to be here" },
  ],
};

test("does reducer add posts", () => {
  //1. intial data

  //2. action

  let newState = profileReducer(
    initialState,
    actionCreaterAddPost("test went well")
  );

  //3. expectation

  expect(newState.posts.length).toBe(4);
});

test("does reducer add given post", () => {
  //1. intial data

  //2. action

  let newState = profileReducer(
    initialState,
    actionCreaterAddPost("test went well")
  );

  //3. expectation

  expect(newState.posts["3"].message).toBe("test went well");
});

test("does delete action work correct", () => {
  //1. intial data

  let action = deletePost(1);

  //2. action

  let newState = profileReducer(initialState, action);

  //3. expectation

  expect(newState.posts.length).toBe(2);
});
