import React, { useMemo, useState, FormEvent } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useMultistepForm } from "../../hooks/useMultistepForm";

import Header from "./Header";
import Footer from "./Footer";
import AddressForm from "./AddressForm";
import PromoForm from "./PromoForm";
import styles from "./ChackoutForm.module.scss";

type FormData = {
  name: string;
  city: string;
  country: string;
  email: string;
  promoCode: string;
};

const INITIAL_DATA: FormData = {
  name: "",
  email: "",
  country: "",
  city: "",
  promoCode: "",
};

interface CheckoutFormProps {
  onClose: () => void;
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const [data, setData] = useState(INITIAL_DATA);

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

  const updateFields = (fields: Partial<FormData>) => {
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
      />,
      <PromoForm {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    onClose();

    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <Header title="Order" onClose={onClose} theme={theme} />
      <form>
        {isFirstStep ? step : steps}
        <Footer
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onSubmit={onSubmit}
          back={back}
          next={next}
          onClose={onClose}
        />
      </form>
    </div>
  );
};

export default CheckoutForm;
