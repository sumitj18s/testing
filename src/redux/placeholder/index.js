import { takeLatest,call, put } from 'redux-saga/effects'
import createAsyncActionType from '../utils/reduxUtils'
import getData from '../../api'

// ACTIONS
const FETCH_API= createAsyncActionType('my-app/api/FETCH');
const FETCH_SEC_API= createAsyncActionType('my-app/api/FETCH_SEC');

const initialState = Object.freeze({
  items: {},
  lastSync: '',
});

// Action Creators
export const fetchAPI = (url)=>{
  return {
    type: FETCH_API.PENDING,
    url
  }
}

export const fetchSecondAPI = (url)=>{
  return {
    type: FETCH_SEC_API.PENDING,
    url
  }
}

// Reducer
export default function placeholderReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_API.PENDING:
      return Object.assign({},state, {count: action.url});
    case FETCH_API.SUCCESS:
          return Object.assign({},state, {data: action.data});
    case FETCH_SEC_API.PENDING:
      return Object.assign({},state, {count: action.url});
    default: return state;
  }
}

function* fetchApi (){
  console.log('saga called');
  const data = yield call( getData,'/api/sample.json');
  yield put({type: FETCH_API.SUCCESS,data})
}

// side effects, only as applicable

export function* fetchData(){
  yield takeLatest(FETCH_API.PENDING, fetchApi)
}