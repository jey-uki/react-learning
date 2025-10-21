import React from "react";

function ConditionalRendering({ name, course, grade, isOnline }) {
  return (
    <div className="content-container">
      <div className="content-title">
        <h1>Conditional Rendering with Props</h1>
        <p>
          Conditional rendering allows you to show, hide, or style parts of the
          UI depending on the data (props) a component receives.
        </p>
      </div>

      <div className="card-header">
        <h2>{name}</h2>
        {/* Conditional rendering */}
        {isOnline && <span className="online-badge">Online</span>}
      </div>

      <p>Course: {course}</p>

      {/* Conditional class name */}
      <p className={`grade ${grade === "A" ? "excellent" : "good"}`}>
        Grade: {grade}
      </p>

      {/* Conditional element */}
      {grade === "A" && <div className="achievement">Top Student!</div>}
    </div>
  );
}

export default ConditionalRendering;
