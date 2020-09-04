import React, { useEffect, createContext, useContext, useState } from "react";

const BottomContext = createContext();
const useBottom = () => useContext(BottomContext);

const BottomProvider = (props) => {
  const [bottom, setBottom] = useState();

  useEffect(() => {
    console.log("Provider::BottomProvider::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Provider::BottomProvider::useEffect::null");
  });

  return (
    <BottomContext.Provider
      value={{ bottom, setBottom }}
      {...props}
    ></BottomContext.Provider>
  );
};

export default BottomProvider;
export { useBottom };
