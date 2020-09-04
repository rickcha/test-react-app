import React, { useEffect } from "react";

const IndexPage = ({ match }) => {
  useEffect(() => {
    console.log("IndexPage::useEffect::match");
  }, [match]);

  return <div>Index Page</div>;
};

export default IndexPage;
