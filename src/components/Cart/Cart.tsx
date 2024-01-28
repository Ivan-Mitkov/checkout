import React from "react";
import { CartItem } from "../../types";

import styles from "./Cart.module.scss";

interface CartProps {
  item: CartItem;
}

const Cart: React.FC<CartProps> = ({ item }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className={styles.container}>
      <img src={imageUrl} />
      <div>
        <h3>{name}</h3>
        <div>
          <div>
            Price: <span>{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
