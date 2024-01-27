import React from "react";
import { calculateTotalPrice } from "../../utils/priceUtils";
import { ReceiptItem } from "../../types";

import styles from "./ReceiptCart.module.scss";

interface ReciptCartProps {
  item: ReceiptItem;
}

const ReceiptCart: React.FC<ReciptCartProps> = ({ item }) => {
  const { name, price, vat } = item;

  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div className={styles.info}>
        <div>
          Price: <span>{price}</span>
        </div>
        <div>VAT: {vat}%</div>
        <div>Total price: {calculateTotalPrice(price, vat)}</div>
      </div>
    </div>
  );
};

export default ReceiptCart;
