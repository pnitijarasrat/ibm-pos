import React, { useState } from "react";
import DiscoundModal from "./Modal/DiscountModal";
import "./Console.css";
import SlipModal from "./Modal/SlipModal";
import CashModal from "./Modal/CashModal";
import StartModal from "./Modal/StartModal";

export default function Console({ bill, handleVoid }) {
  const [discount, setDiscount] = useState({ id: 0, discount: 0 });
  const [cash, setCash] = useState(0 || localStorage.getItem("cashierCash"));
  const [branch, setBranch] = useState("" || localStorage.getItem("branch"));
  const [isDiscount, setIsDiscount] = useState(false);
  const [isCashing, setIsCashing] = useState(false);
  const [slip, setSlip] = useState(false);
  const [payment, setPayment] = useState({ cash: 0, member: "" });
  const [isSetting, setIsSetting] = useState(false);

  let total = 0;
  for (let i = 0; i < bill.length; i++) {
    total += parseInt(bill[i].price * bill[i].qty);
  }

  const handleSave = (newPayment) => {
    setPayment(newPayment);
  };

  const updateCash = (newCash) => {
    setCash(parseInt(newCash));
    localStorage.setItem("cashierCash", newCash);
    handleVoid();
    setPayment({ cash: 0, member: "" });
    setDiscount({ id: 0, discount: 0 });
  };

  const handleSelectDiscount = (id) => {
    switch (id) {
      case 1:
        if (total < 500) return;
        if (total * 0.05 <= 50) return setDiscount(total * 0.05);
        else return setDiscount({ id: id, discount: 50 });
      case 2:
        if (total < 700) return;
        if (total * 0.1 <= 100) return setDiscount(total * 0.1);
        else return setDiscount({ id: id, discount: 100 });
      case 3:
        if (total < 500) return;
        if (total * 0.15 <= 150) return setDiscount(total * 0.15);
        else return setDiscount({ id: id, discount: 150 });
      case 4:
        if (total < 1000) return;
        if (total * 0.2 <= 300) return setDiscount(total * 0.2);
        else return setDiscount({ id: id, discount: 300 });
    }
  };

  const handleStart = (newSetup) => {
    setCash(parseInt(newSetup.cash));
    localStorage.setItem("cashierCash", newSetup.cash);
    setBranch(newSetup.brach);
    localStorage.setItem("branch", newSetup.branch);
    window.location.reload();
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
            <h2>{total}</h2>
          </div>
          <div>
            <span>Discount:</span>
            <span>{discount.discount}</span>
          </div>
          <hr />
          <div>
            <h2>To Pay:</h2>
            <h2>{total - discount.discount}</h2>
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
      {(!branch || !cash || isSetting) && (
        <StartModal handleSave={handleStart} />
      )}
      <br />
      <div>
        <div>Branch: {branch}</div>
        <br />
        <button onClick={() => setIsSetting(true)}>Set Up</button>
      </div>
    </>
  );
}
