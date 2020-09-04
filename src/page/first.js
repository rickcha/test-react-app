import React, { useEffect } from "react";
import { useFirst } from "../context/first";
import FirstComponent from "../component/first";

const FirstPage = ({ match }) => {
  const { apple } = useFirst();

  useEffect(() => {
    console.log("IndexPage::useEffect::match");
  }, [match]);

  return (
    <div>
      First Page, {apple}
      <FirstComponent />
    </div>
  );
};

export default FirstPage;
