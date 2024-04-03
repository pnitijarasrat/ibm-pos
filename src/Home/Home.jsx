import { useState } from "react";
import "./Home.css";
import BillTable from "./BillTable";
import Console from "./Console";
import Menu from "./Menu";

export default function Home() {
  const [bill, setBill] = useState([]);

  const updateBill = (newItem) => {
    for (let i = 0; i < bill.length; i++) {
      if (bill[i].name === newItem.name) {
        const newAmount = bill[i].qty + newItem.qty;
        const mockBill = bill.filter((b) => b.id !== newItem.id);
        setBill([
          ...mockBill,
          {
            id: newItem.id,
            name: newItem.name,
            qty: newAmount,
            price: newItem.price,
          },
        ]);
        return;
      }
    }
    setBill([...bill, { ...newItem }]);
    console.log(bill);
  };

  const handleVoid = () => {
    setBill([]);
  };

  return (
    <>
      <div className="home-container">
        <div className="container">
          <div style={{ minHeight: "50vh" }}>
            <BillTable bill={bill} />
          </div>
          <Console bill={bill} handleVoid={handleVoid} />
        </div>
        <div className="container">
          <Menu updateBill={updateBill} />
        </div>
      </div>
    </>
  );
}
