import React, { useEffect, createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = (props) => {
  const [auth, setAuth] = useState();

  useEffect(() => {
    console.log("Provider::AuthProvider::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Provider::AuthProvider::useEffect::null");
  });

  useEffect(() => {
    // setTimeout(() => {
    //   setAuth("1");
    // }, 1000);
  }, []);

  return (
    <AuthContext.Provider
      value={{ auth, setAuth }}
      {...props}
    ></AuthContext.Provider>
  );
};

export default AuthProvider;
export { useAuth };
