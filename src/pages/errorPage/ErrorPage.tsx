import React from "react";
import { Link } from "react-router-dom";
import { AppBar } from "../../components";

import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  return (
    <div>
      <AppBar />
      <div className={styles.container}>
        <h1>Whoops!</h1>
        <h2>This page got lost in conversation.</h2>
        <p>
          Not to worry. You can go to our{" "}
          <Link to="/" className={styles.link}>
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
