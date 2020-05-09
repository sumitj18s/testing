import { takeLatest, call, put } from "redux-saga/effects";
import createAsyncActionType from "../utils/reduxUtils";
import { getData, postData } from "../../services";

// Initialize State
const initialState = Object.freeze({
  response: {},
  url: "",
});
// ACTIONS
const LOAD_QUESTION_DETAILS = createAsyncActionType(
  "poll-app/question-details/LOAD"
);
const UPDATE_VOTE = createAsyncActionType("poll-app/vote/UPDATE");

// Action Creators

export const loadQuestionDetails = (url) => {
  return {
    type: LOAD_QUESTION_DETAILS.PENDING,
    url,
  };
};

export const updateVote = (url) => {
  return {
    type: UPDATE_VOTE.PENDING,
    url,
  };
};

// Reducer
export function questionDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTION_DETAILS.PENDING:
      return { ...state, url: action.url };
    case LOAD_QUESTION_DETAILS.SUCCESS:
      return { ...state, response: action.data };
    case UPDATE_VOTE.PENDING:
      return { ...state, url: action.url };
    case UPDATE_VOTE.SUCCESS:
      return { ...state, response: action.data };
    default:
      return state;
  }
}

function* loadQuestionDetailsSaga(props) {
  const data = yield call(
    getData,
    `https://polls.apiblueprint.org${props.url}`
  );
  yield put({ type: LOAD_QUESTION_DETAILS.SUCCESS, data });
}

function* updateVoteSaga(props) {
  const data = yield call(
    postData,
    `https://polls.apiblueprint.org${props.url}`
  );
  yield put({ type: UPDATE_VOTE.SUCCESS, data });
}

export default [
  takeLatest(LOAD_QUESTION_DETAILS.PENDING, loadQuestionDetailsSaga),
  takeLatest(UPDATE_VOTE.PENDING, updateVoteSaga),
];
