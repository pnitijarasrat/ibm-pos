import React from "react";
import "./BillTable.css";

export default function BillTable({ bill }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>QTY</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {bill.map((b, key) => (
          <tr key={key}>
            <td>{b.name}</td>
            <td>{b.qty}</td>
            <td>{b.price}</td>
            <td>{b.qty * b.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
