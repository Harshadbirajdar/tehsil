import React from "react";

const Error = ({ condition, value }) => {
  if (condition) return <div className="error">{value}</div>;
};

export default Error;
