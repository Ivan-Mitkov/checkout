import React, { FormEvent } from "react";
import { PrimaryButton } from "../../../components";

import styles from "./Footer.module.scss";

interface FooterProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onSubmit: (e: FormEvent) => void;
  back: () => void;
  next: () => void;
  onClose: () => void;
}
const Footer: React.FC<FooterProps> = ({
  isFirstStep,
  isLastStep,
  onSubmit,
  back,
  next,
  onClose = () => {},
}) => {
  return (
    <div className={styles.container}>
      <PrimaryButton text="Back" onClick={isFirstStep ? onClose : back} />
      <PrimaryButton
        onClick={isLastStep ? onSubmit : next}
        text={isLastStep ? "Complete the order" : "Next"}
      />
    </div>
  );
};

export default Footer;
