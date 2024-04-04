import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./SlipModal.css";

export default function CashModal({ handleClose, handleSave }) {
  const [cash, setCash] = useState("");
  const [tel, setTel] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
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
        <div>
          Age:
          <input
            type="radio"
            id="<15"
            name="age"
            value="<15"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="<15">{"<"} 15</label>
          <input
            type="radio"
            id="15-25"
            value="15-25"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="15-25">15 - 25</label>
        </div>
        <div>
          <input
            type="radio"
            id="26-40"
            name="age"
            value="26-40"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="26-40">26 - 40</label>
          <input
            type="radio"
            id=">40"
            value=">40"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor=">40">{">"} 40</label>
        </div>
        <br />
        <div>
          Gender:
          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <br />
        <button
          onClick={() => {
            handleSave({
              cash: parseInt(cash),
              member: tel,
              age: age,
              gender: gender,
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
