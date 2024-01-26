import React from "react";
import { Input } from "antd";

import styles from "./PromoForm.module.scss";

type PromoData = {
  promoCode: string;
};

type PromoFormProps = PromoData & {
  updateFields: (fields: Partial<PromoData>) => void;
};

const PromoForm: React.FC<PromoFormProps> = ({ updateFields }) => {
  return (
    <div className={styles.container}>
      <div>Promo Code</div>
      <Input onChange={(e) => updateFields({ promoCode: e.target.value })} />
    </div>
  );
};

export default PromoForm;
