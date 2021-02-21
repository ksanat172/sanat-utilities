import { applyMiddleware, createStore } from "redux";
import combineReducers from './combine-reducers';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootSaga from '../../src/sagas/rootSaga';

const sagaMiddleWare = createSagaMiddleware();
const store = createStore(combineReducers,applyMiddleware(sagaMiddleWare,thunk));

sagaMiddleWare.run(rootSaga);

export default store;



