import React from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ReceiptCart, CartList, PrimaryButton } from "../../components";
import { ReceiptItem } from "../../types";

import styles from "./ReceiptPage.module.scss";

const Receipt: React.FC = () => {
  const navigate = useNavigate();

  const productsList = useTypedSelector((state) => state.products.data);
  const country = useTypedSelector((state) => state.locations.selectedCountry);
  const receiptProducts = productsList.map((product) => {
    if (country) {
      return {
        ...product,
        vat: country.vat,
      };
    }

    return product;
  });

  const renderCustomItem = (item: ReceiptItem) => (
    <ReceiptCart key={item?.name} item={item} />
  );

  return (
    <div>
      <CartList
        data={receiptProducts}
        renderItem={renderCustomItem}
        listClassName={styles.customContainer}
      />
      <div className={styles.buttonContainer}>
        <PrimaryButton text="Go to home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Receipt;
