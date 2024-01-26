import React from "react";
import { Input, Select } from "antd";
import { ErrorRow } from "../../../components";
import { SelectOptions } from "../../../types";

import styles from "./AddressForm.module.scss";

type FieldValidationMessages = Partial<{
  name: string;
  email: string;
  country: string;
  city: string;
  street: string;
}>;

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
  errors: FieldValidationMessages;
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
  errors,
}) => {
  return (
    <div className={styles.container}>
      <div>Name</div>
      <div>
        <Input
          onChange={(e) => updateFields({ name: e.target.value })}
          value={name}
          disabled={isDisabled}
          placeholder="Name"
        />
        <ErrorRow message={errors["name"]} />
      </div>
      <div>Email</div>
      <div>
        <Input
          onChange={(e) => updateFields({ email: e.target.value })}
          value={email}
          disabled={isDisabled}
          placeholder="email"
        />
        <ErrorRow message={errors["email"]} />
      </div>
      <div>Country</div>
      <div>
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
        <ErrorRow message={errors["country"]} />
      </div>
      <div>City</div>
      <div>
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
        <ErrorRow message={errors["city"]} />
      </div>
      <div>Street</div>
      <div>
        <Input
          onChange={(e) => updateFields({ street: e.target.value })}
          value={street}
          disabled={isDisabled}
          placeholder="Street address"
        />
        <ErrorRow message={errors["street"]} />
      </div>
    </div>
  );
};

export default AddressForm;
