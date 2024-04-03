import React, { useState } from "react";
import DiscoundModal from "./Modal/DiscountModal";
import "./Console.css";
import SlipModal from "./Modal/SlipModal";
import CashModal from "./Modal/CashModal";

export default function Console({ bill, handleVoid }) {
  const [discount, setDiscount] = useState(0);
  const [cash, setCash] = useState(3000);
  const [isDiscount, setIsDiscount] = useState(false);
  const [isCashing, setIsCashing] = useState(false);
  const [slip, setSlip] = useState(false);
  const [payment, setPayment] = useState({ cash: 0, member: "" });

  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    total += parseInt(bill[i].price * bill[i].qty);
  }

  const handleSave = (newPayment) => {
    setPayment(newPayment);
  };

  const updateCash = (newCash) => {
    setCash(newCash);
    handleVoid();
    setPayment({ cash: 0, member: "" });
    setDiscount(0);
  };

  const handleSelectDiscount = (id) => {
    switch (id) {
      case 1:
        if (total < 500) return;
        if (total * 0.05 <= 50) return setDiscount(total * 0.05);
        else return setDiscount(50);
      case 2:
        if (total < 700) return;
        if (total * 0.1 <= 100) return setDiscount(total * 0.1);
        else return setDiscount(100);
      case 3:
        if (total < 500) return;
        if (total * 0.2 <= 200) return setDiscount(total * 0.2);
        else return setDiscount(200);
      case 4:
        if (total < 1000) return;
        if (total * 0.3 <= 500) return setDiscount(total * 0.3);
        else return setDiscount(500);
    }
  };

  return (
    <>
      <div className="console">
        <div className="console-bill-list">
          <div>
            <h1>Cashier Cash:</h1>
            <h1>{cash}</h1>
          </div>
          <div>
            <span>Sub Total:</span>
            <span>{Math.ceil(total * 0.93)}</span>
          </div>
          <div>
            <span>Tax:</span>
            <span>{Math.floor(total * 0.07)}</span>
          </div>
          <div>
            <h2>Totals:</h2>
            <span>{total}</span>
          </div>
          <div>
            <span>Discount:</span>
            <span>{discount}</span>
          </div>
          <hr />
          <div>
            <h2>To Pay:</h2>
            <span>{total - discount}</span>
          </div>
          {payment.cash !== 0 && (
            <>
              <div>
                <span>Cash in:</span>
                <span>{payment.cash}</span>
              </div>
              <div>
                <span>Member:</span>
                <span>{payment.member}</span>
              </div>
            </>
          )}
        </div>
        <br />
        <div className="console-action">
          <button onClick={handleVoid}>Void</button>
          <button onClick={() => setIsDiscount(true)}>Discount</button>
          <button
            onClick={() => setIsCashing(true)}
            disabled={bill.length === 0}
          >
            Payment
          </button>
          <button onClick={() => setSlip(true)} disabled={bill.length === 0}>
            Slip
          </button>
        </div>
      </div>
      {isDiscount && (
        <DiscoundModal
          handleSelectDiscount={handleSelectDiscount}
          handleClose={() => setIsDiscount(false)}
        />
      )}
      {slip && (
        <SlipModal
          handleClose={() => setSlip(false)}
          bill={bill}
          total={total}
          discount={discount}
          payment={payment}
          cash={cash}
          handleSave={updateCash}
        />
      )}
      {isCashing && (
        <CashModal
          handleSave={handleSave}
          handleClose={() => setIsCashing(false)}
        />
      )}
    </>
  );
}
