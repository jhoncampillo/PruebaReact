import React from "react";
import "./modal.css";
import ReactDOM from "react-dom";

export const Modalcomponent = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modalBackground">{children};</div>,
    document.getElementById("modal")
  );
};
