import React, { useContext } from 'react';

import { ApplicationStore } from './ApplicationStore';
import { KindKeys, KindValues, InitialStateType } from './reducer';

export type StoreContextType = [
  InitialStateType,
  {
    updateState: (fieldName: KindKeys, value: KindValues) => void;
    mergeState: (newState: Partial<InitialStateType>) => void;
  },
];

export const StoreContext = React.createContext<StoreContextType | null>(null);

const useStateValue = () => useContext(StoreContext);

export { ApplicationStore, useStateValue };
