import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import placeholderReducer, {fetchData} from '../redux/placeholder';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(placeholderReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
    // other store enhancers if any
    ));

sagaMiddleware.run(fetchData)

export default store;
