import React, { useReducer } from 'react';

import { ACTIONS, initialState, InitialStateType, KindKeys, KindValues, reducer } from './reducer';
import { StoreContext } from './index';

type ApplicationStoreType = { children: React.ReactNode };

export const ApplicationStore = ({ children }: ApplicationStoreType) => {
  const [state, dispatch] = useReducer(reducer, initialState, (v) => v);

  const updateState = (fieldName: KindKeys, value: KindValues): void =>
    dispatch({ type: ACTIONS.update, payload: { fieldName, value } });
  const mergeState = (newState: Partial<InitialStateType>) =>
    dispatch({ type: ACTIONS.merge, payload: { newState } });

  return (
    <StoreContext.Provider value={[state, { updateState, mergeState }]}>
      {React.Children.only(children)}
    </StoreContext.Provider>
  );
};
