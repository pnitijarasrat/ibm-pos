import React from "react";
import Modal from "./Modal";
import "./SlipModal.css";

export default function DiscoundModal({ handleClose, handleSelectDiscount }) {
  const discountArray = [
    {
      name: "MIN 500 DIS 5% MAX 50",
      id: 1,
    },
    {
      name: "MIN 700 DIS 10% MAX 100",
      id: 2,
    },
    {
      name: "MIN 500 DIS 15% MAX 150",
      id: 3,
    },
    {
      name: "MIN 1000 DIS 20% MAX 300",
      id: 4,
    },
  ];

  const handleSelect = (id) => {
    handleSelectDiscount(id);
    handleClose();
  };

  return (
    <Modal handleClose={handleClose}>
      <h1>Discount</h1>
      <div className="slip">
        {discountArray.map((d, key) => (
          <>
            <div key={key}>
              <span>{d.name}</span>
              <button
                onClick={() => handleSelect(d.id)}
                style={{ marginLeft: "32px" }}
              >
                Select
              </button>
            </div>
            <br />
          </>
        ))}
      </div>
    </Modal>
  );
}
