import { NumberActionTypes, RESET, GENERATE_REQUEST, GENERATE_SUCCESS, GENERATE_FAILURE, MULTIPLY_REQUEST, MULTIPLY_SUCCESS, MULTIPLY_FAILURE } from './types'

export function generateNumberRequest(newNumber: number): NumberActionTypes {
  return {
      type: GENERATE_REQUEST,
      payload: { number: newNumber }
  }
}

export function generateNumberSuccess(newNumber: number): NumberActionTypes {
  return {
      type: GENERATE_SUCCESS,
      payload: { number: newNumber }
  }
}

export function generateNumberFailure(): NumberActionTypes {
  return {
      type: GENERATE_FAILURE,
      payload: { }
  }
}


export function resetNumber(): NumberActionTypes {
  return {
      type: RESET,
      payload: { number: 0 }
  }
}

export function multiplyNumberRequest(multiplyNumber: number): NumberActionTypes {
  return {
      type: MULTIPLY_REQUEST,
      payload: { multiply: multiplyNumber }
  }
}

export function multiplyNumberSuccess(multiplyNumber: number): NumberActionTypes {
  return {
      type: MULTIPLY_SUCCESS,
      payload: { multiply: multiplyNumber }
  }
}

export function multiplyNumberFailure(): NumberActionTypes {
  return {
      type: MULTIPLY_FAILURE,
      payload: { }
  }
}