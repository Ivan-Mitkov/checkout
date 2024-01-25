import React from "react";
import { Input, Select } from "antd";
import { SelectOptions } from "../../../types";

import styles from "./AddressForm.module.scss";

type AddressData = {
  name: string;
  city: string;
  country: string;
  email: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
  countriesOptions: SelectOptions;
  citiesOptions: SelectOptions;
};

const AddressForm: React.FC<AddressFormProps> = ({
  name,
  country,
  email,
  city,
  countriesOptions,
  citiesOptions,
  updateFields,
}) => {
  return (
    <div className={styles.container}>
      <div>Name</div>
      <Input
        onChange={(e) => updateFields({ name: e.target.value })}
        value={name}
      />
      <div>Email</div>
      <Input
        onChange={(e) => updateFields({ email: e.target.value })}
        value={email}
      />
      <div>Country</div>
      <Select
        onChange={(value) => updateFields({ country: value })}
        value={country}
        options={countriesOptions}
      />
      <div>City</div>
      <Select
        onChange={(value) => updateFields({ city: value })}
        value={city}
        options={citiesOptions}
      />
    </div>
  );
};

export default AddressForm;
