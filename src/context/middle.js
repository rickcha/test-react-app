import React, { useEffect, createContext, useContext, useState } from "react";

const MiddleContext = createContext();
const useMiddle = () => useContext(MiddleContext);

const MiddleProvider = (props) => {
  const [middle, setMiddle] = useState();

  useEffect(() => {
    console.log("Provider::MiddleProvider::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Provider::MiddleProvider::useEffect::null");
  });

  return (
    <MiddleContext.Provider
      value={{ middle, setMiddle }}
      {...props}
    ></MiddleContext.Provider>
  );
};

export default MiddleProvider;
export { useMiddle };
