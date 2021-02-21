import {
  watchDisplayUsersFunction,
  watchAddUserFunction,
  watchRemoveUserFunction,
} from "./homesaga";
import { fork, all } from "redux-saga/effects";

export default function* rootsaga() {
  yield all([
    fork(watchDisplayUsersFunction),
    fork(watchAddUserFunction),
    fork(watchRemoveUserFunction),
  ]);
}
