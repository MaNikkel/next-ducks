import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { DefaultRootState } from "react-redux";
import numberReducer, { INumberState } from "./ducks/number";

const rootReducer = combineReducers({
    number: numberReducer
});

export interface RootState extends DefaultRootState{
    number: INumberState
}

const store = createStore(rootReducer);

export default store;