import { createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ intialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, intialState)}>
    {children}
  </StateContext.Provider>
);
