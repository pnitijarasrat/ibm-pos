import React from "react";
import "./Modal.css";

export default function Modal({ children, handleClose }) {
  return (
    <div className="backdrop">
      <div className="modal">
        <div>{children}</div>
        <button onClick={handleClose}>Close</button>
      </div>
    </div>
  );
}
