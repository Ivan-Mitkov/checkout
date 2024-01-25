import React from "react";
import { Input, Select } from "antd";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import Header from "./Header";

import styles from "./ChackoutForm.module.scss";

interface CheckoutFormProps {
  onClose: () => void;
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const theme = useTypedSelector((state) => state.ui.theme);

  return (
    <div className={styles.container}>
      <Header title="Order" onClose={onClose} theme={theme} />
      <div className={styles.content}>
        <div>Name</div>
        <Input />
        <div>Email</div>
        <Input />
        <div>Country</div>
        <Select />
        <div>City</div>
        <Select />
      </div>
    </div>
  );
};

export default CheckoutForm;
