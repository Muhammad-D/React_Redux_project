const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [],
  // users: [
  //   {
  //     id: 1,
  //     followed: true,
  //     imgUrl:
  //       "https://cdn.pixabay.com/photo/2020/06/25/15/42/bulldog-french-5340020__340.jpg",
  //     fullName: "Edward",
  //     status: "blaBlaBla",
  //     location: { city: "Kiel", country: "Germany" },
  //   },
  //   {
  //     id: 2,
  //     followed: true,
  //     imgUrl:
  //       "https://cdn.pixabay.com/photo/2016/03/09/09/28/bear-1245807__340.jpg",
  //     fullName: "Luce",
  //     status: "to infinity and beyond",
  //     location: { city: "Tampere", country: "Finland" },
  //   },
  //   {
  //     id: 3,
  //     followed: false,
  //     imgUrl:
  //       "https://cdn.pixabay.com/photo/2019/09/16/14/45/sparrow-4481182__340.jpg",
  //     fullName: "Astrid",
  //     status: "Lalalala",
  //     location: { city: "Orebro", country: "Sweden" },
  //   },
  //   {
  //     id: 4,
  //     followed: false,
  //     imgUrl:
  //       "https://cdn.pixabay.com/photo/2020/06/16/18/15/dog-5306789__340.jpg",
  //     fullName: "Daan",
  //     status: "here I am",
  //     location: { city: "Groningen", country: "Netherlands" },
  //   },
  // ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          } else {
            return u;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          } else {
            return u;
          }
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export default usersReducer;

export const followAC = (userId) => ({
  type: FOLLOW,
  userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  userId,
});
export const setUsersAC = (users) => ({
  type: SET_USERS,
  users,
});
