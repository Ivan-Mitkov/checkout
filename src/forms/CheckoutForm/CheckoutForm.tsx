import React, { useState, FormEvent } from "react";
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

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const theme = useTypedSelector((state) => state.ui.theme);

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <AddressForm {...data} updateFields={updateFields} />,
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
