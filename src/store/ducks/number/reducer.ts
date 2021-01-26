import { NumberActionTypes, GENERATE, RESET, MULTIPLY } from './types'

export interface INumberState {
    number: number,
    multiply: number
}

const INITIAL_STATE: INumberState = {
    number: 0,
    multiply: 1
}

export default function numberReducer(state = INITIAL_STATE, action: NumberActionTypes): INumberState {
    switch(action.type) {
        case GENERATE:
            return {
                ...state,
                number: action.payload.number
            }
        case RESET:
            return {
                ...state,
                number: action.payload.number
            }
        case MULTIPLY:
            return {
                ...state,
                number: state.number * action.payload.multiply
            }
        default: 
            return state;
    }
}

