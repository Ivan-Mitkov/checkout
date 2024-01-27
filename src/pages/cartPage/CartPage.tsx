import React, { useState } from "react";
import { doGetProductsRequest } from "../../state/products";
import {
  doGetCitiesRequest,
  doGetCountriesRequest,
} from "../../state/locations";
import useBackendCall from "../../hooks/useBackendCall";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { SideModal } from "../../components";
import { CheckoutForm } from "../../forms";
import { CartItem } from "../../types";
import { Cart, CartList, PrimaryButton } from "../../components";
import styles from "./CartPage.module.scss";

const CartPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  useBackendCall([
    doGetProductsRequest,
    doGetCitiesRequest,
    doGetCountriesRequest,
  ]);

  const products = useTypedSelector((state) => state.products.data);

  const handleClose = () => {
    setShowModal(false);
  };

  const renderCustomItem = (item: CartItem) => (
    <Cart key={item?.name} item={item} />
  );

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <CartList data={products} renderItem={renderCustomItem} />
      <div className={styles.buttonContainer}>
        <PrimaryButton text="Order" onClick={(e) => setShowModal(true)} />
      </div>
      {showModal && (
        <SideModal handleClose={handleClose}>
          <CheckoutForm onClose={handleClose} />
        </SideModal>
      )}
    </div>
  );
};

export default CartPage;
