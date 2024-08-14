import React from "react";

function Status({ count }) {
  return (
    <div>
      <p>{count > 10 ? "High count!" : "Keep counting..."}</p>
    </div>
  );
}

export default Status;
