import React from "react";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CartList, PrimaryButton } from "../../components";

import styles from "./ReceiptPage.module.scss";

const Receipt: React.FC = () => {
  const products = useTypedSelector((state) => state.products.data);
  const country = useTypedSelector((state) => state.locations.selectedCountry);
  const navigate = useNavigate();
  console.log("Receipt country", country);
  return (
    <div>
      <CartList data={products} />
      <div className={styles.buttonContainer}>
        <PrimaryButton text="Go to home" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default Receipt;
