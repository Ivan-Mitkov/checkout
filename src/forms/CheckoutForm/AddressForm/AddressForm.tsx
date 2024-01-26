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
      />
      <div>Email</div>
      <Input
        onChange={(e) => updateFields({ email: e.target.value })}
        value={email}
        disabled={isDisabled}
      />
      <div>Country</div>
      <Select
        onChange={(value) => updateFields({ country: value })}
        value={country}
        options={countriesOptions}
        disabled={isDisabled}
      />
      <div>City</div>
      <Select
        onChange={(value) => updateFields({ city: value })}
        value={city}
        options={citiesOptions}
        disabled={isDisabled}
      />
      <div>Street</div>
      <Select
        onChange={(value) => updateFields({ street: value })}
        value={street}
        options={citiesOptions}
        disabled={isDisabled}
      />
    </div>
  );
};

export default AddressForm;
