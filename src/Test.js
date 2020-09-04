import React, { useEffect } from "react";

const Test = ({ data }) => {
  useEffect(() => {
    console.log("data changed");
  }, [data]);

  return <div></div>;
};

export default Test;
