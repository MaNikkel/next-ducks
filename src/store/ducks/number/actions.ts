import { NumberActionTypes, GENERATE, RESET, MULTIPLY } from './types'

export function generateNumber(newNumber: number): NumberActionTypes {
  return {
      type: GENERATE,
      payload: { number: newNumber }
  }
}

export function resetNumber(): NumberActionTypes {
  return {
      type: RESET,
      payload: { number: 0 }
  }
}

export function multiplyNumber(): NumberActionTypes {
  return {
      type: MULTIPLY,
      payload: { multiply: 2 }
  }
}