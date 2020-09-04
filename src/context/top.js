import React, { createContext, useContext, useState, useEffect } from "react";

const TopContext = createContext();
const useTop = () => useContext(TopContext);

const TopProvider = (props) => {
  const [top, setTop] = useState();

  useEffect(() => {
    console.log("Provider::TopProvider::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Provider::TopProvider::useEffect::null");
  });

  useEffect(() => {
    setTimeout(() => {
      console.log("::--------Tree Shaking-------::");
      setTop("item");
    }, 3000);
  }, []);

  return (
    <TopContext.Provider
      value={{ top, setTop }}
      {...props}
    ></TopContext.Provider>
  );
};

export default TopProvider;
export { useTop };
