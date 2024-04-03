import React from "react";
import Modal from "./Modal";
import "./SlipModal.css";
import { price } from "../../constant/price";

export default function SlipModal({
  bill,
  handleClose,
  total,
  discount,
  cash,
  payment,
  handleSave,
}) {
  function generateTransactionId() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <Modal handleClose={handleClose}>
      <h1>Slip</h1>
      <div className="slip">
        <h2>IBM&CO Local Store</h2>
        <br />
        <div>
          <span>Order</span>
          <span>{generateTransactionId()}</span>
        </div>
        <div>
          <span>Sold To:</span>
          <span>{payment.member ? payment.member : "Walk-In"}</span>
        </div>
        <div>
          <span>Order Date:</span>
          <span>{new Date().toDateString()}</span>
        </div>
        <div>
          <span>Order Time:</span>
          <span>{new Date().toTimeString().split(" ")[0]}</span>
        </div>
        <div>
          <span>Sale Person:</span>
          <span>Operator X</span>
        </div>
        <br />
        <hr />
        <br />
        <div>
          <span>Name</span>
          <span>QTY</span>
          <span>Price</span>
        </div>
        <br />
        {bill.map((b, key) => (
          <div key={key}>
            <span>{b.name}</span>
            <span>x{b.qty}</span>
            <span>{b.qty * price(b.id)}</span>
          </div>
        ))}
        <br />
        <hr />
        <br />
        <div>
          <span>Sub Total: </span>
          <span>{total}</span>
        </div>
        <div>
          <span>Discount:</span>
          <span>({discount})</span>
        </div>
        <div>
          <h3>Total:</h3>
          <h3>{total - discount}</h3>
        </div>
        <br />
        <div>
          <span>Cash In: </span>
          <span>{payment.cash}</span>
        </div>
        <div>
          <span>Exchange:</span>
          <span>{payment.cash - total + discount}</span>
        </div>
      </div>
      <button
        style={{ width: "100%", marginBottom: "16px" }}
        onClick={() => {
          handleSave(cash + total - discount);
          handleClose();
        }}
      >
        Save
      </button>
    </Modal>
  );
}
