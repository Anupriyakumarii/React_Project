import React, { useContext } from "react";
import { BioContext } from "./ContectApiDemo";

export const Home = () => {
  const { myName, Age } = useContext(BioContext); //to get the data from provider we use "usecontext" hook.
  return (
    <>
      <h1>
        Hi! This is ContextApi Demo.My name is {myName} and my age is{Age}
      </h1>
    </>
  );
};
