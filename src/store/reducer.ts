import { Either } from '../types/Either';

export type InitialStateType = { currentCat: string };

export const initialState: InitialStateType = {
  currentCat: '',
};

export type KindKeys = keyof typeof initialState;
export type KindValues = typeof initialState[KindKeys];
export type ActionTypeType = 'update' | 'merge';

type ActionType = {
  type: ActionTypeType;
  payload: Either<
    { fieldName: KindKeys; value: KindValues },
    { newState: Partial<InitialStateType> }
  >;
};

export const ACTIONS: Record<string, ActionTypeType> = {
  update: 'update',
  merge: 'merge',
};

export const reducer = (state: InitialStateType = initialState, action: ActionType) => {
  const { type, payload } = action;
  const { fieldName, value, newState } = payload;
  switch (type) {
    case ACTIONS.update:
      return {
        ...state,
        [fieldName as string]: value,
      };

    case ACTIONS.merge:
      return {
        ...state,
        ...newState,
      };
    default:
      return state;
  }
};
