export const loginUser = (data) => {
  return {
    type: "LOGIN_USER",
    payload: data
  };
};

export const logoutUser = (data) => {
  return {
    type: "LOGOUT_USER",
    payload: data
  };
};

export const addBlog = (data) => {
  return {
    type: "ADD_BLOG",
    payload: data
  };
};
export const addUserInfo = (data) => {
  return {
    type: "ADD_USER_INFO",
    payload: data
  };
};
