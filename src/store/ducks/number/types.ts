// Action Types

export const GENERATE_REQUEST = "number/GENERATE_REQUEST"
export const GENERATE_SUCCESS = "number/GENERATE_SUCCESS"
export const GENERATE_FAILURE = "number/GENERATE_FAILURE"

export interface IGenerateRandomNumberActionRequest {
    type: typeof GENERATE_REQUEST;
    payload: { number: number };
}
interface IGenerateRandomNumberActionSuccess {
    type: typeof GENERATE_SUCCESS;
    payload: { number: number };
}
interface IGenerateRandomNumberActionFailure {
    type: typeof GENERATE_FAILURE;
    payload: {};
}

export const RESET = "number/RESET"

interface IResetNumberAction {
    type: typeof RESET;
    payload: { number: number };
}

export const MULTIPLY_REQUEST = "number/MULTIPLY_REQUEST"
export const MULTIPLY_SUCCESS = "number/MULTIPLY_SUCCESS"
export const MULTIPLY_FAILURE = "number/MULTIPLY_FAILURE"

export interface IMultiplyNumberActionRequest {
    type: typeof MULTIPLY_REQUEST;
    payload: { multiply: number };
}
interface IMultiplyNumberActionSuccess {
    type: typeof MULTIPLY_SUCCESS;
    payload: { multiply: number };
}
interface IMultiplyNumberActionFailure {
    type: typeof MULTIPLY_FAILURE;
    payload: { };
}

export type NumberActionTypes = IGenerateRandomNumberActionRequest | IGenerateRandomNumberActionSuccess | IGenerateRandomNumberActionFailure | IResetNumberAction | IMultiplyNumberActionRequest | IMultiplyNumberActionFailure | IMultiplyNumberActionSuccess;