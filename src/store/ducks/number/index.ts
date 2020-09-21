// Action Types

export const GENERATE = "number/GENERATE"
export const RESET = "number/RESET"
export const MULTIPLY = "number/MULTIPLY"

interface IGenerate{
    number: number;
}

interface IGenerateRandomNumberAction {
    type: typeof GENERATE;
    payload: IGenerate;
}

interface IReset{
    number: number;
}

interface IResetNumberAction {
    type: typeof RESET;
    payload: IReset;
}

interface IMultiply{
    multiply: number
}

interface IMultiplyNumberAction {
    type: typeof MULTIPLY;
    payload: IMultiply;
}

export type NumberActionTypes = IGenerateRandomNumberAction | IResetNumberAction | IMultiplyNumberAction;

// Action Creators

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

// Reducer

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

