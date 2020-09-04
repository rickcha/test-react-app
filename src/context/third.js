import React, { createContext, useContext, useState } from "react";

const ThirdContext = createContext();
const useThird = () => useContext(ThirdContext);

const ThirdProvider = (props) => {
  const [orange, setOrange] = useState();

  return (
    <ThirdContext.Provider
      value={{ orange, setOrange }}
      {...props}
    ></ThirdContext.Provider>
  );
};

export default ThirdProvider;
export { useThird };
