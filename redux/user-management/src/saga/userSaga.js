// userSaga.js
import { put, takeLatest, all } from 'redux-saga/effects';
import { ActionTypes, setUsers, showAlert } from '../redux/action';
import axios from 'axios';

function* getUsers() {
  try {
    const response = yield axios.get('https://jsonplaceholder.typicode.com/users');
    yield put(setUsers(response.data));
  } catch (error) {
    yield put(showAlert('Failed to get users'));
  }
}

function* deleteUser(action) {
  try {
    yield axios.delete(`https://jsonplaceholder.typicode.com/users/${action.payload}`);
    yield put(showAlert('User deleted successfully, response status 200'));
  } catch (error) {
    yield put(showAlert('Failed to delete user'));
  }
}

function* watchActions() {
  yield takeLatest(ActionTypes.GET_USERS, getUsers);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUser);
}

export default function* userSaga() {
  yield all([watchActions()]);
}