import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
} from "../redux/action";

const BaseURL = "https://jsonplaceholder.typicode.com/users";

function* getUser(action) {
  try {
    const response = yield axios.get(BaseURL);
    yield put({ type: FETCH_USER_SUCCESS, payload: response.data });
  } catch (error) {
    console.log("error - getUser : ", error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_USER, getUser);
}
