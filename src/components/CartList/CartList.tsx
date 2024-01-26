import React from "react";

import { CartItem } from "../../types";
import Cart from "../Cart";

import styles from "./CartList.module.scss";

export interface CartListProps<T = CartItem> {
  data: T[];
}

const CartList: React.FC<CartListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item) => (
        <Cart key={item?.name} item={item} />
      ))}
    </div>
  );
};

export default CartList;
