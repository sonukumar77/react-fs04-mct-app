const INITIAL_STATE = {
  user: {
    isLoggedIn: false
  },
  userInfo: null,
  blogs: []
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, user: { ...state.user, isLoggedIn: true } };
    case "LOGOUT_USER":
      return { ...state, user: { ...state.user, isLoggedIn: false } };
    case "ADD_USER_INFO":
      return { ...state, userInfo: action.payload };
    case "ADD_BLOG":
      return { ...state, blogs: [...state.blogs, action.payload] };
    default: {
      return state;
    }
  }
};
