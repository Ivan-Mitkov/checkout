import React from "react";
import { Modal } from "antd";
import { PrimaryButton } from "../../components";

import styles from "./ConfirmationModal.module.scss";
interface ConfirmationModalPropTypes {
  isOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalPropTypes> = ({
  isOpen,
  onOk,
  onCancel,
}) => {
  return (
    <Modal
      title="Confirm Order"
      open={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        <PrimaryButton
          key="cancel"
          text="Cancel"
          onClick={onCancel}
          classNames={[styles.button, styles.cancelButton]}
        />,
        <PrimaryButton
          key="confirm"
          text="Confirm Order"
          onClick={onOk}
          classNames={[styles.button]}
        />,
      ]}
    >
      <p>Are you sure?</p>
    </Modal>
  );
};

export default ConfirmationModal;
