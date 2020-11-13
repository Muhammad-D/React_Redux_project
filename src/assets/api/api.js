import Axios from "axios";

const instance = Axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "f248ac78-049f-497e-bdd4-0bacb32ee681",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const userAPI = {
  async getUsers(pageSize = 100, currentPage = 1) {
    const res = await instance.get(
      `users?count=${pageSize}&page=${currentPage}`
    );
    return res.data;
  },
  async getFollow(id) {
    const res = await instance.post(`follow/${id}`);
    return res.data;
  },
  async getUnfollow(id) {
    const res = await instance.delete(`follow/${id}`);
    return res.data;
  },
};

export const authAPI = {
  async getAuthorization() {
    const res = await instance.get(`auth/me`);
    return res.data;
  },
  async logIn({ email, password, rememberMe }) {
    const res = await instance.post(`auth/login`, {
      email,
      password,
      rememberMe,
    });
    return res.data;
  },
  async logOut() {
    const res = await instance.delete(`auth/login`);
    return res.data;
  },
};

export const profileAPI = {
  async getProfile(userId) {
    const response = await instance.get(`profile/${userId}`);
    return response.data;
  },
  async getStatus(userId) {
    const res = await instance.get(`profile/status/${userId}`);
    return res.data;
  },
  async updataStatus(status) {
    const res = await instance.put(`profile/status`, { status });
    return res.data;
  },
  async uploadPhotos(photos) {
    const formData = new FormData();
    formData.append("image", photos);
    const res = await instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  },
};

// import * as Axios from "axios";

// const instance = Axios.create({
//   withCredentials: true,
//   headers: {
//     "API-KEY": "01899cbc-f994-420f-95ae-a25b4312fe06",
//   },
//   baseURL: "https://social-network.samuraijs.com/api/1.0/",
// });

// export const userAPI = {
//   getUsers(pageSize = 100, currentPage = 1) {
//     return instance
//       .get(`users?count=${pageSize}&page=${currentPage}`)
//       .then((response) => response.data);
//   },
//   getFollow(id) {
//     return instance.post(`follow/${id}`).then((response) => response.data);
//   },
//   getUnfollow(id) {
//     return instance.delete(`follow/${id}`).then((response) => response.data);
//   },
// };

// export const headerAPI = {
//   getAuthorization() {
//     return instance.get("auth/me").then((response) => response.data);
//   },
// };
