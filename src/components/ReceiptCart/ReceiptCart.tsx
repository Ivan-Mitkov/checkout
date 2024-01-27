import React from "react";
import { ReceiptItem } from "../../types";

import styles from "./ReceiptCart.module.scss";

interface ReciptCartProps {
  item: ReceiptItem;
}

const ReceiptCart: React.FC<ReciptCartProps> = ({ item }) => {
  const { name, price, vat } = item;

  const calculateTotalPrice = () => {
    if (!vat) return price;

    return (price * (1 + vat / 100)).toFixed(2);
  };
  return (
    <div className={styles.container}>
      <div>
        <h3>{name}</h3>

        <div>
          Price: <span>{price}</span>
        </div>
        <div>VAT: {vat}%</div>
        <div>Total price: {calculateTotalPrice()}</div>
      </div>
    </div>
  );
};

export default ReceiptCart;
