import React, { useEffect } from "react";
import { useTop } from "../context/top";
import FirstComponent from "../component/first";

const FirstPage = ({ match }) => {
  const { top } = useTop();

  useEffect(() => {
    console.log("Page::FirstPage::useEffect::match");
  }, [match]);

  useEffect(() => {
    console.log("Page::FirstPage::useEffect::null");
  });

  return (
    <div>
      First Page, {top}
      <FirstComponent />
    </div>
  );
};

export default FirstPage;
