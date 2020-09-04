import React, { useState, useEffect } from "react";

const BottomComponent = ({ value }) => {
  console.log("Component::BottomComponent");

  useEffect(() => {
    console.log("Component::BottomComponent::useEffect::null");
  });

  useEffect(() => {
    console.log("Component::BottomComponent::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Component::BottomComponent::useEffect::value");
  }, [value]);

  return <div>Third Component</div>;
};

const TopComponent = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    console.log("Component::TopComponent::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Component::TopComponent::useEffect::null");
  });

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setValue("1 second");
  //     }, 1000);
  //     setTimeout(() => {
  //       setValue("2 second");
  //     }, 2000);
  //     setTimeout(() => {
  //       setValue("3 second");
  //     }, 3000);
  //   }, []);

  return (
    <div>
      <BottomComponent value={value} />
    </div>
  );
};

export default TopComponent;
