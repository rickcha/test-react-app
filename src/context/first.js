import React, { createContext, useContext, useState, useEffect } from "react";

const FirstContext = createContext();
const useFirst = () => useContext(FirstContext);

const FirstProvider = (props) => {
  const [apple, setApple] = useState();

  useEffect(() => {
    setTimeout(() => {
      setApple("item");
      console.log("FirstProvider::useEffect::item");
    }, 3000);
  }, []);

  return (
    <FirstContext.Provider
      value={{ apple, setApple }}
      {...props}
    ></FirstContext.Provider>
  );
};

export default FirstProvider;
export { useFirst };
