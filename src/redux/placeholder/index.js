import { takeLatest, call, put } from "redux-saga/effects";
import createAsyncActionType from "../utils/reduxUtils";
import { getData, postData } from "../../API";

// Initialize State
const initialState = Object.freeze({
  data: {},
  details: {},
  count: "",
});

// ACTIONS
const FETCH_API = createAsyncActionType("my-app/api/FETCH");
const FETCH_SEC_API = createAsyncActionType("my-app/api/FETCH_SEC_API");
const FETCH_SUBMIT_API = createAsyncActionType("my-app/api/FETCH_SUBMIT_API");

// Action Creators
export const fetchAPI = (url) => {
  return {
    type: FETCH_API.PENDING,
    url,
  };
};

export const fetchSecondAPI = (url) => {
  return {
    type: FETCH_SEC_API.PENDING,
    url,
  };
};

export const fetchVoteAPI = (url) => {
  return {
    type: FETCH_SUBMIT_API.PENDING,
    url,
  };
};

// Reducer
export default function placeholderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_API.PENDING:
      return { ...state, count: action.url };
    case FETCH_API.SUCCESS:
      return { ...state, data: action.data };
    case FETCH_SEC_API.PENDING:
      return { ...state, count: action.url };
    case FETCH_SEC_API.SUCCESS:
      return { ...state, detail: action.data };
    case FETCH_SUBMIT_API.PENDING:
      return { ...state, count: action.url };
    case FETCH_SUBMIT_API.SUCCESS:
      return { ...state, vote: action.data };
    default:
      return state;
  }
}

function* fetchApi() {
  const data = yield call(getData, "https://polls.apiblueprint.org/questions");
  yield put({ type: FETCH_API.SUCCESS, data });
}

function* fetchSecApi(props) {
  const data = yield call(
    getData,
    `https://polls.apiblueprint.org${props.url}`
  );
  yield put({ type: FETCH_SEC_API.SUCCESS, data });
}

function* fetchVoteApi(props) {
  const data = yield call(
    postData,
    `https://polls.apiblueprint.org${props.url}`
  );
  yield put({ type: FETCH_SUBMIT_API.SUCCESS, data });
}

export function* fetchData() {
  yield takeLatest(FETCH_API.PENDING, fetchApi);
  yield takeLatest(FETCH_SEC_API.PENDING, fetchSecApi);
  yield takeLatest(FETCH_SUBMIT_API.PENDING, fetchVoteApi);
}
