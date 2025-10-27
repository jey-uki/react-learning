import React from "react";

function PostData() {
  return (
    <>
      <div className="content-container">
        <h1>Post Data: Form</h1>
        <div className="content-body">
          Here we use <strong>Axios</strong> to send data to the API{" "}
          <code>/users</code> endpoint.
        </div>
      </div>

      <form action="post"></form>
    </>
  );
}

export default PostData;
