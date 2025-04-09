import React, { Children, createContext } from "react";

//1 step
export const BioContext = createContext();

//2nd step this will provide all the dta to child component
export const BioProvider = ({ children }) => {
  const myName = "Anu";
  const Age = 24;
  // console.log(children)
  return (
    <BioContext.Provider value={{ myName, Age }}>
      {children}
    </BioContext.Provider>
  );
};
