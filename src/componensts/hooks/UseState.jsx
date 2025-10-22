import React, { useState } from "react";
import ToDoApp from "./ToDo.jsx";

function UseState() {
  const [age, setAge] = useState(27);

  function increase() {
    setAge(age + 1);
  }
  return (
    <div>
      <h2>Age: {age}</h2>
      <button style={style.btn} onClick={increase}>
        Increase by 1
      </button>
      <br />
      <input type="text" name="" id="" value={age}/>

      <hr />

      <ToDoApp />
    </div>
  );
}

const style = {
  btn: {
    backgroundColor: "#ccc",
    padding: "10px",
    borderRadius: "10px",
    cursork: "pointer",
  },
};
export default UseState;
