import React from "react";

import styles from "./CartList.module.scss";

export interface CartListProps<T> {
  data: T[];
  renderItem: (item: T) => React.ReactElement;
  listClassName?: string;
}

const CartList = <T extends {}>({
  data,
  renderItem,
  listClassName,
}: CartListProps<T>) => {
  return (
    <div className={listClassName || styles.container}>
      {data.map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default CartList;
