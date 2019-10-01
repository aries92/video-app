import React, { createContext, useReducer } from 'react';

const initialState = {
  modalVisible: false,
  videoId: null
};

export const AppContext = createContext(null);

export function AppProvider({ children }) {
  const contextValue = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState
  );
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}
