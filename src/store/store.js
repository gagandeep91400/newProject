import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../redux/rootReducer';
import rootSaga from '../redux/rootSaga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
sagaMiddleware.run(rootSaga);
export default Store;