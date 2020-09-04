import React, { useEffect } from "react";

const BottomComponent = () => {
  console.log("Component::BottomComponent");

  useEffect(() => {
    console.log("Component::BottomComponent::useEffect::null");
  });

  useEffect(() => {
    console.log("Component::BottomComponent::useEffect::[]");
  }, []);

  return <div>Third Component</div>;
};

const TopComponent = () => {
  useEffect(() => {
    console.log("Component::TopComponent::useEffect::[]");
  }, []);

  useEffect(() => {
    console.log("Component::TopComponent::useEffect::null");
  });

  return (
    <div>
      <BottomComponent />
    </div>
  );
};

export default TopComponent;
