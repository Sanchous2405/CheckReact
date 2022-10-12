import React from "react";

export const Button = ({ text, func }) => {
  return <button className="btn" onClick={func}>{text}</button>;
};

