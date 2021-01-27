import { NumberActionTypes, RESET, GENERATE_SUCCESS, GENERATE_FAILURE, MULTIPLY_SUCCESS, MULTIPLY_FAILURE } from './types'

export interface INumberState {
    number: number,
    multiply: number,
    failure: boolean
}

const INITIAL_STATE: INumberState = {
    number: 0,
    multiply: 1,
    failure: false
}

export default function numberReducer(state = INITIAL_STATE, action: NumberActionTypes): INumberState {
    switch(action.type) {
        case GENERATE_SUCCESS:
            return {
                ...state,
                number: action.payload.number,
                failure: false
            }
        case GENERATE_FAILURE:
            return {
                ...state,
                failure: true
            }
        case RESET:
            return {
                ...state,
                number: action.payload.number
            }
        case MULTIPLY_SUCCESS:
            return {
                ...state,
                number: state.number * action.payload.multiply
            }
        case MULTIPLY_FAILURE:
            return {
                ...state,
                failure: true
            }
        
        default: 
            return state;
    }
}

