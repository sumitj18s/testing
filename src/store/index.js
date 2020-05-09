import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "../redux";
import rootReducer from "../redux/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga);

export default store;
