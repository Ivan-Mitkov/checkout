import React, { useEffect } from "react";
import { doGetProductsRequest } from "../../state/products";
import {
  doGetCitiesRequest,
  doGetCountriesRequest,
} from "../../state/locations";
import useBackendCall from "../../hooks/useBackendCall";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { CartList } from "../../components";
import styles from "./CartPage.module.scss";

const CartPage = () => {
  useBackendCall([
    doGetProductsRequest,
    doGetCitiesRequest,
    doGetCountriesRequest,
  ]);

  const products = useTypedSelector((state) => state.products.data);

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <CartList data={products} />
    </div>
  );
};

export default CartPage;
