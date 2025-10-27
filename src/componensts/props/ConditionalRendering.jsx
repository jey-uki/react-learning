import React from "react";

function ConditionalRendering({ isActive = true, status }) {
  return (
    <div className="content-container">
      <h1>Conditional Rendering</h1>
      {isActive && <p style={style.active}>Active</p>}

      {status == "paid" && <p>He is Paid</p>}
    </div>
  );
}

const style = {
  active: {
    backgroundColor: "#327a32ff",
    display: "inline",
    borderRadius: "10px",
    padding: "5px 10px",
    color: "white",
  },
};

export default ConditionalRendering;
