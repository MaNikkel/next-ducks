// Action Types

export const GENERATE = "number/GENERATE"

interface IGenerateRandomNumberAction {
    type: typeof GENERATE;
    payload: { number: number };
}

export const RESET = "number/RESET"

interface IResetNumberAction {
    type: typeof RESET;
    payload: { number: number };
}

export const MULTIPLY = "number/MULTIPLY"

interface IMultiplyNumberAction {
    type: typeof MULTIPLY;
    payload: { multiply: number };
}

export type NumberActionTypes = IGenerateRandomNumberAction | IResetNumberAction | IMultiplyNumberAction;