import React from "react";
import DefaultProps from "../componensts/props/DefaultProps";
import ConditionalRendering from "../componensts/props/ConditionalRendering";

function Props() {
  return (
    <>
      <DefaultProps name="Jey" course="Master" /> {/* name, courser */}
      <ConditionalRendering
        name="John Doe"
        course="React Fundamentals"
        grade="A"
        isOnline={true}
      />
      <ConditionalRendering name="Jey" course="Master" />
    </>
  );
}

export default Props;
