import React, { createContext, useContext, useState } from "react";

const SecondContext = createContext();
const useSecond = () => useContext(SecondContext);

const SecondProvider = (props) => {
  const [banana, setBanana] = useState();

  return (
    <SecondContext.Provider
      value={{ banana, setBanana }}
      {...props}
    ></SecondContext.Provider>
  );
};

export default SecondProvider;
export { useSecond };
