import React from "react";

import { CartItem } from "../../types";

import styles from "./CartList.module.scss";

export interface CartListProps<T = CartItem> {
  data: T[];
  renderItem: (item: T) => React.ReactElement;
  listClassName?: string;
}

const CartList: React.FC<CartListProps> = ({
  data,
  renderItem,
  listClassName,
}) => {
  return (
    <div className={listClassName || styles.container}>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default CartList;
