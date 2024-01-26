import React, { useMemo, useState, FormEvent } from "react";
import isEmpty from "lodash.isempty";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { useValidation } from "../../hooks/useValidation";

import Header from "./Header";
import Footer from "./Footer";
import AddressForm from "./AddressForm";
import PromoForm from "./PromoForm";
import { Rules } from "../../types";
import styles from "./ChackoutForm.module.scss";

type FormData = {
  name: string;
  city: string;
  country: string;
  street: string;
  email: string;
  promoCode: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  country: "",
  city: "",
  street: "",
  promoCode: "",
};

const FieldsToValidate = ["name", "email", "country", "city", "street"];

const ValidationRules: Rules = {
  name: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Name is mandatory",
  },
  email: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Email is mandatory",
  },
  country: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Country is mandatory",
  },
  city: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "City is mandatory",
  },
  street: {
    validator: (v: any) => !isEmpty(v),
    errorMessage: "Street is mandatory",
  },
};

interface CheckoutFormProps {
  onClose: () => void;
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [shouldValidate, setShouldValidate] = useState(false);

  const theme = useTypedSelector((state) => state.ui.theme);

  const countries = useTypedSelector((state) => state.locations.countries).map(
    (country) => ({ value: country?.id, label: country?.name })
  );

  const cities = useTypedSelector((state) => state.locations.cities).map(
    (city) => ({
      value: city?.id,
      label: city?.name,
      country: city?.country?.id,
    })
  );

  const citiesOptions = useMemo(
    () => cities.filter((city) => city?.country === data.country),
    [data.country]
  );

  const errors = useValidation(
    data,
    FieldsToValidate,
    ValidationRules,
    shouldValidate
  );

  const updateFields = (fields: Partial<FormData>) => {
    const isCountryChanged = Object.keys(fields)[0] === "country";

    if (isCountryChanged) {
      setData((prev) => {
        return { ...prev, city: INITIAL_DATA.city };
      });
    }

    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddressForm
        {...data}
        updateFields={updateFields}
        countriesOptions={countries}
        citiesOptions={citiesOptions}
        errors={errors}
      />,
      <PromoForm {...data} updateFields={updateFields} />,
    ]);

  const handleNext = () => {
    setShouldValidate(true);

    if (!isEmpty(errors)) return;

    next();
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    onClose();

    alert(JSON.stringify(data));
  };

  const renderFormContent = () => (
    <div className={styles.formContent}>
      {isFirstStep ? (
        step
      ) : (
        <>
          <AddressForm
            {...data}
            updateFields={updateFields}
            countriesOptions={countries}
            citiesOptions={citiesOptions}
            isDisabled={true}
            errors={errors}
          />
          <PromoForm {...data} updateFields={updateFields} />
        </>
      )}
    </div>
  );

  return (
    <div className={styles.container}>
      <Header title="Order" onClose={onClose} theme={theme} />
      <form className={styles.form}>
        {renderFormContent()}
        <Footer
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onSubmit={onSubmit}
          back={back}
          next={handleNext}
          onClose={onClose}
        />
      </form>
    </div>
  );
};

export default CheckoutForm;
