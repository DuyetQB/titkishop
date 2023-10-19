import React, { createContext, useReducer } from 'react';
import { queryReducer } from './queryReducer';

export const StoreContext = createContext<any>(null);

const initialState = 
  { products:[],currentPage:1}
;


export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [value, dispatch] = useReducer(queryReducer, initialState);

  return (
    <StoreContext.Provider value={{ value, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
