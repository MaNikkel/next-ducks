import numberReducer from './reducer';
import numberSagas from './sagas';
export * from './reducer';
export * from './actions';
export * from './types';

export { numberSagas, numberReducer };
export default numberReducer;