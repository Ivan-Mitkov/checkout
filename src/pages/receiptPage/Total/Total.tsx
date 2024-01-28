import React from "react";
import { calculateTotalPrice } from "../../../utils/priceUtils";

import styles from "./Total.module.scss";

interface TotalProps {
  data: {
    vat: number;
    id: string;
    name: string;
    price: number;
  }[];
}

const Total: React.FC<TotalProps> = ({ data }) => {
  const totalPrice = data
    .reduce(
      (acc, product) => acc + calculateTotalPrice(product.price, product.vat),
      0
    )
    .toFixed(2);

  return (
    <div className={styles.container}>
      <div />
      <div className={styles.content}>Total: {totalPrice}</div>
    </div>
  );
};

export default Total;
