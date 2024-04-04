import React, { useState } from "react";
import Modal from "./Modal";
import "./SlipModal.css";

export default function StartModal({ handleSave }) {
  const [cash, setCash] = useState(0);
  const [branch, setBranch] = useState("");

  return (
    <Modal>
      <h1>Setup Branch</h1>
      <div className="slip">
        <div>
          Branch: <input onChange={(e) => setBranch(e.target.value)} />
        </div>
        <br />
        <div>
          Cashier Cash: <input onChange={(e) => setCash(e.target.value)} />
        </div>
      </div>
      <button
        style={{ width: "100%", marginBottom: "16px" }}
        onClick={() => {
          handleSave({ branch: branch, cash: cash });
        }}
      >
        Save
      </button>
    </Modal>
  );
}
