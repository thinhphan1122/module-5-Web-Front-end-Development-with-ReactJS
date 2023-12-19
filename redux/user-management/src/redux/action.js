// action.js
export const ActionTypes = {
  GET_USERS: "GET_USERS",
  DELETE_USER: "DELETE_USER",
  SET_USERS: "SET_USERS",
  SHOW_ALERT: "SHOW_ALERT",
};

export const getUsers = () => ({
  type: ActionTypes.GET_USERS,
});

export const deleteUser = (userId) => ({
  type: ActionTypes.DELETE_USER,
  payload: userId,
});

export const setUsers = (users) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});

export const showAlert = (message) => ({
  type: ActionTypes.SHOW_ALERT,
  payload: message,
});
