import React from 'react';
import styles from "./footer.module.scss";
import {Link} from "react-router-dom";
import classNames from "classnames";

function Footer() {
  return (
    <footer className="footer">
      <div className={styles.wrapper}>
        <Link className={styles.link} to={"/"}>
          <p className={classNames(styles.title, "logo")}>Movies chart</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
