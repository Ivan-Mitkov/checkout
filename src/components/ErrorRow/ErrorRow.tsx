import React from "react";
import isEmpty from "lodash.isempty";

import styles from "./ErrorRow.module.scss";

interface ErrorRowProps {
  message?: string;
}
const ErrorRow: React.FC<ErrorRowProps> = ({ message }) => {
  if (isEmpty(message)) return null;

  return (
    <div className={styles.container}>
      <span className={styles.text}>{message}</span>
    </div>
  );
};

export default ErrorRow;
