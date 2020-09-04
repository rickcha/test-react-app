import React, { useState, useEffect } from "react";

const ThirdComponent = () => {
  console.log("component::ThirdComponent");

  useEffect(() => {
    console.log("component::ThirdComponent::useEffect::1");
  }, []);

  useEffect(() => {
    console.log("component::ThirdComponent::useEffect:2");
  });

  return <div>Third Component</div>;
};

const SecondComponent = () => {
  console.log("component::SecondComponent");

  return <div>Second Component</div>;
};

const FirstComponent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    setTimeout(() => {
      setValue("1 second");
    }, 1000);

    setTimeout(() => {
      setValue("2 second");
    }, 2000);

    setTimeout(() => {
      setValue("3 second");
    }, 3000);
  }, []);

  return (
    <div>
      <SecondComponent />
      <ThirdComponent />
    </div>
  );
};

export default FirstComponent;
