import React, { useMemo, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import isEmpty from "lodash.isempty";

import { setSelectedCountry } from "../../state/locations";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useMultistepForm } from "../../hooks/useMultistepForm";
import { useValidation } from "../../hooks/useValidation";
import { ConfirmationModal } from "../../components";

import Header from "./Header";
import Footer from "./Footer";
import AddressForm from "./AddressForm";
import PromoForm from "./PromoForm";
import { ValidationRules } from "./rules";

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

interface CheckoutFormProps {
  onClose: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onClose }) => {
  const [data, setData] = useState(INITIAL_DATA);
  const [shouldValidate, setShouldValidate] = useState(false);
  const [isOpenConfirmationModal, setIsOpenConfirmationModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const theme = useTypedSelector((state) => state.ui.theme);

  const countries = useTypedSelector((state) => state.locations.countries);

  const countriesOptions = useMemo(
    () =>
      countries.map((country) => ({
        value: country?.id,
        label: country?.name,
      })),
    [countries]
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

  const { errors, getErrors } = useValidation(
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

  const { step, isFirstStep, isLastStep, back, next } = useMultistepForm([
    <AddressForm
      {...data}
      updateFields={updateFields}
      countriesOptions={countriesOptions}
      citiesOptions={citiesOptions}
      errors={errors}
    />,
    <PromoForm {...data} updateFields={updateFields} />,
  ]);

  const handleNext = () => {
    if (!isEmpty(getErrors(data, FieldsToValidate, ValidationRules))) {
      setShouldValidate(true);
      return;
    }

    next();
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedCountry = countries.find(
      (country) => country.id == data.country
    );

    if (selectedCountry) {
      dispatch(setSelectedCountry(selectedCountry));
    }

    setIsOpenConfirmationModal(true);
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
            countriesOptions={countriesOptions}
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
          isDisabled={!isEmpty(errors)}
        />
      </form>
      <ConfirmationModal
        isOpen={isOpenConfirmationModal}
        onCancel={() => setIsOpenConfirmationModal(false)}
        onOk={() => {
          navigate("/receipt");
          onClose();
        }}
      />
    </div>
  );
};

export default CheckoutForm;
