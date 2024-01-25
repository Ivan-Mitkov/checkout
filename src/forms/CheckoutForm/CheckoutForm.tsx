import React from "react";
import { Input, Select } from "antd";

import styles from "./ChackoutForm.module.scss";
const CheckoutForm = () => {
  return (
    <div className={styles.container}>
      <div>Title</div>
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
