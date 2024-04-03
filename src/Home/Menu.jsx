import React, { useState } from "react";
import "./Menu.css";
import { price } from "../constant/price";

export default function Menu({ updateBill }) {
  const renderProduct = (id) => {
    for (let i = 0; i < productList.length; i++) {
      if (id === productList[i].id) return productList[i].name;
    }
  };
  const productList = [
    {
      name: "Product A",
      id: "productA",
    },
    {
      name: "Product B",
      id: "productB",
    },
    {
      name: "Product C",
      id: "productC",
    },
    {
      name: "Product D",
      id: "productD",
    },
  ];

  const handleSelectProduct = (id) => {
    setAmount(0);
    if (id === "reset") return setSelectedProduct(null);
    setSelectedProduct(id);
  };

  const handleAddProduct = (action) => {
    if (action === "decrease" && amount <= 0) return;
    if (action === "decrease") return setAmount(amount - 1);
    if (action === "increase") return setAmount(amount + 1);
  };

  const handleUpdateBill = () => {
    const newItem = {
      id: selectedProduct,
      name: renderProduct(selectedProduct),
      qty: amount,
      price: price(selectedProduct),
    };
    updateBill(newItem);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [amount, setAmount] = useState(0);

  return (
    <>
      <div className="menu">
        <h1>Product</h1>
        <div className="menu-item">
          {productList.map((product, key) => (
            <button key={key} onClick={() => handleSelectProduct(product.id)}>
              {product.name}
            </button>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <div className="product">
          <h1>{renderProduct(selectedProduct)}</h1>
          <div className="product-view">
            <button onClick={() => handleAddProduct("decrease")}>-</button>
            <div>{amount}</div>
            <button onClick={() => handleAddProduct("increase")}>+</button>
          </div>
          <br />
          <div className="product-action">
            <button onClick={handleUpdateBill} disabled={amount === 0}>
              Add
            </button>
            <button onClick={() => handleSelectProduct("reset")}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}
