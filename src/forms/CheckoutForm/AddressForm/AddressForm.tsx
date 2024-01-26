import React from "react";
import { Input, Select } from "antd";
import { SelectOptions } from "../../../types";

import styles from "./AddressForm.module.scss";

type AddressData = {
  name: string;
  city: string;
  country: string;
  street: string;
  email: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
  countriesOptions: SelectOptions;
  citiesOptions: SelectOptions;
  isDisabled?: boolean;
};

const AddressForm: React.FC<AddressFormProps> = ({
  name,
  country,
  email,
  city,
  street,
  countriesOptions,
  citiesOptions,
  updateFields,
  isDisabled,
}) => {
  return (
    <div className={styles.container}>
      <div>Name</div>
      <Input
        onChange={(e) => updateFields({ name: e.target.value })}
        value={name}
        disabled={isDisabled}
        placeholder="Name"
      />
      <div>Email</div>
      <Input
        onChange={(e) => updateFields({ email: e.target.value })}
        value={email}
        disabled={isDisabled}
        placeholder="email"
      />
      <div>Country</div>
      <Select
        style={{
          background: isDisabled ? "rgb(182, 182, 182)" : "transparent",
          borderRadius: "6px",
        }}
        onChange={(value) => updateFields({ country: value })}
        value={country}
        options={countriesOptions}
        disabled={isDisabled}
        className={styles.select}
        allowClear
        placeholder="Select country"
      />
      <div>City</div>
      <Select
        style={{
          background: isDisabled ? "rgb(182, 182, 182)" : "transparent",
          borderRadius: "6px",
        }}
        onChange={(value) => updateFields({ city: value })}
        value={city}
        options={citiesOptions}
        disabled={isDisabled}
        className={styles.select}
        allowClear
        placeholder="Select city"
      />
      <div>Street</div>
      <Input
        onChange={(e) => updateFields({ street: e.target.value })}
        value={street}
        disabled={isDisabled}
        placeholder="Street address"
      />
    </div>
  );
};

export default AddressForm;
