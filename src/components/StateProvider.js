import React, { createContext, useReducer, useContext } from "react";

//preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, intialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, intialState)}>
        {children}
    </StateContext.Provider>
)

//hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);