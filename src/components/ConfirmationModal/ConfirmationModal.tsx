import React from "react";
import { Modal } from "antd";

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
    <Modal title="Confirm Order" open={isOpen} onOk={onOk} onCancel={onCancel}>
      <p>Are you sure?</p>
    </Modal>
  );
};

export default ConfirmationModal;
