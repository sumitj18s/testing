import { takeLatest, call, put } from "redux-saga/effects";
import createAsyncActionType from "../utils/reduxUtils";
import { getData } from "../../services";
import { BASE_URL } from "../../constants";

// Initialize State
const initialState = Object.freeze({
  response: [],
  url: "",
});

// ACTIONS
const LOAD_QUESTIONS = createAsyncActionType("poll-app/questions/LOAD");

// Action Creators
export const loadQuestions = (url) => {
  return {
    type: LOAD_QUESTIONS.PENDING,
    url,
  };
};

// Reducer
export function questionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTIONS.PENDING:
      return { ...state, url: action.url };
    case LOAD_QUESTIONS.SUCCESS:
      return { ...state, response: action.data };
    default:
      return state;
  }
}

function* loadQuestionsSaga() {
  const data = yield call(getData, `${BASE_URL}/questions`);
  yield put({ type: LOAD_QUESTIONS.SUCCESS, data });
}

export default [takeLatest(LOAD_QUESTIONS.PENDING, loadQuestionsSaga)];
