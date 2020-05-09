import { all } from "redux-saga/effects";
import questionDetailsSagas from "./question-details";
import questionSagas from "./questions";

export default function* rootSaga() {
  yield all([...questionDetailsSagas, ...questionSagas]);
}
