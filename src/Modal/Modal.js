import React from "react";
import "./modal.css";
import ReactDOM from "react-dom";

export const Modalcomponent = ({ children }) => {
  //   const [show, setShow] = useState(modalShow);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  return ReactDOM.createPortal(
    <div className="modalBackground">{children};</div>,
    document.getElementById("modal")
  );
};
