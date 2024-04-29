import styles from './spinner.module.scss';

function Spinner() {
  return (
    <div className={styles.spinner}>
      <span className={styles.text}>Loading</span>
    </div>
  );
}

export default Spinner;
