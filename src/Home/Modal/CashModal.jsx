import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./SlipModal.css";

export default function CashModal({ handleClose, handleSave }) {
  const [cash, setCash] = useState("");
  const [tel, setTel] = useState("");
  return (
    <Modal handleClose={handleClose}>
      <h1>Payment</h1>
      <div className="slip">
        <div>
          Cash: <input onChange={(e) => setCash(e.target.value)} />
        </div>
        <br />
        <div>
          Tel: <input onChange={(e) => setTel(e.target.value)} />
        </div>
        <br />
        <button
          onClick={() => {
            handleSave({
              cash: cash,
              member: tel,
            });

            handleClose();
          }}
        >
          Save
        </button>
      </div>
    </Modal>
  );
}
