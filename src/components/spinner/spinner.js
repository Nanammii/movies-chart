import styles from './spinner.module.scss';
import React from "react";

function Spinner() {
  return (
    <div className={styles.spinner}>
      <span className={styles.text}>Loading</span>
    </div>
  );
}

export default Spinner;
