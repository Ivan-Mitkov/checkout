import React from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Cart, CartList, PrimaryButton } from "../../components";
import { CartItem } from "../../types";

import styles from "./ReceiptPage.module.scss";

const Receipt: React.FC = () => {
  const products = useTypedSelector((state) => state.products.data);
  const country = useTypedSelector((state) => state.locations.selectedCountry);
  const navigate = useNavigate();

  const renderCustomItem = (item: CartItem) => (
    <Cart key={item?.name} item={item} />
  );
  
  return (
    <div>
      <CartList
        data={products}
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
