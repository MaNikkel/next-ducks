import { createStore, combineReducers } from "redux";
import numberReducer, { INumberState } from "./ducks/number";

export type IRootState = {
    number: INumberState;
  }

const rootReducer = combineReducers({
    number: numberReducer
});


const store = createStore(rootReducer);

export default store;