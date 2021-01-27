import { AxiosResponse } from 'axios';
import { DefaultRootState } from 'react-redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { generateNumberFailure, generateNumberSuccess, multiplyNumberFailure, multiplyNumberSuccess } from './actions';
import { INumberState } from './reducer';
import { GENERATE_REQUEST, IGenerateRandomNumberActionRequest, IMultiplyNumberActionRequest, MULTIPLY_REQUEST } from './types';

function* checkNumberLimit(action: IGenerateRandomNumberActionRequest) {
  const limitResponse: AxiosResponse<{ limit: number }> = yield call(api.get, 'limit');

  if (action.payload.number < limitResponse.data.limit) {
    yield put(generateNumberSuccess(action.payload.number))
  } else {
    yield put(generateNumberFailure())
  }
}

function* checkCanMultiply(action: IMultiplyNumberActionRequest) {
  const limitResponse: AxiosResponse<{ limit: number }> = yield call(api.get, 'limit');
  const { number }: INumberState = yield select((state: DefaultRootState) => (state.number));

  if ((number * action.payload.multiply) < limitResponse.data.limit) {
    yield put(multiplyNumberSuccess(action.payload.multiply))
  } else {
    yield put(multiplyNumberFailure())
  }
}

export default all([
  takeLatest(GENERATE_REQUEST, checkNumberLimit),
  takeLatest(MULTIPLY_REQUEST, checkCanMultiply)
])