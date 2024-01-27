import React from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ReceiptCart, CartList, PrimaryButton } from "../../components";
import { ReceiptItem } from "../../types";
import Total from "./Total";
import styles from "./ReceiptPage.module.scss";

import useBackendCall from "../../hooks/useBackendCall";
import { doGetProductsRequest } from "../../state/products";
import {
  doGetCitiesRequest,
  doGetCountriesRequest,
} from "../../state/locations";

const Receipt: React.FC = () => {
  const navigate = useNavigate();
  useBackendCall([
    doGetProductsRequest,
    doGetCitiesRequest,
    doGetCountriesRequest,
  ]);
  const productsList = useTypedSelector((state) => state.products.data);
  const country = useTypedSelector((state) => state.locations.selectedCountry);
  const receiptProducts = productsList.map((product) => {
    if (country) {
      return {
        ...product,
        price: parseFloat(product.price.toString()),
        vat: country.vat,
      };
    }

    return {
      ...product,
      price: parseFloat(product.price.toString()),
      vat: 0,
    };
  });

  const renderCustomItem = (item: ReceiptItem) => (
    <ReceiptCart key={item?.name} item={item} />
  );

  return (
    <div className={styles.container}>
      <CartList
        data={receiptProducts}
        renderItem={renderCustomItem}
        listClassName={styles.customContainer}
      />
      <Total data={receiptProducts} />
      <div className={styles.buttonContainer}>
        <PrimaryButton text="Go to home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Receipt;
