import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleWare from 'redux-saga';
import { all } from 'redux-saga/effects';
import { numberReducer, numberSagas ,INumberState } from "./ducks/number";

export type IRootState = {
    number: INumberState;
  }

const rootReducer = combineReducers({
    number: numberReducer
});

function* rootSaga() {
  return yield all([numberSagas])
}

const sagaMiddleware = createSagaMiddleWare();

const middlewares = [ sagaMiddleware ]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;